import React, { useState } from 'react';

const PhotoMode = ({ onExitPhotoMode }) => {
  const filters = ["none", "bluish_green", "yellowish_pink", "brownish_red", "dora", "blora", "nightout", "husky"];
  const [currentFilter, setCurrentFilter] = useState("none");

  const handleOutsideClick = (e) => {
    // Exit PhotoMode if clicking outside the filter boxes
    if (e.target.classList.contains('photo-mode-container')) {
      onExitPhotoMode();
    }
  };

  const onFilterOptionClick = (filter) => {
    setCurrentFilter(filter); // Update the filter
  };

  return (
    <div
      className="photo-mode-container"
      onClick={handleOutsideClick}
    >
      <div className="photo-mode-boxes">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`photo-box ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterOptionClick(filter)}
          >
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMode;
