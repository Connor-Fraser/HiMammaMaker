import React from 'react';
import './OptionSelector.css';

/*
    ==== Props ====
    options: list of options the selector can cycle through (first defaulted)
    onOptionChange: callback for when option is changed
*/

export default class OptionSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }; 

    render() {
        return (
            <div className="Option-Selector">
                <i className="fa fa-caret-left Arrows"></i>
                <i className="fa fa-caret-right Arrows"></i>   
            </div>
        );
    }
};