import React, { useEffect } from "react";
import { Center, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./fragment/LoginForm";
import ImageLogin from "../../assets/image-login.jpg";
import { checkLogged } from "../../utils/constants";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = checkLogged();
    if (isLoggedIn) {
      navigate("/user");
    }
    document.title = "Fake Store | Masuk";
  }, [navigate]);
  return (
    <Container
      maxW={{ base: "100%", md: "80%" }}
      gridTemplateRows="repeat(2, 1fr)"
    >
      <Center>
        <Grid
          gap={{ base: "5", lg: "90" }}
          h="100vh"
          templateColumns={{ lg: "repeat(2, 1fr)" }}
          justifyContent="center"
        >
          <GridItem margin={{ base: "auto", lg: "auto 0" }}>
            <LoginForm />
          </GridItem>
          <GridItem margin={{ base: "5", lg: "auto 0" }}>
            <Center>
              <Image
                src={ImageLogin}
                alt="image login"
                animate={{ y: [-20, 20, -20] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                width={{ base: "80%", sm: "60%", lg: "60%" }}
              />
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  );
}
