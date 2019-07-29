import React from 'react';
import { TwitterPicker } from 'react-color';
import './ColourSelector.css';

/*
    ==== Props ====
    colourSwatch: colour swatch to be displayed for selection (first considered default)
    onColourChange: callback on completed colour change
    width: %of parent width colour Selector should take
*/

export default class ColourSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: this.props.colourSwatch[0],
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
            backgroundColor: this.state.colour,
            width: this.props.width
        };

        if(this.state.clicked) {
            return (
                   <div className="Colour-Selector-Clicked" style={computedStyle}>
                        <TwitterPicker 
                            color={this.state.colour} 
                            colors={this.props.colourSwatch}
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