import React from 'react';
import CONSTS from '../../utils/constants.js'
import AvatarCanvas from '../AvatarCanvas';
import AvatarComponentSelector from '../AvatarComponentSelector'
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shirtColour: CONSTS.SHIRT.DEFAULT_COLOUR
    };
  };

  onShirtColourChange = (newColour) => {
    this.setState({
      shirtColour: newColour
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-Header"></div>
        
        <div className="Avatar-Canvas">
          <AvatarCanvas shirtColour={ this.state.shirtColour }/>
        </div>
        
        <div className="App-Selectors">
          <AvatarComponentSelector avatarComponent={ CONSTS.SHIRT } onColourChange={ this.onShirtColourChange } />
        </div>
      </div>
    );
  }
  
};