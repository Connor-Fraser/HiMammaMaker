import React from 'react';
import ColourSelector from '../ColourSelector';
import './AvatarComponentSelector.css';

/*
    ==== Props ====
    colourSwatches: array of arrays of colour swatches (the first of which is the default colour)
    onColourChanges: array of callback functions for when colours gets changed
*/

export default class AvatarComponentSelector extends React.Component {
    // constructor(props) {
    //     super(props);

    // };

    render() {
        if(this.props.onColourChanges.length !== this.props.colourSwatches.length) {
            return <p>Make sure to pass equal length array values to colourSwatches and onColourChanges</p>
        }

        //For multiple colours in one selector, need to set a grid-template-columns where they are all the same percentage
        //sectionColumnsTemplate amount is the % and sectionColumnsTemplateString is the grid-template-columns value passed to the style prop
        const sectionColumnsTemplateAmount = `${ 100/this.props.colourSwatches.length}%`;
        let sectionColumnsTemplateString = '';

        const colourSelectors = [];
        for(let i=0; i<this.props.colourSwatches.length; i++) {
            colourSelectors.push(
                <ColourSelector  
                    key={ i }
                    colourSwatch={ this.props.colourSwatches[i] } 
                    onColourChange={ this.props.onColourChanges[i] }
                />
            );
            sectionColumnsTemplateString += sectionColumnsTemplateAmount;
        };

        const colourSelectorSectionComputedStyles = {
            gridTemplateColumns: sectionColumnsTemplateString
        }

        return(
            <div className="Avatar-Component-Selector">
                <div className="Colour-Selector-Section" style={ colourSelectorSectionComputedStyles }>
                    { colourSelectors }
                </div>
                <div className="Item-List"></div>
            </div>
        );
    }
}