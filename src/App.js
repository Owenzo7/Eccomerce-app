import "./App.css";
import React, { Component } from "react";
import Itemlists from "./Components/Itemlists/Itemlists.component";
import Searchbox from "./Components/SearchBox/Searchbox.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((item) =>
        this.setState(
          () => {
            return { items: item };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { items, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredItems = items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
       
      <Searchbox onChangeHandler={onSearchChange} placeholder="search Items" className="search-box" />

        <Itemlists Items={filteredItems} />
      </div>
    );
  }
}
