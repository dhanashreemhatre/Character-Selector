// MenuOptions.js
import React from 'react';

const MenuOptions = ({ currentMenu, onMenuOptionClick }) => {
  const menuOptions = ['PLAY_GAME', 'PHOTO_MODE', 'CREDITS', 'EXIT_GAME', 'CREATE_NEW_CHARACTER'];

  return (
    <div className="menu-options">
      {menuOptions.map((option) => (
        <button
          key={option}
          className={currentMenu === option ? 'active' : ''}
          onClick={() => onMenuOptionClick(option)}
        >
          {option.replace('_', ' ')}
        </button>
      ))}
    </div>
  );
};

export default MenuOptions;
