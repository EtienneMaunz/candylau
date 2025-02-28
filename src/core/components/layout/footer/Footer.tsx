import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { StyledFooter, StyledFooterSection } from "./style";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { icon, LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

const candylauPos: LatLngExpression = [45.7472682, 4.7256556];

interface DayOpeningHours {
  day: string;
  openingHours: string;
}

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
    openingHours: "10h-12h",
  },
];

const markerIcon = icon({
  iconUrl: "/assets/location-pin.png",
  iconSize: [48, 48],
  iconAnchor: [24, 40],
});

const Footer: FC = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <StyledFooter sx={{ boxShadow: 5, gap: isMobile ? "1rem;" : "10rem;" }}>
      <StyledFooterSection>
        <Typography variant="h4">Horaires d'ouverture</Typography>
        <Box sx={{ padding: "0.5rem" }}>
          {openingHours.map((openingHour) => (
            <Box
              key={`openingHour-${openingHour.day}`}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="body1"
                sx={{ textAlign: "end", marginRight: "0.5rem" }}
              >
                {openingHour.day}:
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "2px" }}>
                {openingHour.openingHours}
              </Typography>
            </Box>
          ))}
        </Box>
      </StyledFooterSection>
      <StyledFooterSection>
        <Typography variant="h4">Contacts et informations</Typography>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <PlaceIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link
                target="_blank"
                color="primary"
                underline="hover"
                whiteSpace="nowrap"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47f4edbbfc935273:0xbd028cddbcc0989f?sa=X&ved=1t:8290&ictx=111"
              >
                81 Av. Edouard Millaud, 69290 Craponne
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Link
                color="primary"
                underline="hover"
                whiteSpace="nowrap"
                href="mailto:candice.laurine@gmail.com"
              >
                candice.laurine@gmail.com
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="09 82 72 64 91" />
          </ListItem>
        </List>
      </StyledFooterSection>
      <StyledFooterSection>
        <Typography variant="h4">Accès</Typography>
        <Box sx={{ paddingTop: "1rem", width: "300px", height: "200px" }}>
          <MapContainer
            style={{ width: "100%", height: "100%" }}
            center={candylauPos}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={markerIcon} position={candylauPos} />
          </MapContainer>
        </Box>
      </StyledFooterSection>
    </StyledFooter>
  );
};
export default Footer;
