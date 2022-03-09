import React from "react";
import "./Redux.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
export const Redux = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using Recat and Redux</h4>
      <div className="quantity">
        <a
          className="quantity__minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span> - </span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
        ></input>
        <a
          className="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default Redux;
