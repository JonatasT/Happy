import React from "react";

import { Heading, Grid, Flex, Box, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import Spin from "../components/Spin";
import ArrowAnimated from "../components/ArrowAnimated";

function Landing() {
  // const [isDisplayed, setIsDisplayed] = React.useState(false);
  const [autoplay, setAutoplay] = React.useState(false);

  return (
    <Grid
      as="main"
      height = {[
        "100%", // base
        "100%", // 480px upwards
        "100%", // 768px upwards
        "100vh", // 992px upwards
      ]}
      templateColumns="2fr 1fr 1fr"
      templateRows="1fr 2fr 1fr"
      templateAreas="
        'logo lottieAnm locality'
        'headline . .'
        '. . action '
      "
      justifyContent="center"
      alignItems="center"
      backgroundImage="url('/bg.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start" paddingTop="1rem">
        <Box marginLeft="10rem">
        <img src="/logoHappyWhite.svg" alt="Happy" />
        </Box>
        
        <Spin
          contentSpin="+"
          position="absolute"
          timming={30}
          size={500}
          opacity={0.1}
        />
      </Flex>

      <Flex gridArea="lottieAnm" height="100%">
        <Spin
          contentSpin="+"
          position="relative"
          timming={10}
          size={300}
          opacity={0.15}
        />
        <Box position="absolute" marginTop={300} marginLeft={240}>
          <ArrowAnimated autoplay={autoplay} />
        </Box>
      </Flex>

      <Flex
        gridArea="headline"
        flexDir="column"
        height="100%"
        marginLeft="10rem"
      >
        <Box height="100%" marginTop={["5rem", "10rem", "16rem"]}>
          <Heading
            as="h1"
            fontSize="6xl"
            lineHeight="shorter"
            maxWidth={600}
            onMouseOver={() => setAutoplay(!autoplay)}
          >
            Leve felicidade para o mundo
          </Heading>

          <Heading
            as="h2"
            size="xl"
            fontWeight={600}
            lineHeight="none"
            marginTop={4}
            maxWidth={600}
          >
            Visite um hospital e mude o dia de alguém para melhor
          </Heading>
          <Heading position="absolute" as="p" fontWeight={300} marginTop="2rem" marginRight="20px" fontSize={18} >
            Made by {<a href="https://github.com/JonatasT">JonatasT</a>} © Happy 2020. Todos os Direitos Reservados
          </Heading>
        </Box>
      </Flex>

      <Flex
        gridArea="locality"
        flexDir="column"
        textAlign="right"
        height="100%"
        position="relative"
        paddingTop="1rem"
        marginRight="10rem"
      >
        <Heading as="p" marginTop={10}  fontSize={24}>
          Niterói
        </Heading>
        <Heading as="p" fontWeight={400} marginTop={2} fontSize={24}>
          Rio de Janeiro
        </Heading>
        
      </Flex>

      <Flex
        gridArea="action"
        flexDir="column"
        height="100%"
        position="relative"
        textAlign="right"
        marginRight="10rem"
      >
        <Spin
          contentSpin="-"
          position="relative"
          timming={30}
          size={200}
          opacity={0.15}
        />
        <Link to="/app">
          <IconButton
            variantColor="orange"
            aria-label="Encontrar lugar para visita"
            size="lg"
            fontSize={25}
            icon="arrow-forward"
            width={20}
            height={20}
            marginLeft="auto"
            marginTop="-5rem"
            borderRadius={30}
            color="white"
            transition="1s"
            backgroundImage="linear-gradient(329.54deg, #FF6400 0%, #FF9900 100%)"
            _hover={{
              backgroundImage:
                "linear-gradient(329.54deg, #FF6400 0%, #FF9900 70%)",
              transition: "1s",
            }}
          />
        </Link>
        
         
        

      </Flex>
    </Grid>
  );
}

export default Landing;
