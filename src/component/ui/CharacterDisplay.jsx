// CharacterDisplay.js
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CharacterDisplay = ({ character, onCharacterChange }) => {
  return (
    <div className="character-display">
      <FaChevronLeft className="character-display-chevron" onClick={() => onCharacterChange('left')} />
     
      <FaChevronRight className="character-display-chevron" onClick={() => onCharacterChange('right')} />
    </div>
  );
};

export default CharacterDisplay;