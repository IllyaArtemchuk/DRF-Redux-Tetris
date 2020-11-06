import React from "react";
import { Image } from "semantic-ui-react";

const PieceImage = (props) => {
  return (
    <Image src={require("../../static/img/pieces/Empty.jpg")} size="small" />
  );
};

export default PieceImage;
