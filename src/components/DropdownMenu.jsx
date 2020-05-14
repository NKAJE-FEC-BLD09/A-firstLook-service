import React, { Component } from "react";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      displayShareDropdown: false,
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
            {this.state.displayMenu ? "LESS " : "MORE "}
            <span
              class={this.state.displayMenu ? "arrow-up" : "arrow-down"}
            ></span>
          </span>
          <a class="quicklink" href="">
            SHARE
          </a>
        </div>
        <div className="dd-expansion">
          {this.state.displayMenu ? (
            <span>
              <span id="col1">
                DETAILS
                <div>
                  <a class="quicklink" href="">
                    Full Cast and Crew
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Release Dates
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Official Sites
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Company Credits
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Filming & Production
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Technical Specs
                  </a>
                </div>
              </span>
              <span id="col2">
                STORYLINE
                <div>
                  <a class="quicklink" href="">
                    Taglines
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Plot Summary
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Synopsis
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Plot Keywords
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Parents Guide
                  </a>
                </div>
                <br />
                <em>RELATED ITEMS</em>
                <div>
                  <a class="quicklink" href="">
                    News
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    External Sites
                  </a>
                </div>
              </span>
              <span id="col3">
                OPINION
                <div>
                  <a class="quicklink" href="">
                    Awards
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    FAQ
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    User Reviews
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    User Ratings
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    External Reviews
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Metacritic Reviews
                  </a>
                </div>
                <br />
                PHOTO & VIDEO
                <div>
                  <a class="quicklink" href="">
                    Photo Gallery
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Trailers and Videos
                  </a>
                </div>
              </span>
              <span id="col4">
                DID YOU KNOW?
                <div>
                  <a class="quicklink" href="">
                    Trivia
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Goofs
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Crazy Credits
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Quotes
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Alternate Versions
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Connections
                  </a>
                </div>
                <div>
                  <a class="quicklink" href="">
                    Soundtracks
                  </a>
                </div>
              </span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
