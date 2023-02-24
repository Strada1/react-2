import React from "react";

const GenderParagraph = ({ gender }) => {
  if (!gender || gender.length === 0)
    return <span style={{ marginLeft: "5px" }}>No gender</span>;
  return <span style={{ marginLeft: "5px" }}>{gender}</span>;
};

export default GenderParagraph;
