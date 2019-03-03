import React, { Component } from "react";
import "./PopularCard.scss";

export default class PopularCard extends Component {

  handlePopCards() {
    
  }

  render() {
    const { card } = this.props;
    const imageStyle = {
      backgroundImage: `url(${card.img})`,
      backgroundPosition: "center"
    };
    return (
      <article onClick={this.handlePopCards} style={imageStyle} className="popularCard">
        <span className="title">
          <p className="p">{card.city}</p>
        </span>
      </article>
    );
  }
}
