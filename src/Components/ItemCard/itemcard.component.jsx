import React, { Component } from 'react'

export default class ItemCard extends Component {
  render() {
    const { id, description, image, title } = this.props.item;
    return (
        <div className="card-container" key={id}>
        <img alt={`item${title}`} src={image} width={180} height={180} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }
}
