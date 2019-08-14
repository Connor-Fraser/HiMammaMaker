import React from 'react';
import CONSTS from '../../utils/constants.js';
import './AvatarCanvas.css';

/*
    ==== Props ====
    primarySkinColour: hex string denoting primary skin tone
    secondarySkinColour: hex string denoting secondary skin tone
    eyeColour: hex string denoting eye colour
    eyeOption: eye option from the consts
    shirtColour: hex string denoting shirt colour
    shirtCuffsColour: hex string denoting shirt cuffs colour
    shirtOption: shirt option from the consts
*/

export default class AvatarCanvas extends React.Component {

    _getXPos(componentConstMetadata) {
        //if svg width is provded, assumption is it's centered
        if(componentConstMetadata.WIDTH) {
            return (this.canvas.width/2) - (componentConstMetadata.WIDTH/2)
        }
        return componentConstMetadata.W_MULTIPLE*this.canvas.width;
    }

    _getYPos(hMultiple) {
        return hMultiple*this.canvas.height;
    }

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
        this.drawFace(ctx);
        this.drawShirt(ctx);
    };

    drawSkin(ctx) {
        this.drawSVG(CONSTS.SKIN.NECK.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.NECK), this._getYPos(CONSTS.SKIN.NECK.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.EARS.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.EARS), this._getYPos(CONSTS.SKIN.EARS.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.FACE.GENERATE_SVG(this.props.primarySkinColour), this._getXPos(CONSTS.SKIN.FACE), this._getYPos(CONSTS.SKIN.FACE.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.NOSE.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.NOSE), this._getYPos(CONSTS.SKIN.NOSE.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.ARMS.GENERATE_SVG(this.props.primarySkinColour), this._getXPos(CONSTS.SKIN.ARMS), this._getYPos(CONSTS.SKIN.ARMS.H_MULTIPLE), ctx);
    };

    drawFace(ctx) {
        if(this.props.eyeOption) {
            this.drawSVG(this.props.eyeOption.GENERATE_SVG(this.props.eyeColour), this._getXPos(this.props.eyeOption), this._getYPos(this.props.eyeOption.H_MULTIPLE), ctx);
        }
    }

    drawShirt(ctx) {
        this.drawSVG(CONSTS.SHIRT.GENERATE_SVG(this.props.shirtColour), this._getXPos(CONSTS.SHIRT), this._getYPos(CONSTS.SHIRT.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SHIRT.CUFFS.GENERATE_SVG(this.props.shirtCuffsColour), this._getXPos(CONSTS.SHIRT.CUFFS), this._getYPos(CONSTS.SHIRT.CUFFS.H_MULTIPLE), ctx);
        
        if(this.props.shirtOption.GENERATE_SVG !== null) {
            this.drawSVG(this.props.shirtOption.GENERATE_SVG(), this._getXPos(this.props.shirtOption), this._getYPos(this.props.shirtOption.H_MULTIPLE), ctx);
        }
    };

    drawSVG(svgString, x, y, ctx) {
        const svg64 = btoa(svgString);
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