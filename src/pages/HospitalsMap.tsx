import React, { useState } from "react";

import { Link } from "react-router-dom";
import { 
  Grid, 
  Flex, 
  Box, 
  Image, 
  Button, 
  IconButton, 
  Heading, 
  Text 
  } from "@chakra-ui/core";
import { FcMenu } from "react-icons/fc";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import heartAnimated from "../components/heartAnimated.json";
import Lottie from "react-lottie";

function HospitalsMap(props: { autoplay: any; }) {
  const [isToggleActive, setIsToggleActive] = useState(true);
  const [isLoved, setLoveState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });


  const { autoplay } = props;

  const defaultOptions = {
    loop: false,
    autoplay,
    animationData: heartAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 4fr 6fr 1fr"
      templateRows="3fr 2fr 1fr"
      templateAreas="
                'aside nav . .'
                'map . . .'
                '. footer . action'
            "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="aside"
        flexDir="column"
        paddingTop={4}
        paddingLeft={10}
        height="100%"
        width={!isToggleActive? 120: 419}
        backgroundImage={!isToggleActive? null :"url('/sideShapeLarge.svg')"}
        backgroundSize="initial"
        backgroundRepeat="no-repeat"
        backgroundColor="white"
        boxShadow="6px 8px 35px rgba(160, 160, 160, 0.14)"
        zIndex={2}
        borderBottomRightRadius={50}
      >
        <Box>
          <Link to="/">
            <Image
              marginTop={8}
              src={!isToggleActive? "/happy.svg": "/logoHappyWhite.svg"}
              height={!isToggleActive? "100px": "45px"}
              alt="Happy"
            />
          </Link>
          {isToggleActive?
            <>
              <Heading
                as="h1"
                fontSize="40px"
                lineHeight="42px"
                maxWidth={300}
                color="#5C8599"
                marginTop={130}
              >
                Escolha um hospital no mapa
              </Heading>
              <Text 
                fontSize="lg"
                lineHeight="24px"
                maxWidth={300}
                color="#5C8599"
                marginTop={5}
                marginBottom="66px"
              >
                Você pode, sim, mudar o dia de alguém :)
              </Text>
            </>
          : ""}

          <Button
            onClick={() => setIsToggleActive(isToggleActive? false: true)}
            paddingRight={!isToggleActive? "auto": 330}
            marginLeft={!isToggleActive? -65: -30}
            marginTop={!isToggleActive? "180px": 8}
            marginBottom={10}
            color="black"
          >
            <FcMenu size="md"/>
          </Button>

        </Box>
      </Flex>

      <Flex
        gridArea="map"
        flexDir="column"
        height="100vh"
        width="100vw"
        position="absolute"
        zIndex={1}
      >
        <Map
          center={[-22.90134, -43.133]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>
      </Flex>
      <Flex
        gridArea="footer"
        position="relative"
        zIndex={1}
      >
        <Heading 
          as="p" 
          marginTop={120} 
          marginLeft={300} 
          fontWeight={300} 
          fontSize={18} 
          width={550}
        >
          Made by {<a href="https://github.com/JonatasT">JonatasT</a>} © Happy 2020. Todos os Direitos Reservados
        </Heading>
      </Flex>
      <Flex
        gridArea="action"
        flexDir="column"
        height="100%"
        position="relative"
        zIndex={3}
        marginBottom={8}
      >
        <Link to="/app">
          <Box marginBottom={-5}>
            <Lottie
              options={defaultOptions}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isStopped}
            />
          </Box>
          <IconButton
            variantColor="orange"
            aria-label="Encontrar lugar para visita"
            size="lg"
            fontSize={25}
            icon="add"
            width={20}
            height={20}
            marginLeft="auto"
            borderRadius={30}
            color="white"
            onClick={() => {
              const reverseAnimation = -1;
              const normalAnimation = 1;
      
              setAnimationState({
                ...animationState,
                isStopped: false,
                direction: animationState.direction === normalAnimation 
                  ? reverseAnimation
                  : normalAnimation,
              })
              setLoveState(!isLoved);
            }}
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

export default HospitalsMap;
