import React from "react";
import { ChevronDownIcon, SettingsIcon, InfoIcon } from "@chakra-ui/icons";
import { FaCamera } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const ButtonPerfil = () => {
  return (
    <>
      <Menu closeOnBlur>
        <MenuButton
          p={"8px 16px"}
          transition="all 0.2s"
          borderRadius="md"
          bgColor="#000000"
          color="#2ec4b6"
          fontWeight="bold"
          boxShadow="xl"
        >
          Perfil
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem gap={2}>
              <InfoIcon />
              Mis datos
            </MenuItem>
            <MenuItem gap={2}>
              <FaCamera />
              Foto
            </MenuItem>
            <MenuItem gap={2}>
              <SettingsIcon />
              Modificar
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};
export default ButtonPerfil;
