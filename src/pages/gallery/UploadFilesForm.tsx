import { FC } from "react";
import { StyledFilesForm } from "./style";
import { TextField, Typography } from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FilesUploadSchema } from "./validation";

export const UploadFilesForm: FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FilesUploadSchema>();

  const { fields: filesInfo } = useFieldArray({
    control,
    name: "filesInfo",
  });

  return (
    <StyledFilesForm>
      {filesInfo.map((fileInfo, index) => (
        <>
          <Typography variant="h6">{fileInfo.fileName}</Typography>
          <Controller
            control={control}
            name={`filesInfo.${index}.name`}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Nom de la photo"
                variant="outlined"
                sx={{ width: "80%" }}
                {...(register(`filesInfo.${index}.name`), { required: true })}
                error={errors.filesInfo?.[index]?.name?.message !== undefined}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name={`filesInfo.${index}.description`}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                sx={{ width: "80%" }}
                {...(register(`filesInfo.${index}.description`),
                { required: true })}
                error={
                  errors.filesInfo?.[index]?.description?.message !== undefined
                }
                value={value}
                onChange={onChange}
              />
            )}
          />
        </>
      ))}
    </StyledFilesForm>
  );
};
