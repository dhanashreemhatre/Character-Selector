import React, { useState } from 'react';
import {MdFullscreenExit} from 'react-icons/md'

const CreateNewCharacter = ({ onExit,onCreateCharacter }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});

  const handleCreateCharacter = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
    if (!location.trim()) newErrors.location = "Location is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newCharacter = {
        name: `${firstName} ${lastName}`,
        location,
        dateOfBirth,
      };
      onCreateCharacter(newCharacter);

      // Clear form after successful submission
      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setLocation('');
      setErrors({});
    }
  };

  return (
    <div className="create-new-character">
     <div className='cancel'>
     <MdFullscreenExit className='icon' onClick={onExit}/>
     </div>
      <h2>Create New Character</h2>
      
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {errors.location && <p className="error">{errors.location}</p>}
      </div>
      <button className="create-button" onClick={handleCreateCharacter}>
        Create Character
      </button>
    </div>
  );
};

export default CreateNewCharacter;
