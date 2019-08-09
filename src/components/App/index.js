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
      shirtCuffColour: CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR,
      shirtOption: CONSTS.SHIRT.OPTIONS[0]
    };

    this.shirtColourSwatches = [CONSTS.SHIRT.COLOUR_SWATCH, CONSTS.SHIRT.CUFFS.COLOUR_SWATCH];
    this.shirtColourCallbacks = [this.onShirtColourChange, this.onShirtCuffColourChange];
    this.shirtOptions = [CONSTS.SHIRT.OPTIONS];
    this.shirtOptionsCallbacks = [this.onShirtOptionChange];
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

  onShirtOptionChange = (option) => {
    this.setState({
      shirtOption: option
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-Header"></div>
        
        <div className="Avatar-Canvas">
          <AvatarCanvas shirtColour={ this.state.shirtColour } shirtCuffsColour={ this.state.shirtCuffColour } shirtOption={ this.state.shirtOption } />
        </div>
        
        <div className="App-Selectors">
          <AvatarComponentSelector 
            colourSwatches={ this.shirtColourSwatches } 
            onColourChanges={ this.shirtColourCallbacks } 
            options={ this.shirtOptions } 
            onOptionsChanges={ this.shirtOptionsCallbacks }
          />
        </div>
      </div>
    );
  }
  
};