import React from 'react';
import './collections_list.css'
import collections from '../../data/collections'
import CollectionLink from '../collection_link/collection_link'

function CollectionsList() {
  return (
    <nav>
      <ul className="list-wrapper">
        {collections.map(collection => {
          return <CollectionLink collection={collection} key={collection.id} />
        })}
      </ul>
    </nav>
  );
}

export default CollectionsList