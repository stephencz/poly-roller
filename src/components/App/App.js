import React from 'react';

import Header from '../Header/Header.js';
import DiceDisplay from '../DiceDisplay/DiceDisplay.js';
import DiceRoller from '../DiceRoller/DiceRoller.js';

import './App.css';

/**
 * The Root component.
 */
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rolls: [0]          // An array of all the dice rools.
    }

  }

  render() {

    /**
     * Adds a value to the rolls array.
     * @param {*} value The value to add.
     */
    const addRoll = (value) => {
      this.setState({rolls: [...this.state.rolls, value]})
    }

    /**
     * Clears the rolls array.
     */
    const clearRolls = () => {
      this.setState({rolls: [0]})
    }

    return (
      <div className="app-wrapper">
        <Header />
        <DiceDisplay rolls={this.state.rolls} clearRolls={ clearRolls } />
        <DiceRoller addRoll={ addRoll } />
      </div>
    );

  }

}

export default App;
