//set up Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Cubs Legends Memory Game</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;