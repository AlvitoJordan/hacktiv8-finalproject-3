import React from "react";
import ListWithIcon from "./ListWithIcon";
import ListDefault from "./ListDefault";

const List = ({ type, label, title }) => {
  switch (type) {
    case "WithIcon":
      return <ListWithIcon label={label} title={title} />;
    default:
      return <ListDefault label={label} title={title} />;
  }
};

export default List;
