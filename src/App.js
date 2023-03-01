import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
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
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Find items"
          onChange={(event) => {
            console.log(event.target.value);

            const searchitems = event.target.value.toLocaleLowerCase();

            const filteredItems = this.state.items.map((item) => {
              return item.title.toLocaleLowerCase().includes(searchitems);
            });

            this.setState(() => {
              return {items: filteredItems};
            });
          }}
        />
        {this.state.items.map((item) => {
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
