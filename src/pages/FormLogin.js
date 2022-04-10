import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import { useState } from "react";
const FormLogin = () => {
  const [show, setShow] = useState(false);

  const active = {
    transform: "scale(0.96)",
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
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
              <Stack spacing={1}>
                <Flex alignItems="center" flexDirection="column-reverse">
                  <Text
                    fontSize="40px"
                    fontWeight="bold"
                    as="cite"
                    color={"#4ce69f"}
                    textShadow="3px 2px #443232"
                  >
                    ¡Logeate!
                  </Text>
                  <Box borderRadius="50%" border="2px solid #52b788">
                    <Logo />
                  </Box>
                </Flex>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl id="email">
                    <FormLabel m="0" color="white">
                      Correo
                    </FormLabel>
                    <Flex alignItems="baseline" gap={4}>
                      <TextField
                        name="email"
                        placeholder="Ingrese su email"
                        type="email"
                        color="#FFFFFF"
                      />
                      <EmailIcon color="#fff" />
                    </Flex>
                  </FormControl>
                  <FormControl id="password" mb={"10px"}>
                    <FormLabel m="4px 0 0 0" color="white">
                      Contraseña
                    </FormLabel>
                    <Flex alignItems="baseline" gap={4}>
                      <TextField
                        name="password"
                        type={show ? "text" : "password"}
                        placeholder="Ingrese su contraseña"
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
                    mt={4}
                    h="35px"
                    isFullWidth
                    type="submit"
                    bgColor="#24c924"
                    color="white"
                    _active={active}
                    _hover={{ boxShadow: "0 0 3px green" }}
                  >
                    Iniciar Sesion
                  </Button>
                </form>
                <Stack spacing={3}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"center"}
                  >
                    <Link mt={2} color="#fff" _hover={{ color: "#999999" }}>
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Stack>
                  <Text fontSize="16px" color="white" as="em">
                    ¿No tienes una cuenta?
                    <Link color="#2ce62c" fontWeight="semibold">
                      Registrarse
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};
export default FormLogin;
