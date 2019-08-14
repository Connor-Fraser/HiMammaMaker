import React from 'react';
import ColourSelector from '../ColourSelector';
import OptionSelector from '../OptionSelector'
import './AvatarComponentSelector.css';

/*
    ==== Props ====
    colourSwatches: array of arrays of colour swatches (the first of which is the default colour)
    onColourChanges: array of callback functions for when colours gets changed
    options: array of options arrays (the first of which is the default selection)
    onOptionsChanges: array of callback functions for when an option gets changed
*/

export default class AvatarComponentSelector extends React.Component {
    render() {
        if(this.props.onColourChanges && this.props.colourSwatches && this.props.onColourChanges.length !== this.props.colourSwatches.length) {
            return <p>Make sure to pass equal length array values to colourSwatches and onColourChanges</p>
        } else if(this.props.options && this.props.onOptionsChanges && this.props.options.length !== this.props.onOptionsChanges.length) {
            return <p>Make sure to pass equal length array values to options and onOptionsChanges</p>
        }

        let componentSelectorComputedStyles = {
            gridTemplateColumns: '50% 50%'
        };
        let colourSelectorSectionComputedStyles;
        let colourSelectors;

        let optionSelectorsSectionComputedStyles;
        let optionSelectors;

        //For multiple colours in one selector, need to set a grid-template-columns where they are all the same percentage
        //sectionColumnsTemplate amount is the % and sectionColumnsTemplateString is the grid-template-columns value passed to the style prop
        if(this.props.colourSwatches) {
            const sectionColumnsTemplateAmount = `${ 100/this.props.colourSwatches.length}%`;
            let sectionColumnsTemplateString = '';

            colourSelectors = [];
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

            colourSelectorSectionComputedStyles = {
                gridTemplateColumns: sectionColumnsTemplateString
            }
        } else {
            componentSelectorComputedStyles.gridTemplateColumns = '0% 100%'
        }

        //For multiple options in one selector, need to set a grid-template-columns where they are all the same percentage
        //sectionColumnsTemplate amount is the % and sectionColumnsTemplateString is the grid-template-columns value passed to the style prop
        if(this.props.options) {
            const sectionColumnsTemplateAmount = `${ 100/this.props.options.length}%`;
            let sectionColumnsTemplateString = '';

            optionSelectors = [];
            for(let i=0; i<this.props.options.length; i++) {
                optionSelectors.push(
                    <OptionSelector  
                        key={ i+999 }
                        options={ this.props.options[i] } 
                        onOptionChange={ this.props.onOptionsChanges[i] }
                    />
                );
                sectionColumnsTemplateString += sectionColumnsTemplateAmount;
            };

            optionSelectorsSectionComputedStyles = {
                gridTemplateColumns: sectionColumnsTemplateString
            }
        } else {
            componentSelectorComputedStyles.gridTemplateColumns = '100% 0%'
        }

        return(
            <div className="Avatar-Component-Selector" style={ componentSelectorComputedStyles }>

                {this.props.colourSwatches ? 
                    <div className="Colour-Selector-Section" style={ colourSelectorSectionComputedStyles }>
                        { colourSelectors }
                    </div>
                    :
                    <div className="Colour-Selector-Section"/>
                }
                
                { this.props.options ?
                    <div className="Option-List" style={ optionSelectorsSectionComputedStyles }>
                        { optionSelectors }
                    </div>
                    : 
                    <div className="Option-List"/>
                }
            </div>
        );
    }
}