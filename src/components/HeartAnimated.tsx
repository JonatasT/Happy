import React from "react";
import Lottie from "react-lottie";
import heartAnimated from "./heartAnimated.json";

const HeartAnimated = (props: any) => {
  const [animationState] = React.useState({
    isStopped: false,
    isPaused: false,
    direction: 1,
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
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isStopped}
      />
  );
};

export default HeartAnimated;
