import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { motion } from "framer-motion";

export function Spin(props: any){
    //Content string to show in spin
    const contentSpin = props.contentSpin;
    //Duration time
    const timming = props.timming;
    //Relative position
    const position = props.position;
    //Content size string
    const size = props.size;
    //Content opacity
    const opacity = props.opacity;

    return (
        <motion.div
        animate={{ rotate: 360, position: "fixed"}}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: timming,
        }}
        >
            <Box position={position}>
                <Heading 
                    fontSize={size}
                    opacity={opacity} 
                    cursor="default" 
                    userSelect="none" 
                    fontWeight="black"
                >
                    {contentSpin}
                </Heading>
            </Box>
        </motion.div>
    );
}

export default Spin;