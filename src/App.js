import React, { Component } from "react";
import "./App.scss";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "./components/Header/Header";
import PopularListings from "./components/PopularListings/PopularListings";
import ListingList from "./components/ListingList/index";
import popVechileCard from "./components/PopularListings/PopularCard/CardPages/CarsTrucks/CarsTrucks";

class App extends Component {
  state = {
    showPopCards: false
  };
  handelPopCards = () => {
    this.setState({
      showPopCards: !this.state.showPopCards
    });
  };

  render() {
    return (
      <main className="container">
        <Navbar />
        <ListingList />
        <PopularListings onClick={this.handelPopCards} />
        {this.state.showPopCards && <p>{popVechileCard}</p>}
      </main>
    );
  }
}

export default App;
