// CharacterSelection.js
import React, { useState } from 'react';

export const allcharacters = [
  {
    id: 1,
    name: 'John Doe',
    image: 'character1.jpg',
    location: 'Los Santos',
    civilian: true,
    dateOfBirth: 'January 1, 2023',
    money: 150000,
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'character2.jpg',
    location: 'Vice City',
    civilian: false,
    dateOfBirth: 'February 15, 2023',
    money: 75000,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'character3.jpg',
    location: 'Liberty City',
    civilian: true,
    dateOfBirth: 'March 30, 2023',
    money: 100000,
  },
];

const CharacterSelection = ({ onCharacterSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(allcharacters[0]);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    onCharacterSelect(character);
  };

  return {
    allcharacters,
  };
};

export default CharacterSelection;