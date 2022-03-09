import React, { useContext } from "react";
// import { ComC } from "./ComC";
import { FirstName, LastName } from "../App";

export const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      hello from {fname} {lname}
    </h1>
  );
};
