import React, { Component } from 'react'

export default class Itemlists extends Component {
  render() {

    const {items} = this.props;
    return (
      <div>
      {items.map((item => (
        <div key={item.id}>
        <h1>{item.title}</h1>
        </div>
      )))}
      </div>
    )
  }
}
