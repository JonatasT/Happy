import React from "react";

import { Heading, Grid, Flex, Box, IconButton } from "@chakra-ui/core";
import Spin from "../components/Spin";
import ArrowAnimated from "../components/ArrowAnimated";

function Landing() {
    // const [isDisplayed, setIsDisplayed] = React.useState(false);
    const [autoplay, setAutoplay] = React.useState(false);
    
    return(
        <Grid
            as="main"
            height="100vh"
            templateColumns="1fr 5fr 8fr 2fr 1fr"
            templateRows="1fr 1fr 7fr 1fr 2fr"
            templateAreas="
                '. . . . .'
                '. logo lottieAnm locality .'
                '. headline . . .'
                '. . . action .'
                '. . . . .'
            "
            justifyContent="center"
            alignItems="center"
            backgroundImage="url('/bg.png')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundAttachment="fixed"
            >
            <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
                <img src="/logoHappyWhite.svg" alt="Happy" />
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
                <Box position="absolute" marginTop={300} marginLeft={540}>
                <ArrowAnimated autoplay={autoplay} />
                </Box>
            </Flex>

            <Flex
                gridArea="headline"
                flexDir="column"
                alignItems="flex-end"
                height="100%"
                marginRight="auto"
            >
                <Box height="100%" marginTop={260}>
                <Heading
                    as="h1"
                    size="lg"
                    lineHeight="shorter"
                    maxWidth={600}
                    onMouseOver={() => setAutoplay(!autoplay)}
                >
                    Leve felicidade para o mundo
                </Heading>

                <Heading
                    as="h2"
                    fontSize={28}
                    fontWeight={600}
                    lineHeight="none"
                    marginTop={4}
                    maxWidth={600}
                >
                    Visite um hospital e mude o dia de alguém para melhor
                </Heading>
                </Box>
            </Flex>

            <Flex
                gridArea="locality"
                flexDir="column"
                textAlign="right"
                height="100%"
                position="relative"
            >
                <Heading as="p" marginTop={10} fontSize={24}>
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
            >
                <Spin
                contentSpin="-"
                position="relative"
                timming={30}
                size={200}
                opacity={0.15}
                />
                <IconButton
                variantColor="orange"
                aria-label="Encontrar lugar para visita"
                size="lg"
                fontSize={25}
                icon="arrow-forward"
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
            </Flex>
        </Grid>
    );
}

export default Landing;