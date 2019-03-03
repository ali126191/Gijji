import React, { Component } from 'react'

export default class List extends Component {
  genList() {
    return this.props.dogs.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })
  }
  render() {

    return (
      <div>
         
          <ul>
            {this.genList()}
          </ul>
      </div>
    )
  }
}
