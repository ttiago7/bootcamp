import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Stack,
  Text,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import ButtonLogin from "../components/ButtonLogin";
const FormRegister = () => {
  const [show, setShow] = useState(false);
  const active = {
    transform: "scale(0.96)",
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Nombre demasiado corto")
          .required("Nombre requerido"),
        email: Yup.string().email("Email invalido").required("Email requerido"),
        password: Yup.string()
          .required("Contraseña requerida")
          .min(6, "Contraseña corta"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={2} mx={"auto"} maxW={"lg"} px={8}>
            <Box bg={"#161a1d"} rounded={"lg"} p={6} boxShadow={"dark-lg"}>
              <Flex alignItems="center" flexDirection="column-reverse">
                <Text
                  fontSize="40px"
                  fontWeight="bold"
                  as="cite"
                  color={"#4ce69f"}
                  textShadow="3px 2px #443232"
                >
                  ¡Registrate!
                </Text>
                <Box borderRadius="50%" border="2px solid #52b788">
                  <Logo />
                </Box>
              </Flex>
              <form onSubmit={formik.handleSubmit}>
                <FormControl id="name">
                  <FormLabel m="0" color="white">
                    Nombre Completo
                  </FormLabel>
                  <Flex alignItems="baseline" gap={4}>
                    <TextField
                      name="name"
                      placeholder="Nombre"
                      type="text"
                      color="#FFFFFF"
                    />
                    <BsFillPersonFill color="#fff" />
                  </Flex>
                </FormControl>
                <FormControl mb={1} id="email">
                  <FormLabel m="0" color="white">
                    Correo
                  </FormLabel>
                  <Flex alignItems="baseline" gap={4}>
                    <TextField
                      name="email"
                      placeholder="Correo electronico"
                      type="email"
                      color="#FFFFFF"
                    />
                    <EmailIcon color="#fff" />
                  </Flex>
                </FormControl>
                <FormControl mb={3} id="password">
                  <FormLabel m="0" color="white">
                    Contraseña
                  </FormLabel>
                  <Flex alignItems="baseline" gap={4}>
                    <TextField
                      name="password"
                      type={show ? "text" : "password"}
                      placeholder="Contraseña"
                      color="#FFFFFF"
                    />
                    <Box onClick={() => setShow(!show)}>
                      {show ? (
                        <ViewOffIcon
                          _active={active}
                          color="white"
                          cursor="pointer"
                        />
                      ) : (
                        <ViewIcon
                          _active={active}
                          color="white"
                          cursor="pointer"
                        />
                      )}
                    </Box>
                  </Flex>
                </FormControl>
                <Button
                  mt={1.5}
                  color="white"
                  isFullWidth
                  type="submit"
                  h="35px"
                  bgColor="#24c924"
                  _active={active}
                  _hover={{ boxShadow: "0 0 3px green" }}
                >
                  Registrarse
                </Button>
              </form>
              <Divider m="1.3rem 0" />
              <ButtonLogin />
            </Box>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};
export default FormRegister;
