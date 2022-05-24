import React from "react";
import "./index.css";

const Card = ({ data }) => (
  <div className="card">
    <div>cardID: {data.cardID}</div>
    <div>currency: {data.currency}</div>
    <div>status: {data.status}</div>
    <div>balance: {data.balance}</div>
  </div>
);

export default Card;
