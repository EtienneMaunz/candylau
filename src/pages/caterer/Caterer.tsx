import { FC, ReactNode } from "react";
import {
  StyledBoxImg,
  StyledCaterer,
  StyledCatererListWrapper,
  StyledCatererSection,
} from "./style";
import {
  Avatar,
  Box,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { SectionTitle } from "../menu/style";
import CookieIcon from "@mui/icons-material/Cookie";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

interface Items {
  name: string;
  icon: ReactNode;
}

const SALTED_ITEMS: Items[] = [
  {
    name: "Navettes",
    icon: <LocalPizzaIcon />,
  },
  {
    name: "Croque-monsieurs",
    icon: <LocalPizzaIcon />,
  },
  {
    name: "Wraps",
    icon: <LocalPizzaIcon />,
  },
  {
    name: "Mini hot-dogs",
    icon: <LocalPizzaIcon />,
  },
  {
    name: "Plaque pizza (60 parts)",
    icon: <LocalPizzaIcon />,
  },
  {
    name: "Plaque quiches (70 pars)",
    icon: <LocalPizzaIcon />,
  },
];

const SWEET_ITEMS: Items[] = [
  {
    name: "Mini brownies",
    icon: <CookieIcon />,
  },
  {
    name: "Mini lunettes",
    icon: <CookieIcon />,
  },
  {
    name: "Mini cookies",
    icon: <CookieIcon />,
  },
  {
    name: "Mini brioche perdues",
    icon: <CookieIcon />,
  },
];

const Caterer: FC = () => {
  const theme = useTheme();

  return (
    <StyledCaterer>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" color="primary">
          Traiteur
        </Typography>
        <Typography variant="body1">
          Commandez en toute simplicité. Devis sur demande !
        </Typography>
        <SectionTitle>
          <Typography variant="h4">Salé</Typography>
        </SectionTitle>
        <StyledCatererSection>
          <Typography variant="body1">
            Des plateaux traiteur salés simples et savoureux, parfaits pour vos
            petits évènements entre collègues, amis ou juste en famille.
          </Typography>
          <StyledCatererListWrapper>
            <List>
              {SALTED_ITEMS.map((item) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
            <StyledBoxImg src="assets/gallery/box.svg" />
          </StyledCatererListWrapper>
        </StyledCatererSection>
        <SectionTitle>
          <Typography variant="h4">Sucré</Typography>
        </SectionTitle>
        <StyledCatererSection>
          <Typography variant="body1">
            Partagez un moment gourmand avec nos box goûter généreuses,
            convenant pour tous vos évènements.
          </Typography>
          <StyledCatererListWrapper>
            <List>
              {SWEET_ITEMS.map((item) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
            <StyledBoxImg src="assets/gallery/box_sucree.svg" />
          </StyledCatererListWrapper>
        </StyledCatererSection>
      </Box>
    </StyledCaterer>
  );
};

export default Caterer;
