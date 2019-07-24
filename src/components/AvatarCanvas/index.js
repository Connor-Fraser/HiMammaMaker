import React from 'react';
import CONSTS from '../../utils/constants.js';
import './AvatarCanvas.css';

/*
    ==== Props ====
    shirtColour: hex string denoting shirt colour
*/

export default class AvatarCanvas extends React.Component {
    constructor(props) {
        super(props);

        this._resizeHandler = () => {
            this.setCanvasSize();
            this.clearAndDraw();
        }
    };

    setCanvasSize() {
        this.canvas.width = this.canvas.parentNode.clientWidth;
        this.canvas.height = this.canvas.parentNode.clientHeight;
    };

    clearAndDraw() {
        const ctx = this.canvas.getContext('2d');
        if(ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawAvatar(ctx);
        }
    };

    drawAvatar(ctx) {
        this.drawSVG(this.shirt, this.props.shirtColour || CONSTS.SHIRT.DEFAULT_COLOUR, this.canvas.width*CONSTS.SHIRT.W_MULTIPLE, this.canvas.height*CONSTS.SHIRT.H_MULTIPLE, ctx);
    };

    drawSVG(avatarComponentRef, colour, x, y, ctx) {
        avatarComponentRef.setAttribute('fill', colour);
        
        const xml = new XMLSerializer().serializeToString(avatarComponentRef);
        const svg64 = btoa(xml);
        const b64Start = 'data:image/svg+xml;base64,';
        const image64 = b64Start + svg64;
        const img = new Image();

        img.onload = function() {
            ctx.drawImage(img, x, y);
        };

        img.src = image64;
    }

    componentDidMount() {
        window.addEventListener('resize', this._resizeHandler);
        this.setCanvasSize();
        this.clearAndDraw();
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this._resizeHandler);
    }

    render() {
        return (
            <div className="Canvas-Wrapper">
                <canvas ref={canvas => this.canvas = canvas }/>
                <div className="Svgs">
                    <svg ref={shirt => this.shirt = shirt } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.44 213.43"><defs></defs><title>Shirt</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M452.44,155.05c0-72.6-66-155-157.91-155H281.91c0,24.29-24.93,44-55.69,44s-55.69-19.7-55.69-44H157.91C66,0,0,82.45,0,155.05H70.16v58.38h312V155.05Z"/></g></g></svg>
                </div>
            </div>
        );
    };
};