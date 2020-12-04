import React, { Component } from 'react';

class CollectionLink extends Component {
  render() {
    const { collection } = this.props
    return (
      <li className="list-item">
        <a href="#">
          /{collection.title} * <span>{collection.category}</span>
        </a>
      </li>
    );
  }
}

export default CollectionLink