import React from 'react';
import CONSTS from '../../utils/constants.js'
import AvatarCanvas from '../AvatarCanvas';
import AvatarComponentSelector from '../AvatarComponentSelector'
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shirtColour: CONSTS.SHIRT.DEFAULT_COLOUR,
      shirtCuffColour: CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR
    };

    this.shirtColourSwatches = [CONSTS.SHIRT.COLOUR_SWATCH, CONSTS.SHIRT.CUFFS.COLOUR_SWATCH];
    this.shirtColourCallbacks = [this.onShirtColourChange, this.onShirtCuffColourChange];
  };

  onShirtColourChange = (newColour) => {
    this.setState({
      shirtColour: newColour
    });
  }

  onShirtCuffColourChange = (newColour) => {
    this.setState({
      shirtCuffColour: newColour
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-Header"></div>
        
        <div className="Avatar-Canvas">
          <AvatarCanvas shirtColour={ this.state.shirtColour } shirtCuffsColour={ this.state.shirtCuffColour }/>
        </div>
        
        <div className="App-Selectors">
          <AvatarComponentSelector colourSwatches={ this.shirtColourSwatches } onColourChanges={ this.shirtColourCallbacks } />
        </div>
      </div>
    );
  }
  
};