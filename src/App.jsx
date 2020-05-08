import React, { Component } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu.jsx";
import TitleBlock from "./components/TitleBlock.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: {},
      directors: [],
      writers: [],
      stars: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/movies/1", {
      contentType: "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          main: data[0][0],
          directors: data[1],
          writers: data[2],
          stars: data[3],
          categories: data[4],
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <DropdownMenu />
        </div>
        <div>
          <TitleBlock
            main={this.state.main}
            categories={this.state.categories}
          />
        </div>
      </div>
    );
  }
}

export default App;
