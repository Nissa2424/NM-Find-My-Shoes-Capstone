import React from 'react';

export default function Filter() {
  return (
    <div>
      <div className="select_filter">
        <select>
          <option value="all">All</option>
          <option value="flats">Flats</option>
          <option value="heels">Heels</option>
          <option value="boots">Boots</option>
        </select>
      </div>
    </div>
  );
}
