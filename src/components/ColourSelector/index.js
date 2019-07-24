import React from 'react';
import './ColourSelector.css';

/*
    ==== Props ====
    avatarComponent = Constant data about the part of the avatar the selector is for
*/

export default class ColourSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: this.props.avatarComponent.DEFAULT_COLOUR
        }
    };

    render() {
        const computedStyle = {
            backgroundColor: this.state.colour
        };

        return (
            <div className="Colour-Selector" style={computedStyle}></div>
        );
    }
}