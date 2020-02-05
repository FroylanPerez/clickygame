import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handlePicked} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.handlePicked} className="handle">
        𝘅
      </span> */}
    </div>
  );
}

export default CharCard;
