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
          <a class="quicklink" href="">
            FULL CAST AND CREW
          </a>
          <span class="division">|</span>
          <a class="quicklink" href="">
            TRIVIA
          </a>
          <span class="division">|</span>
          <a class="quicklink" href="">
            USER REVIEWS
          </a>
          <span class="division">|</span>
          <a class="quicklink" href="">
            IMDbPro
          </a>
          <span class="division">|</span>
          <span class="quicklink showMore" onClick={this.showDropdownMenu}>
            {this.state.displayMenu ? "LESS" : "MORE"}
            <span class="arrow-down">|</span>
          </span>
          <a class="quicklink" href="">
            SHARE
          </a>
        </div>
        <div className="dd-expansion">
          {this.state.displayMenu ? (
            <div>
              <div id="col1">
                DETAILS
                <a class="quicklink" href="">
                  Full Cast and Crew
                </a>
                <a class="quicklink" href="">
                  Release Dates
                </a>
                <a class="quicklink" href="">
                  Official Sites
                </a>
                <a class="quicklink" href="">
                  Company Credits
                </a>
                <a class="quicklink" href="">
                  Filming & Production
                </a>
                <a class="quicklink" href="">
                  Technical Specs
                </a>
              </div>
              <div id="col2">
                STORYLINE
                <a class="quicklink" href="">
                  Taglines
                </a>
                <a class="quicklink" href="">
                  Plot Summary
                </a>
                <a class="quicklink" href="">
                  Synopsis
                </a>
                <a class="quicklink" href="">
                  Plot Keywords
                </a>
                <a class="quicklink" href="">
                  Parents Guide
                </a>
                <br />
                <em>RELATED ITEMS</em>
                <a class="quicklink" href="">
                  News
                </a>
                <a class="quicklink" href="">
                  External Sites
                </a>
              </div>
              <div id="col3">
                OPINION
                <a class="quicklink" href="">
                  Awards
                </a>
                <a class="quicklink" href="">
                  FAQ
                </a>
                <a class="quicklink" href="">
                  User Reviews
                </a>
                <a class="quicklink" href="">
                  User Ratings
                </a>
                <a class="quicklink" href="">
                  External Reviews
                </a>
                <a class="quicklink" href="">
                  Metacritic Reviews
                </a>
                <br />
                PHOTO & VIDEO
                <a class="quicklink" href="">
                  Photo Gallery
                </a>
                <a class="quicklink" href="">
                  Trailers and Videos
                </a>
              </div>
              <div id="col4">
                DID YOU KNOW?
                <a class="quicklink" href="">
                  Trivia
                </a>
                <a class="quicklink" href="">
                  Goofs
                </a>
                <a class="quicklink" href="">
                  Crazy Credits
                </a>
                <a class="quicklink" href="">
                  Quotes
                </a>
                <a class="quicklink" href="">
                  Alternate Versions
                </a>
                <a class="quicklink" href="">
                  Connections
                </a>
                <a class="quicklink" href="">
                  Soundtracks
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
