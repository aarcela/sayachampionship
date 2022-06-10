import React from "react";
import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";

const Fab = ({ iconName, navigation }) => {
  console.log(navigation);
  const navigate = useNavigate();
  return (
    <Button
      className="blue_background"
      fab={{
        direction: "left",
      }}
      icon={<Icon>{iconName}</Icon>}
      floating
      large
      node="button"
      onClick={() => navigate({ navigation })}
    ></Button>
  );
};

export default Fab;
