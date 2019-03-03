import React, { Component } from "react";
import "./Listing.scss";

export default class Listing extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { img, name, info } = this.props.listing;

    return (
      <article onClick={this.handleInfo} className="listing">
        <div className="img-container">
          <img src={img} alt="Img" />
        </div>
        <div className="listing-info">
          <h5>{name}</h5>
          <br />
          {this.state.showInfo && <p>{info}}</p>}
        </div>
      </article>
    );
  }
}
