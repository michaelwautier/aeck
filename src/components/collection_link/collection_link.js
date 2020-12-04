import React, { Component } from 'react';

class CollectionLink extends Component {
  render() {
    return (
      <li className="list-item">
        <a href="#">
          /{this.props.collection.title} * <span>{this.props.collection.category}</span>
        </a>
      </li>
    );
  }
}

export default CollectionLink