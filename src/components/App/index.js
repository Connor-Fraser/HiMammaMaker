import React from 'react';
import CONSTS from '../../utils/constants.js'
import AvatarCanvas from '../AvatarCanvas';
import AvatarComponentSelector from '../AvatarComponentSelector'
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      primarySkinColour: CONSTS.SKIN.PRIMARY_DEFAULT_COLOUR,
      secondarySkinColour: CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR,

      eyeColour: CONSTS.EYES.DEFAULT_COLOUR,
      eyeOption: CONSTS.EYES.OPTIONS[0],
      
      shirtColour: CONSTS.SHIRT.DEFAULT_COLOUR,
      shirtCuffColour: CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR,
      shirtOption: CONSTS.SHIRT.OPTIONS[0]
    };

    this.skinColourSwatches = [CONSTS.SKIN.COLOUR_SWATCH];
    this.skinColourCallbacks = [this.onPrimarySkinChange];
    
    this.eyeColourSwatches = [CONSTS.EYES.COLOUR_SWATCH];
    this.eyeColourCallbacks = [this.onEyeColourChange];
    this.eyeOptions = [CONSTS.EYES.OPTIONS];
    this.eyeOptionsCallbacks = [this.onEyeOptionChange];
    
    this.shirtColourSwatches = [CONSTS.SHIRT.COLOUR_SWATCH, CONSTS.SHIRT.CUFFS.COLOUR_SWATCH];
    this.shirtColourCallbacks = [this.onShirtColourChange, this.onShirtCuffColourChange];
    this.shirtOptions = [CONSTS.SHIRT.OPTIONS];
    this.shirtOptionsCallbacks = [this.onShirtOptionChange];
  };

  onPrimarySkinChange = (newColour) => {
    const newSecondaryColour = CONSTS.SKIN.SECONDARY_COLOUR_SWATCH[CONSTS.SKIN.COLOUR_SWATCH.findIndex((element) => element === newColour)];
    this.setState({
      primarySkinColour: newColour,
      secondarySkinColour: newSecondaryColour
    });
  }

  onEyeColourChange = (newColour) => {
    this.setState({
      eyeColour: newColour
    });
  }

  onEyeOptionChange = (option) => {
    this.setState({
      eyeOption: option
    });
  }

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
          <AvatarCanvas 
            primarySkinColour={ this.state.primarySkinColour }
            secondarySkinColour={ this.state.secondarySkinColour }

            eyeColour={ this.state.eyeColour }
            eyeOption={ this.state.eyeOption }

            shirtColour={ this.state.shirtColour } 
            shirtCuffsColour={ this.state.shirtCuffColour } 
            shirtOption={ this.state.shirtOption }/>
        </div>
        
        <div className="App-Selectors">
          <AvatarComponentSelector
            colourSwatches={ this.skinColourSwatches }
            onColourChanges={ this.skinColourCallbacks }
          />

          <AvatarComponentSelector 
            colourSwatches={ this.eyeColourSwatches } 
            onColourChanges={ this.eyeColourCallbacks } 
            options={ this.eyeOptions } 
            onOptionsChanges={ this.eyeOptionsCallbacks }
          />

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