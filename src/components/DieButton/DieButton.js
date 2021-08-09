import React from 'react';
import './DieButton.css'

/**
 * A die button represents a button which can generate a random
 * integer between one and a passed in number of sides.
 */
const DieButton = (props) => {

  /**
   * Gets a random integer between a min and max range.
   * @param {*} min The minimum number in the range.
   * @param {*} max The maximum number in the range.
   * @returns A random integer between the min and max.
   */
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Simulates a die roll returning an integer between one and a
   * number of sides.
   * @param {*} sides The number of sides on the die.
   * @returns A random integer between one and the number of sides.
   */
  const getDieRoll = (sides) => {
    return getRandomInt(1, sides);
  }

  /**
   * Handles clicks on button element.
   */
  const handleClick = () => {
    let result = getDieRoll(props.sides);
    props.addRoll(result);
  }

  return (
    <button 
      className={"die-button-d" + props.sides }
      onClick={ handleClick }
    >
      { props.sides }
    </button>
  );

}

export default DieButton;