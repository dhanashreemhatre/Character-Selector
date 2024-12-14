// CreateNewCharacter.js
import React, { useState } from 'react';

const CreateNewCharacter = ({ onCreateCharacter }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');

  const handleCreateCharacter = () => {
    const newCharacter = {
      name: `${firstName} ${lastName}`,
      location,
      dateOfBirth,
    };
    onCreateCharacter(newCharacter);
  };

  return (
    <div className="create-new-character">
      <h2>Create New Character</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button className="create-button" onClick={handleCreateCharacter}>
        Create Character
      </button>
    </div>
  );
};

export default CreateNewCharacter;