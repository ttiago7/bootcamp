import React from "react";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navbarstyles } from "./_styles";
import { profileOptions } from "../data/links";
import { IoPersonCircleOutline } from "react-icons/io5";

const PerfilButton = () => {
  return (
    <>
      <Menu closeOnBlur>
        <MenuButton
          p={["7px", "9px"]}
          transition="all 0.2s"
          borderRadius="25px 25px 0px 25px"
          bgColor="green.600"
          fontWeight="bold"
          boxShadow="0px 0px 7px 0px orange"
        >
          <IoPersonCircleOutline color="white" fontSize="30px" />
        </MenuButton>
        <MenuList w="30px">
          <MenuGroup>
            {profileOptions.map((opt) => (
              <Link key={opt.id} to={opt.link}>
                <MenuItem gap={2}>
                  <Text
                    style={navbarstyles.navbarLink}
                    _active={navbarstyles.active}
                    gap={1}
                  >
                    {opt.icon}
                    {opt.name}
                  </Text>
                </MenuItem>
              </Link>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};
export default PerfilButton;
