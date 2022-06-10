import React from "react";
import { Preloader } from "react-materialize";

const Loader = () => {
  return (
    <>
      <Preloader active color="red" flashing={false} size="big" />
    </>
  );
};

export default Loader;
