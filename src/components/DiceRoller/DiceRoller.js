import React from 'react';

import DieButton from '../DieButton/DieButton';
import './DiceRoller.css'

/**
 * A DiceRoller component represents all the polyhedral
 * dice available to the software.
 */
const DiceRoller = (props) => {

  return (
    <div className="dice-roller-wrapper">          
      <DieButton addRoll={ props.addRoll } sides={ 2 } />
      <DieButton addRoll={ props.addRoll } sides={ 4 } />
      <DieButton addRoll={ props.addRoll } sides={ 6 } />
      <DieButton addRoll={ props.addRoll } sides={ 8 } />
      <DieButton addRoll={ props.addRoll } sides={ 10 } />
      <DieButton addRoll={ props.addRoll } sides={ 12 } />
      <DieButton addRoll={ props.addRoll } sides={ 20 } />
      <DieButton addRoll={ props.addRoll } sides={ 100 } />
    </div>
  );

}

export default DiceRoller;