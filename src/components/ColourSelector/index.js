import React from 'react';
import { TwitterPicker, CirclePicker } from 'react-color';
import './ColourSelector.css';

/*
    ==== Props ====
    colourSwatch: colour swatch to be displayed for selection (first considered default)
    onColourChange: callback on completed colour change
    width: %of parent width colour Selector should take
    circlePicker: boolean denoting usage of CirclePicker instead of default
*/

export default class ColourSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: this.props.colourSwatch[0],
            displayPicker: false
        }

        this._clickHandler = () => {
            this.setState({
                displayPicker: !this.state.displayPicker
            });
        }

        this._colourChangeHandler = (newColour) => {
            this.setState({
                colour: newColour.hex,
                displayPicker: false
            }, function(){ this.props.onColourChange(this.state.colour) });
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

        const picker = this.props.circlePicker ? 
    
        <div className="Colour-Selector-Open" style={computedStyle}>
            <span className="Cover" onClick={this._clickHandler}/>
            <CirclePicker
                color={this.state.colour} 
                colors={this.props.colourSwatch}
                onChangeComplete={this._colourChangeHandler} 
                onSwatchHover={this._colourHoverHandler}
                triangle="hide" />
        </div>    
        :
        <div className="Colour-Selector-Open" style={computedStyle}>
            <span className="Cover" onClick={this._clickHandler}/>
            <TwitterPicker
                color={this.state.colour} 
                colors={this.props.colourSwatch}
                onChangeComplete={this._colourChangeHandler} 
                onSwatchHover={this._colourHoverHandler}
                triangle="hide" />
        </div>;

        if(this.state.displayPicker) {
            return picker;
        }

        return (
            <div className="Colour-Selector" style={computedStyle} onClick={this._clickHandler}></div>
        );
    }
};