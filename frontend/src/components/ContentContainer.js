import React from "react";

const ContentContainer = (props) => {
  return (
    <div className="ui grid">
      <div className="four wide column" />
      <div className="eight wide column">{props.children}</div>
      <div className="four wide column" />
    </div>
  );
};

export default ContentContainer;
