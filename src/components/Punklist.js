import React from 'react';
import CollectionCard from './CollectionCard';
import './Punklist.css';

const Punklist = ({ punkListData }) => {
  return (
    <div className="punklist">
      {punkListData.map((punk) => (
        <div>
          <CollectionCard
            key={punk.metadata.id}
            id={punk.metadata.id}
            name={punk.metadata.name}
            traits={punk.metadata.attributes}
            image={punk.metadata.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
