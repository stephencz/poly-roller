import React from 'react';
import './DiceDisplay.css'

/**
 * The DiceDisplay component displays the result of the
 * last roll performs as well as the total of all rolls
 * since the last clear.
 */
const DiceDisplay = (props) => {

  /**
   * Gets the most recent dice roll.
   * @returns An integer containing the most recent dice roll.
   */
  const getLastRoll = () => {
    return props.rolls[props.rolls.length - 1];
  }

  /**
   * Gets the sum of all dice rolls.
   * @returns An integer containing the sum of all dice rolls.
   */
  const getRollTotal = () => {
    return props.rolls.reduce((a, b) => a + b, 0);
  }

  let last = getLastRoll();
  let total = getRollTotal();

  return (
    <div className="dice-display-wrapper" onClick={ props.clearRolls }>
      <div className="roll-last">
        { last }
      </div>
      <div className="roll-total">
        { total }
      </div>
    </div>
    
  );

}

export default DiceDisplay;