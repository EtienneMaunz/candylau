import { FC } from "react";
import {
  Information,
  InformationContainer,
  TypographiesContainer,
  WallContainer,
} from "./style";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CommonInformation from "./CommonInformation";
import MobileInformation from "./MobileInformation";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../core/helpers/layout";

export const HOME_INFO = {
  intro: {
    title: "À propos",
    description:
      "Candy'Lau, c’est avant tout une histoire d’amitié ! Au début sur un terrain de basket et maintenant, autour d’une passion commune: ravir vos papilles. Passionnées par la pâtisserie et le bien manger en général, nous avons imaginé Candy'Lau comme un lieu convivial et chaleureux où règne le fait maison.",
  },
  cocoon: {
    title: "Notre cocon",
    description:
      "Nous vous accueillons à toute heure de la journée avec des délices sucrés et salés. Des entremets pour votre repas dominical, un petit déjeuner ou repas du midi fait maison, vous trouverez forcément votre bonheur.",
  },
  brunchs: {
    title: "Nos brunchs",
    description:
      "Chaque dimanche, uniquement à emporter, nous vous proposons des brunchs variés préparés avec des produits de saison, contentant du salé et du sucré: à déguster seul, à deux ou en famille !",
  },
};

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  return (
    <>
      <WallContainer
        sx={{ height: { xs: "300px", sm: "600px" } }}
        $backgroundImage="/assets/gallery/candylau_background.svg"
      >
        <TypographiesContainer>
          <Typography color="white" variant="h3" gutterBottom>
            Candy'Lau
          </Typography>
          <Typography color="white" variant="h4" sx={{ textAlign: "center" }}>
            Délices sucrés et salés
          </Typography>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate("/brunchs");
                scrollToTop();
              }}
            >
              Commander
            </Button>
            <Typography
              color="white"
              variant="button"
              sx={{ textAlign: "center" }}
            >
              ou
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/menu");
                scrollToTop();
              }}
            >
              Voir la carte
            </Button>
          </Box>
        </TypographiesContainer>
      </WallContainer>
      <InformationContainer>
        <Information
          sx={{
            width: { xs: "90%", sm: "60%" },
            marginBottom: { xs: "1rem", sm: "2rem" },
          }}
        >
          {isMobile ? <MobileInformation /> : <CommonInformation />}
        </Information>
      </InformationContainer>
    </>
  );
};

export default Home;
