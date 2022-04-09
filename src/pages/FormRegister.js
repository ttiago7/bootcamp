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
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
function FormRegister() {
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
              <Stack spacing={1}>
                <Flex alignItems="center" flexDirection="column-reverse">
                  <Text
                    fontSize="40px"
                    fontWeight="bold"
                    as="cite"
                    color={"#4ce69f"}
                    textShadow="3px 2px #443232"
                  >
                    ¡Regristate!
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
                      contraseña
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
                  <Text
                    fontSize="15px"
                    fontWeight="semibold"
                    color={"#fff"}
                    pb={"10px"}
                    justifyContent={"center"}
                  >
                    O registrate con:
                  </Text>
                  <Flex justifyContent={"center"} gap={"30px"} pb={"8px"}>
                    <Box
                      bgColor={"#fff"}
                      borderRadius="90%"
                      p={2}
                      cursor="pointer"
                    >
                      <FcGoogle color="#fff" fontSize={"30px"} />
                    </Box>
                    <Box
                      bgColor={"#168aad"}
                      borderRadius="90%"
                      p={2}
                      cursor="pointer"
                    >
                      <FaFacebookF color="#fff" fontSize={"30px"} />
                    </Box>
                  </Flex>
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
                <Box
                  mt={3}
                  fontSize="16px"
                  color={"#1b74e4"}
                  as="em"
                  fontWeight="semibold"
                ></Box>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
}
export default FormRegister;
