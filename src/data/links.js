import { IoIosAddCircle } from "react-icons/io";
import {
  FaHome,
  FaPhoneAlt,
  FaUsers,
  FaCamera,
  FaWpforms,
} from "react-icons/fa";
import { SettingsIcon, InfoIcon } from "@chakra-ui/icons";

export const linksNavbarAdmin = [
  { id: 1, link: "/post", name: "Crear Post", icon: <IoIosAddCircle /> },
  { id: 2, link: "/", name: "Home", icon: <FaHome /> },
  { id: 3, link: "/nosotros", name: "Nosotros", icon: <FaUsers /> },
  { id: 4, link: "/contacto", name: "Contactos", icon: <FaPhoneAlt /> },
];
export const linksNavbar = [
  { id: 1, link: "/", name: "Home", icon: <FaHome /> },
  { id: 2, link: "/nosotros", name: "Nosotros", icon: <FaUsers /> },
  { id: 3, link: "/contacto", name: "Contactos", icon: <FaPhoneAlt /> },
];
export const buttonsLogin = [
  { id: 1, link: "/login", name: "Login" },
  { id: 2, link: "/register", name: "Register" },
];
export const profileOptions = [
  { id: 1, link: "/", name: "Mis datos", icon: <InfoIcon /> },
  { id: 2, link: "/", name: "Foto", icon: <FaCamera /> },
  { id: 3, link: "/", name: "Modificar", icon: <SettingsIcon /> },
  { id: 4, link: "/cv", name: "CV", icon: <FaWpforms /> },
];
