//set up Navbar component
import React, { Component } from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper">{ props.children}</div>;

export default Wrapper;