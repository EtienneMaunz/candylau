import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { FC } from "react";
import { FixedHeightImageContainer, StyledBoxInformation } from "./style";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../core/helpers/layout";

const CommonInformation: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={0} sx={{ width: "100%", marginTop: "1rem" }}>
        <Grid size={6} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: "2rem",
            }}
          >
            <Typography variant="h3">Candice</Typography>
            <Typography variant="body1">
              Patissière depuis maintenant 10 ans et passionnée par son métier,
              elle est prête à vous conconcter des petites merveilles.
            </Typography>
          </StyledBoxInformation>
        </Grid>
        <Grid size={6}>
          <FixedHeightImageContainer
            $backgroundImage="/assets/gallery/gateaux_kinder.jpg"
            sx={{ height: "400px" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={6}>
          <FixedHeightImageContainer
            $backgroundImage="/assets/gallery/tarte_framboises.jpg"
            sx={{ height: "400px" }}
          />
        </Grid>
        <Grid size={6} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: { xs: "1rem", sm: "2rem" },
            }}
          >
            <Typography variant="h3">Laurine</Typography>
            <Typography variant="body1">
              Forte de son expérience de conseillère accueil, Launrine sera là
              pour vous chouchouter à tout moment de la journée.
            </Typography>
          </StyledBoxInformation>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={6} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: { xs: "1rem", sm: "2rem" },
            }}
          >
            <Typography variant="h3">Le concept</Typography>
            <Typography variant="body1">
              Toutes les deux passionnées par l'univers de la cuisine, nous
              allons nous préparer une multitude de délices salés et sucrés,
              tous fait maison évidemment. Vous pourrez venir vous restaurer
              pour le petit déjeuner, entre midi et deux ou bien tout simplement
              pour une petite pause gourmande tout au long de la journée.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/menu");
                scrollToTop();
              }}
            >
              <Typography variant="button">Voir le menu</Typography>{" "}
            </Button>
          </StyledBoxInformation>
        </Grid>
        <Grid size={6}>
          <FixedHeightImageContainer
            sx={{ height: "400px" }}
            $backgroundImage="/assets/gallery/patisseries.jpg"
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={6}>
          <FixedHeightImageContainer
            sx={{ height: "400px" }}
            $backgroundImage="/assets/gallery/brunchs.jpg"
          />
        </Grid>
        <Grid size={6} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: { xs: "1rem", sm: "2rem" },
            }}
          >
            <Typography variant="h3">Les brunchs</Typography>
            <Typography variant="body1">
              Adepte de moments de partage et de convivialité avec notre famille
              et nos amis, nous souhaitons vous proposer des box brunch que vous
              pourrez déguster seul, en famille, en couple ou entre amis. Il y
              en aura pour tous les goux !
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/brunchs");
                scrollToTop();
              }}
            >
              <Typography variant="button">Commander</Typography>{" "}
            </Button>
          </StyledBoxInformation>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonInformation;
