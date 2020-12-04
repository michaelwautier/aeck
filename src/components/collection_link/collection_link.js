import React, { Component } from 'react';

class CollectionLink extends Component {
  render() {
    return (
      <li><a href="#">/{this.props.collection.title} * {this.props.collection.category}</a></li>
    );
  }
}

export default CollectionLink