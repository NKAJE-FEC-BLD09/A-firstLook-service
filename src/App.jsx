import React, { Component } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu.jsx";
import TitleBlock from "./components/TitleBlock.jsx";
import TrailerView from "./components/TrailerView.jsx";
import MoreInfo from "./components/MoreInfo.jsx";

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
        <div class="top">
          <DropdownMenu />
          <TitleBlock
            main={this.state.main}
            categories={this.state.categories}
          />
          <TrailerView main={this.state.main} />
        </div>
        <MoreInfo
          main={this.state.main}
          directors={this.state.directors}
          writers={this.state.writers}
          stars={this.state.stars}
        />
      </div>
    );
  }
}

export default App;
