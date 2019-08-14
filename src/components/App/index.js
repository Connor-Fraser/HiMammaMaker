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
      mouthOption: CONSTS.MOUTH.OPTIONS[0],

      shirtColour: CONSTS.SHIRT.DEFAULT_COLOUR,
      shirtCuffColour: CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR,
      shirtOption: CONSTS.SHIRT.OPTIONS[0]
    };

    this.skinColourSwatches = [CONSTS.SKIN.COLOUR_SWATCH];
    this.skinColourCallbacks = [this.onPrimarySkinChange];
    
    this.eyeColourSwatches = [CONSTS.EYES.COLOUR_SWATCH];
    this.eyeColourCallbacks = [this.generateBaseCallback('eyeColour')];
    this.eyeOptions = [CONSTS.EYES.OPTIONS];
    this.eyeOptionsCallbacks = [this.generateBaseCallback('eyeOption')];

    this.mouthOptions = [CONSTS.MOUTH.OPTIONS];
    this.mouthOptionsCallbacks = [this.generateBaseCallback('mouthOption')];
    
    this.shirtColourSwatches = [CONSTS.SHIRT.COLOUR_SWATCH, CONSTS.SHIRT.CUFFS.COLOUR_SWATCH];
    this.shirtColourCallbacks = [this.generateBaseCallback('shirtColour'), this.generateBaseCallback('shirtCuffColour')];
    this.shirtOptions = [CONSTS.SHIRT.OPTIONS];
    this.shirtOptionsCallbacks = [this.generateBaseCallback('shirtOption')];
  };

  onPrimarySkinChange = (newColour) => {
    const newSecondaryColour = CONSTS.SKIN.SECONDARY_COLOUR_SWATCH[CONSTS.SKIN.COLOUR_SWATCH.findIndex((element) => element === newColour)];
    this.setState({
      primarySkinColour: newColour,
      secondarySkinColour: newSecondaryColour
    });
  }

  generateBaseCallback = (stateField) => {
    const newState = {};

    return (newOption) => {
      newState[stateField] = newOption;
      this.setState(newState);
    }
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
            mouthOption= { this.state.mouthOption }

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

          <AvatarComponentSelector 
            options={ this.mouthOptions } 
            onOptionsChanges={ this.mouthOptionsCallbacks }
          />
        </div>
      </div>
    );
  }
  
};