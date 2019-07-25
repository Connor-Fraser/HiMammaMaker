import React from 'react';
import CONSTS from '../../utils/constants.js'
import { TwitterPicker } from 'react-color';
import './ColourSelector.css';

/*
    ==== Props ====
    avatarComponent = Constant data about the part of the avatar the selector is for
    onColourChange = callback on completed colour change
*/

export default class ColourSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: this.props.avatarComponent.DEFAULT_COLOUR,
            clicked: false
        }

        this._clickHandler = () => {
            this.setState({
                clicked: true
            });
        }

        this._colourChangeHandler = (newColour) => {
            this.setState({
                colour: newColour.hex,
                clicked: false
            }, this.props.onColourChange(this.state.colour));
        }

        this._colourHoverHandler = (newColour) => {
            this.setState({
                colour: newColour.hex
            });
        }
    }; 

    render() {
        const computedStyle = {
            backgroundColor: this.state.colour
        };

        if(this.state.clicked) {
            return (
                   <div className="Colour-Selector-Clicked" style={computedStyle}>
                        <TwitterPicker 
                            color={this.state.colour} 
                            colors={CONSTS.COLOUR_SWATCH}
                            onChangeComplete={this._colourChangeHandler} 
                            onSwatchHover={this._colourHoverHandler}
                            triangle="hide" />
                    </div> 
            );
        }

        return (
            <div className="Colour-Selector" style={computedStyle} onClick={this._clickHandler}></div>
        );
    }
};