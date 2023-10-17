
// Filter.js
import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by Title"
        onChange={(e) => handleFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => handleFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter; 