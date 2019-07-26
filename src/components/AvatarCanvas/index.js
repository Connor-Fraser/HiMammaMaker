import React from 'react';
import CONSTS from '../../utils/constants.js';
import './AvatarCanvas.css';

/*
    ==== Props ====
    shirtColour: hex string denoting shirt colour
*/

export default class AvatarCanvas extends React.Component {

    setCanvasSize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    };

    clearAndDraw() {
        const ctx = this.canvas.getContext('2d');
        if(ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawAvatar(ctx);
        }
    };

    drawAvatar(ctx) {
        this.drawSVG(this.neck, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.NECK.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.NECK.H_MULTIPLE, ctx);
        this.drawSVG(this.ears, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.EARS.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.EARS.H_MULTIPLE, ctx);
        this.drawSVG(this.face, this.props.primarySkinColour || CONSTS.SKIN.PRIMARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.FACE.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.FACE.H_MULTIPLE, ctx);
        this.drawSVG(this.nose, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.NOSE.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.NOSE.H_MULTIPLE, ctx);
        this.drawSVG(this.arms, this.props.primarySkinColour || CONSTS.SKIN.PRIMARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.ARMS.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.ARMS.H_MULTIPLE, ctx);
        this.drawSVG(this.shirt, this.props.shirtColour || CONSTS.SHIRT.DEFAULT_COLOUR, this.canvas.width*CONSTS.SHIRT.W_MULTIPLE, this.canvas.height*CONSTS.SHIRT.H_MULTIPLE, ctx);
    
        // this.drawSVG(this.ears, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.EARS.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.EARS.H_MULTIPLE, ctx);
        
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

    componentDidUpdate() {
        this.clearAndDraw();   
    }

    componentDidMount() {
        this.setCanvasSize();
        this.clearAndDraw();
    };

    render() {
        return (
            <div className="Canvas-Wrapper">
                <canvas className="Canvas" ref={canvas => this.canvas = canvas }/>
                <div className="Svgs">
                    <svg ref={ neck => this.neck = neck } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"><title>NECK_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M38,0H0A28.65,28.65,0,0,0,28.65,28.65,28.66,28.66,0,0,0,57.31,0H38"/></g></g></svg>
                    <svg ref={ ears => this.ears = ears } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 42.26"><title>EARS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="283.96" cy="21.13" r="21.13"/><circle cx="21.13" cy="21.13" r="21.13"/></g></g></svg>
                    <svg ref={ face => this.face = face } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><title>FACE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="97.7" cy="97.7" r="97.7"/></g></g></svg>
                    <svg ref={ nose => this.nose = nose } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><title>NOSE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="0 27.2 15.7 0 31.41 27.2 0 27.2"/></g></g></svg>
                    <svg ref={ shirt => this.shirt = shirt } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.44 213.43"><title>SHIRT_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M452.44,155.05c0-72.6-66-155-157.91-155H281.91c0,24.29-24.93,44-55.69,44s-55.69-19.7-55.69-44H157.91C66,0,0,82.45,0,155.05H70.16v58.38h312V155.05Z"/></g></g></svg>
                    <svg ref={ arms => this.arms = arms } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291 300"><title>ARMS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect width="36.4" height="23.97"/><rect x="236.16" width="36.4" height="23.97"/></g></g></svg>
                </div>
            </div>
        );
    };
};