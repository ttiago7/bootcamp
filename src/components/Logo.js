import React from "react";
import { Img } from "@chakra-ui/react";
import logo from "../assets/images/fares-bgBlack.jpeg";

const Logo = ({ height = "40px", width = "40px" }) => {
  return (
    <Img maxH={height} maxW={width} borderRadius="50%" src={logo} alt="Logo" />
  );
};

export default Logo;
