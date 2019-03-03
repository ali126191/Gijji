import React, { Component } from "react";
import "./ListingList.scss";
import Listing from "../Listing/Listing";
import { listingData } from "../listingData";
import Header from "../Header/Header";

export default class ListingList extends Component {
  state = {
    input: "",
    listings: listingData
  };

  changeInput(evt) {
    this.setState({
      input: evt.target.value
    });
  }

  genList() {
    return this.state.listings.map(listing => {
      return (
        <Listing
          key={listing.id}
          listing={listing}
          input={this.state.input}
          listings={this.state.listings}
        />
      );
    });
  }

  render() {
    const filteredList = this.state.listings.filter(listing => {
      if (
        listing.name.toLowerCase().indexOf(this.state.input.toLowerCase()) !==
        -1
      ) {
        return true;
      }
    });

    return (
      <div className="container">
        <section className="header">
          <Header />
          <div className="search">
            <label className="label" htmlFor="input">
              Search Listings
            </label>
            <input
              name="input"
              className="input"
              type="text"
              value={this.state.value}
              onChange={evt => this.changeInput(evt)}
            />
          </div>
        </section>

        <section className="listingList">
          {filteredList.map(listing => {
            return (
              <Listing
                key={listing.id}
                listing={listing}
                input={this.state.input}
                listings={this.state.listings}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
