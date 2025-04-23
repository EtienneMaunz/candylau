import {
  Button,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { FixedHeightImageContainer, StyledBoxInformation } from "./style";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../core/helpers/layout";
import { HOME_INFO } from "./Home";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import CakeIcon from "@mui/icons-material/Cake";

const MobileInformation: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={0} sx={{ width: "100%", marginTop: "1rem" }}>
        <Grid size={12} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: "2rem",
            }}
          >
            <Typography variant="h3">{HOME_INFO.intro.title}</Typography>
            <Typography variant="body1">
              {HOME_INFO.intro.description}
            </Typography>
          </StyledBoxInformation>
        </Grid>
        <Grid size={12}>
          <FixedHeightImageContainer
            $backgroundImage="/assets/gallery/laurine_et_candice.svg"
            sx={{ height: "300px" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={12} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: "1rem",
            }}
          >
            <Typography variant="h3">{HOME_INFO.cocoon.title}</Typography>
            <Typography variant="body1">
              {HOME_INFO.cocoon.description}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BakeryDiningIcon color="primary" fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Viennoiseries" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CakeIcon color="primary" fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Pâtisseries" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DinnerDiningIcon color="primary" fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Plats du jour" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalPizzaIcon color="primary" fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Snacks" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BrunchDiningIcon color="primary" fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Brunchs" />
              </ListItem>
            </List>
          </StyledBoxInformation>
        </Grid>
        <Grid size={12}>
          <FixedHeightImageContainer
            $backgroundImage="/assets/gallery/cocon.jpg"
            sx={{ height: "300px" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={12} sx={{ backgroundColor: "white" }}>
          <StyledBoxInformation
            sx={{
              padding: "1rem",
            }}
          >
            <Typography variant="h3">{HOME_INFO.brunchs.title}</Typography>
            <Typography variant="body1">
              {HOME_INFO.brunchs.description}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/brunchs");
                scrollToTop();
              }}
            >
              <Typography variant="button">Commander</Typography>
            </Button>
          </StyledBoxInformation>
        </Grid>
        <Grid size={12}>
          <FixedHeightImageContainer
            sx={{ height: "300px" }}
            $backgroundImage="/assets/gallery/brunch_1.jpg"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default MobileInformation;
