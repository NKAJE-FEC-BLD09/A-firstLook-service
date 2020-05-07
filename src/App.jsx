import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
