import React from "react";

export default function Photogrid() {
  return (
    <div>
      <img className="photogrid" src="airbnb-pics.png" alt="airbnb photogrid" />
      <div className="grid-text">
        <h1 className="exp-heading">Online Experiences</h1>
        <p className="exp-text">
          Join unique interactive activities led by one-of-a-kind hosts--all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
