import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactDimmer } from "react-dimmer";
import { linksNavbar } from "../data/links";
import BigLogo from "../components/BigLogo";
import SlideBar from "../components/SlideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "../components/LoginButton";
import { navbarstyles } from "../components/_styles";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Box bgGradient="linear(to-l, #1ca183,#4acf86)" color="black" m="0">
      <Container maxWidth="90%" p="1rem 0">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["row-reverse", "row-reverse", "row", "row"]}
        >
          <Box d={["unset", "unset", "none", "none"]}>
            <LoginButton />
          </Box>
          <BigLogo />
          <Flex
            d={["none", "none", "flex", "flex"]}
            alignItems="center"
            gap={4}
          >
            {linksNavbar.map((item) => (
              <Link to={item.link} key={item.id}>
                <Text
                  style={navbarstyles.navbarLink}
                  gap="4px"
                  _hover={navbarstyles.hover}
                >
                  {item.icon}
                  {item.name}
                </Text>
              </Link>
            ))}
            <LoginButton />
          </Flex>
          <Box display={["unset", "unset", "none", "none"]}>
            <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
            <SlideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ReactDimmer
              isOpen={menuOpen}
              exitDimmer={setMenuOpen}
              zIndex={100}
              blur={1}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default Navbar;
