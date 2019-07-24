import React from 'react';
import CONSTS from '../../utils/constants.js';
import ColourSelector from '../ColourSelector';
import './AvatarComponentSelector.css';

/*
    ==== Props ====
*/

export default class AvatarComponentSelector extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        return(
            <div className="Avatar-Component-Selector">
                <div className="Colour-Selector-Section">
                    <ColourSelector avatarComponent={ CONSTS.SHIRT }/>
                </div>
                <div className="Item-List"></div>
            </div>
        );
    }
}