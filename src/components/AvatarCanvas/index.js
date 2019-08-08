import React from 'react';
import CONSTS from '../../utils/constants.js';
import './AvatarCanvas.css';

/*
    ==== Props ====
    primarySkinColour: hex string denoting primary skin tone
    secondarySkinColour: hex string denoting secondary skin tone
    shirtColour: hex string denoting shirt colour
    shirtCuffsColour: hex string denoting shirt cuffs colour
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
        this.drawSkin(ctx);
        this.drawShirt(ctx);
    };

    drawSkin(ctx) {
        this.drawSVG(CONSTS.SKIN.NECK.SVG, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.NECK.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.NECK.H_MULTIPLE, ctx);
        this.drawSVG(CONSTS.SKIN.EARS.SVG, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.EARS.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.EARS.H_MULTIPLE, ctx);
        this.drawSVG(CONSTS.SKIN.FACE.SVG, this.props.primarySkinColour || CONSTS.SKIN.PRIMARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.FACE.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.FACE.H_MULTIPLE, ctx);
        this.drawSVG(CONSTS.SKIN.NOSE.SVG, this.props.secondarySkinColour || CONSTS.SKIN.SECONDARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.NOSE.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.NOSE.H_MULTIPLE, ctx);
        this.drawSVG(CONSTS.SKIN.ARMS.SVG, this.props.primarySkinColour || CONSTS.SKIN.PRIMARY_DEFAULT_COLOUR, this.canvas.width*CONSTS.SKIN.ARMS.W_MULTIPLE, this.canvas.height*CONSTS.SKIN.ARMS.H_MULTIPLE, ctx);
    };

    drawShirt(ctx) {
        this.drawSVG(CONSTS.SHIRT.SVG, this.props.shirtColour || CONSTS.SHIRT.DEFAULT_COLOUR, this.canvas.width*CONSTS.SHIRT.W_MULTIPLE, this.canvas.height*CONSTS.SHIRT.H_MULTIPLE, ctx);
        this.drawSVG(CONSTS.SHIRT.CUFFS.SVG, this.props.shirtCuffsColour || CONSTS.SHIRT.CUFFS.DEFAULT_COLOUR, this.canvas.width*CONSTS.SHIRT.CUFFS.W_MULTIPLE, this.canvas.height*CONSTS.SHIRT.CUFFS.H_MULTIPLE, ctx);               
    };

    drawSVG(svgString, colour, x, y, ctx) {
        let svg = svgString.replace('FILL_COLOUR', colour);
        const svg64 = btoa(svg);
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
            </div>
        );
    };
};