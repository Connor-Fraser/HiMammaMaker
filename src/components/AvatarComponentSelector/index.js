import React from 'react';
import ColourSelector from '../ColourSelector';
import './AvatarComponentSelector.css';

/*
    ==== Props ====
    avatarComponent: Constant data for the part of the avatar the selector controls
    onColourChange: callback function for when colour gets changed
*/

export default class AvatarComponentSelector extends React.Component {
    // constructor(props) {
    //     super(props);

    // };

    render() {
        return(
            <div className="Avatar-Component-Selector">
                <div className="Colour-Selector-Section">
                    <ColourSelector avatarComponent={ this.props.avatarComponent } onColourChange={this.props.onColourChange}/>
                </div>
                <div className="Item-List"></div>
            </div>
        );
    }
}