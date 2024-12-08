import { FC } from "react";
import {
  MenuContainer,
  MenuItem,
  Section,
  SectionTitle,
  StyledMenu,
} from "./style";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { MenuSection } from "./types";

const sections: MenuSection[] = [
  {
    title: "Nos formules",
    items: [
      {
        name: "Petite faim",
        description:
          "Hot dog ou Croque monsieur ou Pizza ou Jambon beurre + Boisson",
        price: 5.9,
      },
      {
        name: "Sandwich",
        description: "Sandwich classique + Verrine ou flan* + Boisson",
        price: 10.1,
      },
      {
        name: "Wrap / Panini",
        description: "Wrap ou panini + Verrine ou flan* + Boisson",
        price: 11.1,
      },
      {
        name: "Salade",
        description: "Salade + Verrine ou flan* + Boisson",
        price: 12.8,
      },
      {
        name: "Plat du jour",
        description: "Plat du jour + Verrine ou flan* + Boisson",
        price: 13.8,
      },
    ],
    information: "*Supplément de 1€ pour les pâtisseries",
  },
  {
    title: "Petit déjeuner",
    items: [
      {
        name: "Offre petit déjeuner",
        description:
          "Café ou Thé (supplément 0.40€) + Croissant ou pain au chocolat",
        price: 2.8,
      },
    ],
  },
  {
    title: "Nos boissons",
    items: [
      {
        name: "Café",
        description: "",
        price: 1.8,
      },
      {
        name: "Capuccino*",
        description: "",
        price: 3.0,
      },
      {
        name: "Latté*",
        description: "",
        price: 3.0,
      },
      {
        name: "Chocolat chaud*",
        description: "",
        price: 3.0,
      },
      {
        name: "Thé",
        description: "",
        price: 2.2,
      },
      {
        name: "Jus d'orange maison",
        description: "",
        price: 3.6,
      },
      {
        name: "Soda",
        description: "",
        price: 1.9,
      },
      {
        name: "Eau",
        description: "",
        price: 1.1,
      },
    ],
    information: "*Supplément topping 0.30€",
  },
];

export const Menu: FC = () => (
  <StyledMenu>
    <MenuContainer>
      <Typography variant="h4" color="primary">
        Notre Menu
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Vous trouverez ici toutes les informations concernant nos formules, nos
        offres petit déjeuner et nos boissons.
      </Typography>
      {sections.map((section) => (
        <Section key={section.title}>
          <SectionTitle>
            <Typography variant="h4">{section.title}</Typography>
          </SectionTitle>
          {section.items.map((item) => (
            <MenuItem key={item.name}>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography
                  color="primary"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  color="primary"
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {item.price}€
                </Typography>
              </Stack>
              <Typography variant="body1">{item.description}</Typography>
              <Divider />
            </MenuItem>
          ))}
          {section.information && (
            <Box
              sx={{
                paddingRight: "1rem",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="body2">{section.information}</Typography>
            </Box>
          )}
        </Section>
      ))}
    </MenuContainer>
  </StyledMenu>
);
