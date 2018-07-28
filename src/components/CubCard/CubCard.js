//set up Navbar component
import React from "react";
import "./CubCard.css";

const CubCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={() => props.chooseCard(props)} />
        </div>
    </div>
);

export default CubCard;