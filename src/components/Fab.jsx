import React from "react";
import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";

const Fab = ({ iconName, navigation }) => {
  console.log(navigation);
  console.log(iconName);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate({ navigation });
  };

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
      onClick={() => goToDetail()}
    ></Button>
  );
};

export default Fab;
