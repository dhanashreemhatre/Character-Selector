// CharacterSelector.js
import React, { useState } from 'react';
import CharacterDisplay from './ui/CharacterDisplay';
import CharacterSelection from './ui/CharacterSelection';
import MenuOptions from './ui/MenuOptions';
import CharacterInfo from './ui/CharacterInfo';


const CharacterSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: 1,
    name: 'John Doe',
    image: 'character1.jpg',
    location: 'Los Santos',
    civilian: true,
    date: 'January 1, 2023',
    money: 150000,
  });
  const [currentMenu, setCurrentMenu] = useState('PLAY_GAME');

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleMenuOptionClick = (option) => {
    setCurrentMenu(option);
  };

  const handleCharacterChange = (direction) => {
    const characters = CharacterSelection.characters;
    if (!characters) return;

    const currentIndex = characters.findIndex((char) => char.id === selectedCharacter.id);
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    const newCharacter = characters[newIndex] || characters[0];
    setSelectedCharacter(newCharacter);
  };

  return (
    <div className="character-selector">
      <div>
      <CharacterInfo
        name={selectedCharacter.name}
        location={selectedCharacter.location}
        civilian={selectedCharacter.civilian}
        date={selectedCharacter.date}
        money={selectedCharacter.money}
      />
      <CharacterDisplay
        character={selectedCharacter}
        onCharacterChange={handleCharacterChange}
      />
      <MenuOptions
        currentMenu={currentMenu}
        onMenuOptionClick={handleMenuOptionClick}
      />
      </div>
    </div>
  );
};

export default CharacterSelector;