import React from "react";

import { Link } from "react-router-dom";
import { Grid, Flex, Box, Image, IconButton } from "@chakra-ui/core";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HospitalsMap() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 4fr 6fr 1fr"
      templateRows="3fr 2fr 1fr"
      templateAreas="
                'aside nav . .'
                'map . . .'
                '. . . action'
            "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="aside"
        flexDir="column"
        align="center"
        height="100%"
        width={114}
        backgroundImage="url('/sideShape.svg')"
        backgroundRepeat="no-repeat"
        backgroundColor="white"
        boxShadow="6px 8px 35px rgba(160, 160, 160, 0.14)"
        zIndex={2}
      >
        <Box>
          <Link to="/">
            <Image
              marginTop={8}
              marginRight={1}
              src="/logoHappyWhiteSymbol.svg"
              alt="Happy"
            />
          </Link>
          <Image
            marginTop="10rem"
            marginLeft={2}
            src="/happy.svg"
            alt="Happy"
          />
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
        gridArea="action"
        flexDir="column"
        height="100%"
        position="relative"
        zIndex={3}
      >
        <Link to="/app">
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
