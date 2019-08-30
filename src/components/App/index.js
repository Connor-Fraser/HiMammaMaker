import React from 'react';
import CONSTS from '../../utils/constants.js'
import AvatarCanvas from '../AvatarCanvas';
import AvatarComponentSelector from '../AvatarComponentSelector'
import './App.css';
import logo from '../../assets/logo.svg'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hairColour: CONSTS.HAIR.COLOUR_SWATCH[CONSTS.HAIR.DEFAULT_COLOUR_INDEX],
      backHairOption: CONSTS.HAIR.BACK_HAIR_OPTIONS[CONSTS.HAIR.DEFAULT_BACK_HAIR_OPTION_INDEX],
      bangOption: CONSTS.HAIR.BANG_OPTIONS[CONSTS.HAIR.DEFAULT_BANG_OPTION_INDEX],

      primarySkinColour: CONSTS.SKIN.COLOUR_SWATCH[CONSTS.SKIN.DEFAULT_COLOUR_INDEX],
      secondarySkinColour: CONSTS.SKIN.SECONDARY_COLOUR_SWATCH[CONSTS.SKIN.DEFAULT_COLOUR_INDEX],

      eyeColour: CONSTS.EYES.COLOUR_SWATCH[CONSTS.EYES.DEFAULT_COLOUR_INDEX],
      eyeOption: CONSTS.EYES.OPTIONS[CONSTS.EYES.DEFAULT_OPTION_INDEX],
      mouthOption: CONSTS.MOUTH.OPTIONS[CONSTS.MOUTH.DEFAULT_OPTION_INDEX],

      shirtColour: CONSTS.SHIRT.COLOUR_SWATCH[CONSTS.SHIRT.DEFAULT_COLOUR_INDEX],
      shirtCuffColour: CONSTS.SHIRT.CUFFS.COLOUR_SWATCH[CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR_INDEX],
      shirtOption: CONSTS.SHIRT.OPTIONS[CONSTS.SHIRT.DEFAULT_OPTION_INDEX],

      propOption1: CONSTS.PROPS.OPTIONS[CONSTS.PROPS.DEFAULT_PROP1_OPTION_INDEX],
      propOption2: CONSTS.PROPS.OPTIONS[0],
    };

    this.hairColourSwatches = [CONSTS.HAIR.COLOUR_SWATCH];
    this.hairColourCallbacks = [this.generateBaseCallback('hairColour')];
    this.hairOptions = [CONSTS.HAIR.BACK_HAIR_OPTIONS, CONSTS.HAIR.BANG_OPTIONS];
    this.hairOptionsCallbacks = [this.generateBaseCallback('backHairOption'), this.generateBaseCallback('bangOption')]

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

    this.propOptions = [CONSTS.PROPS.OPTIONS, CONSTS.PROPS.OPTIONS];
    this.propOptionsCallbacks = [this.generateBaseCallback('propOption1'), this.generateBaseCallback('propOption2')];
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
        <div className="App-Header">
          <img src={ logo } alt="logo"/>
        </div>
        
        <div className="Avatar-Canvas">
          <AvatarCanvas 
            hairColour={ this.state.hairColour }
            backHairOption={ this.state.backHairOption }
            bangOption={ this.state.bangOption }

            primarySkinColour={ this.state.primarySkinColour }
            secondarySkinColour={ this.state.secondarySkinColour }

            eyeColour={ this.state.eyeColour }
            eyeOption={ this.state.eyeOption }
            mouthOption={ this.state.mouthOption }

            shirtColour={ this.state.shirtColour } 
            shirtCuffsColour={ this.state.shirtCuffColour } 
            shirtOption={ this.state.shirtOption }
            
            propOption1={ this.state.propOption1 }
            propOption2={ this.state.propOption2 }/>
        </div>
        
        <div className="App-Selectors">
          <AvatarComponentSelector
            label={ 'Skin' }
            colourSwatches={ this.skinColourSwatches }
            onColourChanges={ this.skinColourCallbacks }
            circlePicker={ true }
          />

          <AvatarComponentSelector
            label={ 'Hair' }
            colourSwatches={ this.hairColourSwatches }
            onColourChanges={ this.hairColourCallbacks }
            options={ this.hairOptions }
            onOptionsChanges={ this.hairOptionsCallbacks }
            optionStartIndexes={ [CONSTS.HAIR.DEFAULT_BACK_HAIR_OPTION_INDEX, CONSTS.HAIR.DEFAULT_BANG_OPTION_INDEX] }
          />

          <AvatarComponentSelector
            label={ 'Eyes' }
            colourSwatches={ this.eyeColourSwatches } 
            onColourChanges={ this.eyeColourCallbacks } 
            options={ this.eyeOptions } 
            onOptionsChanges={ this.eyeOptionsCallbacks }
            optionStartIndexes={ [CONSTS.EYES.DEFAULT_OPTION_INDEX] }
          />

          <AvatarComponentSelector
            label={ 'Mouth' } 
            options={ this.mouthOptions } 
            onOptionsChanges={ this.mouthOptionsCallbacks }
            optionStartIndexes={ [CONSTS.MOUTH.DEFAULT_OPTION_INDEX] }
          />

          <AvatarComponentSelector
            label={ 'Shirt' }
            colourSwatches={ this.shirtColourSwatches } 
            onColourChanges={ this.shirtColourCallbacks } 
            options={ this.shirtOptions } 
            onOptionsChanges={ this.shirtOptionsCallbacks }
            optionStartIndexes={ [CONSTS.SHIRT.DEFAULT_OPTION_INDEX] }
          />

          <AvatarComponentSelector
            label={ 'Props' } 
            options={ this.propOptions } 
            onOptionsChanges={ this.propOptionsCallbacks }
            optionStartIndexes={ [CONSTS.PROPS.DEFAULT_PROP1_OPTION_INDEX] }
          />
        </div>
      </div>
    );
  }
  
};