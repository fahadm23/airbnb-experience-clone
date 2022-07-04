import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img className="person1" src={props.item.coverImg} />
      <div className="card-stats">
        <img className="star" src="./images/star.png" alt="" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) · </span>
        <span className="gray">{props.item.country}</span>
        <div>
          <p>{props.item.title}</p>
          <p>
            <span className="bold">From ${props.item.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}

// img="person1.png"
//         rating="5.0"
//         reviewCount = {6}
//         country = "Canada"
//         title = "Life lessons with katie Zafares"
//         price = {136}
