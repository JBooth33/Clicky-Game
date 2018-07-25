//set up Jumbotron component
import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Cubs Legends Clicky!</h1>
                <h2>Click on an image to earn points, but be sure to avoid clicking the same image twice!</h2>
            </div>
        )
    }
}

export default Jumbotron;