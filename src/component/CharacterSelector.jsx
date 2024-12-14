// CharacterSelector.js
import React, { useState } from 'react';
import CharacterDisplay from './ui/CharacterDisplay';
import CharacterSelection from './ui/CharacterSelection';
import MenuOptions from './ui/MenuOptions';
import CharacterInfo from './ui/CharacterInfo';
import CreateNewCharacter from './ui/CreateNewCharacter';

const CharacterSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: 1,
    name: 'John Doe',
    image: 'character1.jpg',
    location: 'Los Santos',
    civilian: true,
    dateOfBirth: 'January 1, 1990',
    money: 150000,
  });
  const [currentMenu, setCurrentMenu] = useState('PLAY_GAME');
  const [isCreatingNewCharacter, setIsCreatingNewCharacter] = useState(false);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleMenuOptionClick = (option) => {
    if (option === 'CREATE_NEW_CHARACTER') {
      setIsCreatingNewCharacter(true);
    } else {
      setCurrentMenu(option);
    }
  };

  const handleCharacterChange = (direction) => {
    const characters = CharacterSelection.characters;
    if (!characters) return;

    const currentIndex = characters.findIndex((char) => char.id === selectedCharacter.id);
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    const newCharacter = characters[newIndex] || characters[0];
    setSelectedCharacter(newCharacter);
  };

  const handleCreateNewCharacter = (newCharacter) => {
    setSelectedCharacter(newCharacter);
    setIsCreatingNewCharacter(false);
  };

  return (
    <div className="character-selector">
       {isCreatingNewCharacter ? (
        <CreateNewCharacter onCreateCharacter={handleCreateNewCharacter} />
      ) : (
      <div style={{ marginRight: "4%" }}>
        
      <CharacterInfo
        name={selectedCharacter.name}
        location={selectedCharacter.location}
        civilian={selectedCharacter.civilian}
        date={selectedCharacter.dateOfBirth}
        money={selectedCharacter.money}
      />
      <CharacterDisplay
        character={selectedCharacter}
        onCharacterChange={handleCharacterChange}
      />
      <MenuOptions
        currentMenu={currentMenu}
        onMenuOptionClick={handleMenuOptionClick}
        onCreateNewCharacter={() => setIsCreatingNewCharacter(true)}
      />
      </div>
         )}
    </div>
  );
};

export default CharacterSelector;