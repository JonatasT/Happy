import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { motion } from "framer-motion";

export function Spin(props: any) {
  // Content string to show in spin
  const { contentSpin } = props;
  // Duration time
  const { timming } = props;
  // Relative position
  const { position } = props;
  // Content size string
  const { size } = props;
  // Content opacity
  const { opacity } = props;

  return (
    <motion.div
      animate={{ rotate: 360, position: "fixed" }}
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
