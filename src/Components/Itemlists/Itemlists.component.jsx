import React, { Component } from "react";

export default class Itemlists extends Component {
  render() {
    const { Items } = this.props;
    return (
      <div>
        {Items.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    );
  }
}
