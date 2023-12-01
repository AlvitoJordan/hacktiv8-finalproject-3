import React from "react";
import ListWithIcon from "./ListWithIcon";
import ListDefault from "./ListDefault";
import TextInputCS from "./TextInputCS"

const List = ({ type, label, title, onChange }) => {
  switch (type) {
    case "WithIcon":
      return <ListWithIcon label={label} title={title} />;
    case "TextInput":
      return <TextInputCS label={label} title={title} onChange={onChange} />;
    default:
      return <ListDefault label={label} title={title} />;
  }
};

export default List;
