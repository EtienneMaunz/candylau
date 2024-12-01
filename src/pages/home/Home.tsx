import { FC } from "react";
import {
  Information,
  InformationContainer,
  TypographiesContainer,
  WallContainer,
} from "./style";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import CommonInformation from "./CommonInformation";
import MobileInformation from "./MobileInformation";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  console.log(import.meta.env.VITE_BACKEND_BASE_URL);

  return (
    <>
      <WallContainer
        sx={{ height: { xs: "300px", sm: "600px" } }}
        $backgroundImage="/candylau/assets/fruits.jpg"
      >
        <TypographiesContainer>
          <Typography color="white" variant="h3" gutterBottom>
            Candy'Lau
          </Typography>
          <Typography color="white" variant="h4" sx={{ textAlign: "center" }}>
            Délices sucrés et salés
          </Typography>
          <Button
            sx={{ marginTop: "2rem" }}
            variant="contained"
            onClick={() => navigate("/candylau/brunchs")}
          >
            Commander
          </Button>
        </TypographiesContainer>
      </WallContainer>
      <InformationContainer>
        <Information
          sx={{
            width: { xs: "90%", sm: "60%" },
            marginBottom: { xs: "1rem", sm: "2rem" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: { xs: "1rem", sm: "2rem" },
            }}
          >
            À propos de nous
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
            }}
          >
            Initialement, Candy'Lau c'est deux basketteuses de 29 ans avec une
            âme de compétitrice. Après 10 années en tant que coéquipières sur
            les terrains, il était temps pour nous de faire équipe pour le
            projet de notre vie... Et suite à 2 ans de recherche active et de
            travail dans l'ombre, c'est comme ça que notre rêve devient enfin
            une réalité: Candy'Lau !
          </Typography>
          {isMobile ? <MobileInformation /> : <CommonInformation />}
        </Information>
      </InformationContainer>
    </>
  );
};

export default Home;
