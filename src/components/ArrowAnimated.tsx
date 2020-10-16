import React from "react";
import { Box } from "@chakra-ui/core";
import Lottie from "react-lottie";
import arrowAnimated from "./arrowAnimated.json";

const ArrowAnimated = (props: any) => {
  const [animationState] = React.useState({
    isStopped: false,
    isPaused: false,
    direction: 1,
  });

  const { autoplay } = props;

  const defaultOptions = {
    loop: false,
    autoplay,
    animationData: arrowAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box position="absolute" transform="rotate(120deg)">
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isStopped}
      />
    </Box>
  );
};

export default ArrowAnimated;
