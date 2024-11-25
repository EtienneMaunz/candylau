import { FC } from "react";
import {
  MainContainer,
  OpeningHours,
  SectionTitle,
  StyledInformationAndAccess,
} from "./styles";
import { Box, Grid2 as Grid, Link, Typography } from "@mui/material";
import { DayOpeningHours } from "./types";
import { AccessTime } from "@mui/icons-material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { icon, LatLngExpression } from "leaflet";

const candylauPos: LatLngExpression = [45.7472682, 4.7256556];

const openingHours: DayOpeningHours[] = [
  {
    day: "Lundi",
    openingHours: "Fermé",
  },
  {
    day: "Mardi",
    openingHours: "7h-18h",
  },
  {
    day: "Mercredi",
    openingHours: "7h-18h",
  },
  {
    day: "Jeudi",
    openingHours: "7h-18h",
  },
  {
    day: "Vendredi",
    openingHours: "7h-18h",
  },
  {
    day: "Samedi",
    openingHours: "8h30-18h",
  },
  {
    day: "Dimanche",
    openingHours: "10h-15h",
  },
];

const markerIcon = icon({
  iconUrl: "/assets/location-pin.png",
  iconSize: [48, 48],
  iconAnchor: [24, 40],
});

export const InformationAndAccess: FC = () => (
  <StyledInformationAndAccess>
    <MainContainer>
      <Typography color="primary" variant="h4">
        Informations et accès
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Vous trouverez ici toutes les informations utiles sur la boutique et les
        nouveautés.
      </Typography>
      <SectionTitle>
        <AccessTime />
        <Typography variant="h5">Horaires d'ouvertures</Typography>
      </SectionTitle>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        La boutique est ouverte en semaine et le week-end suivant les horaires
        suivants:
      </Typography>
      <OpeningHours container>
        {openingHours.map((openingHour) => (
          <>
            <Grid key={openingHour.day} size={6}>
              <Typography
                variant="body1"
                sx={{ textAlign: "end", marginRight: "1rem" }}
              >
                {openingHour.day}:
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="body2">
                {openingHour.openingHours}
              </Typography>
            </Grid>
          </>
        ))}
      </OpeningHours>
      <SectionTitle>
        <AccessTime />
        <Typography variant="h5">Accès</Typography>
      </SectionTitle>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="body1" whiteSpace="nowrap">
          La boutique est située au
        </Typography>
        <Link
          target="_blank"
          color="primary"
          underline="hover"
          whiteSpace="nowrap"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47f4edbbfc935273:0xbd028cddbcc0989f?sa=X&ved=1t:8290&ictx=111"
        >
          81 Av. Edouard Millaud, 69290 Craponne
        </Link>
      </Box>
      <Box sx={{ width: "100%", height: { xs: "300px", sm: "500px" } }}>
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={candylauPos}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={markerIcon} position={candylauPos} />
        </MapContainer>
      </Box>
    </MainContainer>
  </StyledInformationAndAccess>
);
