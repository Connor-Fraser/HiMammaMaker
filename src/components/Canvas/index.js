import React from 'react';
import './Canvas.css';

/*
    ==== Props ====
*/

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this._setCanvasSize = () => {
            console.log('fire');
            this.canvas.width = this.canvas.parentNode.clientWidth;
            this.canvas.height = this.canvas.parentNode.clientHeight;
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this._setCanvasSize);
        this._setCanvasSize();
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this._setCanvasSize);
    }

    render() {
        return (
            <div className="Canvas-Wrapper">
                <canvas ref={canvas => this.canvas = canvas }/>
            </div>
        );
    };
};