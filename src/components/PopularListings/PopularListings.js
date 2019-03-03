import React, { Component } from "react";
import "./PopularListings.scss";
import { popularData } from "./PopularData";
import PopularCard from "./PopularCard/PopularCard";

export default class PopularListings extends Component {
  state = {
    data: popularData
  };

  genList() {
    return this.state.data.map(card => {
      return <PopularCard card={card} />;
    });
  }

  render() {
    return (
      <section className="popularSection">
        <h2>Popular in autos</h2>
        <div className="popularlistings">{this.genList()}</div>
      </section>
    );
  }
}
