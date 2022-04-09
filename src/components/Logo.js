import { Img } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/fares-bgBlack.jpeg";

const Logo = () => {
  return <Img w="50px" h="50px" borderRadius="50%" src={logo} alt="Logo" />;
};

export default Logo;
