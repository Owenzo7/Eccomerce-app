import React, { Component } from "react";
import "./Item-list.styles.css";

export default class Itemlists extends Component {
  render() {
    const { Items } = this.props;
    return (
      <div className="card-list">
        {Items.map((item) => {
          const { id, description, image, title } = item;
          return (
            <div className="card-container" key={id}>
              <img alt={`item${title}`} src={image} width={180} height={180} />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
