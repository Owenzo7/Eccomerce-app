import "./App.css";
import React, { Component } from "react";

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

  render() {
    const filteredItems = this.state.items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Find items"
          onChange={(event) => {
            console.log(event.target.value);

            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
