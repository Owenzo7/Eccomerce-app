import "./App.css";
import React, { Component } from "react";
import Itemlists from "./Components/Itemlists/Itemlists.component";

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
        <input
          className="search-box"
          type="search"
          placeholder="Find items"
          onChange={onSearchChange}
        />
          {/*{filteredItems.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
              </div>
            );
          })}*/}

          <Itemlists />
      </div>
    );
  }
}
