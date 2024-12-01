import { FC, useContext, useEffect, useRef, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { GallerySkeleton, StyledGallery } from "./style";
import { Box, Modal, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { AddAPhotoRounded, DeleteForever } from "@mui/icons-material";
import { AuthContext } from "../../core/contexts/AuthContext";
import {
  AppFile,
  deleteFile,
  fetchPictures,
  uploadFiles,
} from "../../core/services/files_service";
import { SnackBarContext } from "../../core/contexts/SnackBarContext";
import { AppModal } from "../../core/components/modals/Modal";
import { UploadFilesForm } from "./UploadFilesForm";
import { filesUploadSchema, FilesUploadSchema } from "./validation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { appTheme } from "../../themes/appThemes";
import { UUID } from "crypto";
import * as _ from "lodash";

const Gallery: FC = () => {
  const fileUploadInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));
  const { isAuthenticated } = useContext(AuthContext);
  const { setOpen } = useContext(SnackBarContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | undefined>(undefined);
  const [pictures, setPictures] = useState<AppFile[]>([]);

  const fetchPicturesMutation = useMutation({
    mutationFn: fetchPictures,
    onSuccess: (res) => {
      setPictures(res.data);
    },
    onError: () => {
      setOpen({
        open: true,
        type: "error",
        message:
          "Oups, une erreur est survenue lors du chargement des images...",
      });
    },
  });

  useEffect(() => {
    fetchPicturesMutation.mutate();
  }, []);

  const methods = useForm<FilesUploadSchema, undefined, FilesUploadSchema>({
    defaultValues: {
      filesInfo: [],
    },
    resolver: yupResolver(filesUploadSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isDirty, isValid },
  } = methods;

  const onFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length < 1) {
      return;
    }

    const formData = new FormData();
    const fileList = Array.from(files);

    Array.from(files).forEach((file) => formData.append("files", file));

    reset({
      filesInfo: fileList.map((file) => ({
        fileName: file.name,
        name: "",
        description: "",
      })),
    });

    setFormData(formData);
    setIsModalOpen(true);
  };

  const onSubmit = (data: FilesUploadSchema) => {
    if (!formData) {
      setOpen({
        open: true,
        type: "error",
        message: "Oups, aucun fichier n'a été sélectionné...",
      });

      setIsModalOpen(false);

      return;
    }

    formData.append("filesInfo", JSON.stringify(data.filesInfo));

    setIsUploading(true);

    uploadFiles(formData)
      .then(() => {
        setOpen({
          open: true,
          type: "success",
          message: "Les fichiers ont bien été téléchargés !",
        });

        fetchPicturesMutation.mutate();
        setIsModalOpen(false);
      })
      .catch(() => {
        setOpen({
          open: true,
          type: "error",
          message: "Oups, erreur pendant le téléchargement des fichiers...",
        });
      })
      .finally(() => setIsUploading(false));
  };

  const removePicture = (id: UUID) => {
    deleteFile({ id })
      .then(() => {
        setOpen({
          open: true,
          type: "success",
          message: "L'image a bien été supprimée !",
        });

        fetchPicturesMutation.mutate();
      })
      .catch((err) => {
        console.log(err);
        setOpen({
          open: true,
          type: "error",
          message: "Oups, erreur pendant la suppression de l'image...",
        });
      });
  };

  return fetchPicturesMutation.isPending || fetchPicturesMutation.isIdle ? (
    <GallerySkeleton>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
        <Skeleton
          key={`img-skeleton-${index}`}
          variant="rectangular"
          width={isMobile ? `calc((100% / 2) - 2px)` : `calc((100% / 4) - 3px)`}
          height={isMobile ? 150 : 248}
          animation="wave"
        />
      ))}
    </GallerySkeleton>
  ) : (
    <StyledGallery>
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          margin: "unset",
          padding: "4px",
        }}
        cols={isMobile ? 2 : 4}
      >
        {_.sortBy(pictures, (p) => p.createdAt)
          .reverse()
          .map((item) => (
            <ImageListItem key={item.name}>
              <img
                src={`data:image/jpeg;base64, ${item.base64}`}
                width="100%"
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar title={item.name} subtitle={item.description} />
              {isAuthenticated && (
                <IconButton
                  sx={{
                    padding: "4px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                  color="primary"
                  onClick={() => removePicture(item.id)}
                >
                  <DeleteForever />
                </IconButton>
              )}
            </ImageListItem>
          ))}
        {isAuthenticated && (
          <ImageListItem key="Add new pictures">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                border: `${appTheme.palette.primary.main} 1px dashed`,
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: appTheme.palette.action.hover,
                },
              }}
              onClick={() => {
                fileUploadInputRef.current?.click();
              }}
            >
              <IconButton color="primary" sx={{ margin: "0.5rem 0" }}>
                <AddAPhotoRounded />
                <input
                  ref={fileUploadInputRef}
                  hidden
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onFilesSelected}
                />
              </IconButton>
            </Box>
          </ImageListItem>
        )}
      </ImageList>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AppModal
          onClose={() => setIsModalOpen(false)}
          onValidate={handleSubmit(onSubmit)}
          title="Nouvelles images"
          isValidating={isUploading}
          isValidationDisabled={!isDirty || !isValid}
        >
          <FormProvider {...methods}>
            <UploadFilesForm />
          </FormProvider>
        </AppModal>
      </Modal>
    </StyledGallery>
  );
};

export default Gallery;
