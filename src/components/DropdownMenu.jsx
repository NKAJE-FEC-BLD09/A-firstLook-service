import React, { Component } from "react";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dd-wrapper">
        <div className="dd-navbar">
          <a href="">FULL CAST AND CREW</a> | <a href="">TRIVIA</a> |
          <a href="">USER REVIEWS</a> | <a href="">IMDbPro</a> |{" "}
          <span onClick={this.showDropdownMenu}>MORE</span>
          <a href="">SHARE</a>
        </div>
        <div className="dd-expansion">
          {this.state.displayMenu ? (
            <div>
              <div id="col1">
                <em>DETAILS</em>
                <a href="">Full Cast and Crew</a>
                <a href="">Release Dates</a>
                <a href="">Official Sites</a>
                <a href="">Company Credits</a>
                <a href="">Filming & Production</a>
                <a href="">Technical Specs</a>
              </div>
              <div id="col2">
                <em>STORYLINE</em>
                <a href="">Taglines</a>
                <a href="">Plot Summary</a>
                <a href="">Synopsis</a>
                <a href="">Plot Keywords</a>
                <a href="">Parents Guide</a>
                <br />
                <em>RELATED ITEMS</em>
                <a href="">News</a>
                <a href="">External Sites</a>
              </div>
              <div id="col3">
                <em>OPINION</em>
                <a href="">Awards</a>
                <a href="">FAQ</a>
                <a href="">User Reviews</a>
                <a href="">User Ratings</a>
                <a href="">External Reviews</a>
                <a href="">Metacritic Reviews</a>
                <br />
                <em>PHOTO & VIDEO</em>
                <a href="">Photo Gallery</a>
                <a href="">Trailers and Videos</a>
              </div>
              <div id="col4">
                <em>DID YOU KNOW?</em>
                <a href="">Trivia</a>
                <a href="">Goofs</a>
                <a href="">Crazy Credits</a>
                <a href="">Quotes</a>
                <a href="">Alternate Versions</a>
                <a href="">Connections</a>
                <a href="">Soundtracks</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
