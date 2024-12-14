// CharacterInfo.js
import React from 'react';
import { FaMapMarkerAlt, FaUserCircle, FaCalendarAlt, FaDollarSign,FaKey } from 'react-icons/fa';
import { BiBowlRice } from "react-icons/bi";


const CharacterInfo = ({ name, location, civilian, date, money }) => {
  return (
    <div className="character-info">
      <h1>{name}</h1>
      <div className="character-info-details">
        <div className="character-info-detail">
          <FaKey className="character-info-icon" />
          <p>1</p>
        </div>
        <div className="character-info-detail">
          <FaMapMarkerAlt className="character-info-icon" />
          <p>{location}</p>
        </div>
        <div className="character-info-detail">
            <BiBowlRice className="character-info-icon"/>
          <p>Civilian</p>
        </div>
        <div className="character-info-detail">
          <FaCalendarAlt className="character-info-icon" />
          <p>{date}</p>
        </div>
        <div className="character-info-detail">
          <FaDollarSign className="character-info-icon" />
          <p>${money ? money.toLocaleString() : '0'}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;