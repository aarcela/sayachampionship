import React from "react";
import { Preloader } from "react-materialize";

const Loader = () => {
  return (
    <>
      <Preloader active color="yellow" flashing={false} size="big" />
    </>
  );
};

export default Loader;
