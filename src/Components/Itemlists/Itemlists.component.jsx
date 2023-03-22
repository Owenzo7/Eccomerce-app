import React, { Component } from "react";
import ItemCard from "../ItemCard/itemcard.component";
import "./Item-list.styles.css";

export default class Itemlists extends Component {
  render() {
    const { Items } = this.props;
    return (
      <div className="card-list">
        {Items.map((item) => {
          return <ItemCard item={item} />;
        })}
      </div>
    );
  }
}
