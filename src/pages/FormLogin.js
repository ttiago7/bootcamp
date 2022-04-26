import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import TextField from "../components/TextField";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, Stack, Text } from "@chakra-ui/react";

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const active = {
    transform: "scale(0.96)",
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email invalido")
            .required("Email requerido"),
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
            <Stack spacing={2} mx={"auto"} maxW={"lg"}>
              <Box
                bg={"#161a1d"}
                rounded={"lg"}
                p={6}
                w="270px"
                boxShadow={"dark-lg"}
              >
                <Flex alignItems="center" flexDirection="column-reverse">
                  <Text
                    fontSize="40px"
                    fontWeight="bold"
                    as="cite"
                    mb="10px"
                    color={"#4ce69f"}
                    textShadow="3px 2px #443232"
                  >
                    ¡Logeate!
                  </Text>
                  <Box borderRadius="50%" border="2px solid #52b788">
                    <Logo height="55px" width="55px" />
                  </Box>
                </Flex>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl id="email" mb="12px">
                    <Flex alignItems="baseline" gap={4}>
                      <TextField
                        name="email"
                        placeholder="Email"
                        type="email"
                        color="#FFFFFF"
                      />
                      <EmailIcon color="#fff" />
                    </Flex>
                  </FormControl>
                  <FormControl id="password" mb={"10px"}>
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
                    m="10px 0"
                    h="35px"
                    isFullWidth
                    type="submit"
                    bgColor="rgb(0, 90, 255)"
                    color="white"
                    _active={active}
                    _hover={{ boxShadow: "0 0 3px green" }}
                  >
                    Iniciar Sesion
                  </Button>
                </form>
                <Box>
                  <Text fontSize="16px" color="white" as="em">
                    ¿No tienes una cuenta?
                  </Text>
                  <Link to="/register" fontWeight="semibold">
                    <Text color="#00ff1f">Registrarse!</Text>
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Flex>
        )}
      </Formik>
    </>
  );
};
export default FormLogin;
