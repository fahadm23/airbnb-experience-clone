import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import Photogrid from "./Components/Photogrid";
import Card from "./Components/Card";
import Data from "./Data";

export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Photogrid />
      <div className="cards">{cards}</div>
    </div>
  );
}
