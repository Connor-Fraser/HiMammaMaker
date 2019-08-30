import React from 'react';
import './OptionSelector.css';

/*
    ==== Props ====
    options: list of options the selector can cycle through (first defaulted)
    onOptionChange: callback for when option is changed
    startIndex: index of option list to start as default
*/

export default class OptionSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.startIndex || 0
        };
    }; 

    increment = () => {
        let newIndex = (this.state.index + 1) % this.props.options.length;
        this.props.onOptionChange(this.props.options[newIndex]);

        this.setState({
            index: newIndex
        });
    }

    decrement = () => {
        let newIndex = this.state.index === 0 ? this.props.options.length - 1 : this.state.index - 1;
        this.props.onOptionChange(this.props.options[newIndex]);

        this.setState({
            index: newIndex
        });
    }

    render() {
        return (
            <div className="Option-Selector">
                <i className="fa fa-caret-left Arrows" onClick={ this.decrement }></i>
                <i className="fa fa-caret-right Arrows" onClick={ this.increment }></i>   
            </div>
        );
    }
};