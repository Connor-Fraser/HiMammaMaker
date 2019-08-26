import React from 'react';
import CONSTS from '../../utils/constants.js';
import './AvatarCanvas.css';

/*
    ==== Props ====
    hairColour: hex string denoting hair colour
    backHairOption: option for the large hair drawn behind the face from the consts
    bangOption: option for the hair drawn on the face from consts
    primarySkinColour: hex string denoting primary skin tone
    secondarySkinColour: hex string denoting secondary skin tone
    eyeColour: hex string denoting eye colour
    eyeOption: eye option from the consts
    mouthOption: mouth option from the consts
    shirtColour: hex string denoting shirt colour
    shirtCuffsColour: hex string denoting shirt cuffs colour
    shirtOption: shirt option from the consts
    propOption: prop option from the consts
*/

export default class AvatarCanvas extends React.Component {

    _getXPos(componentWidth) {
        //Assumption is each svg is centered (but can be configured with WIDTH property)
        return (this.canvas.width/2) - (componentWidth/2)
    };

    _getYPos(hMultiple) {
        return hMultiple*this.canvas.height;
    };

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
        this.drawSVG(this.props.backHairOption.GENERATE_SVG(this.props.hairColour), this._getXPos(this.props.backHairOption.WIDTH), this._getYPos(this.props.backHairOption.H_MULTIPLE), ctx);

        //Timeouts used to prevent race condition that results in back hair getting drawn on top of face (canvas draw functions are synchronous, but results tend to not be)
        //promise-based version of drawSVG function did not work
        setTimeout(() => {
            this.drawSkin(ctx);
            setTimeout(() => {
                this.drawFace(ctx);
                this.drawShirt(ctx);
                setTimeout(() => {
                    this.drawProp(ctx);
                },10)
            },10);
        },10);
        
    };

    drawSkin(ctx) {
        this.drawSVG(CONSTS.SKIN.NECK.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.NECK.WIDTH), this._getYPos(CONSTS.SKIN.NECK.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.EARS.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.EARS.WIDTH), this._getYPos(CONSTS.SKIN.EARS.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SKIN.FACE.GENERATE_SVG(this.props.primarySkinColour), this._getXPos(CONSTS.SKIN.FACE.WIDTH), this._getYPos(CONSTS.SKIN.FACE.H_MULTIPLE), ctx);
        setTimeout(() => {
            this.drawSVG(CONSTS.SKIN.NOSE.GENERATE_SVG(this.props.secondarySkinColour), this._getXPos(CONSTS.SKIN.NOSE.WIDTH), this._getYPos(CONSTS.SKIN.NOSE.H_MULTIPLE), ctx);
            this.drawSVG(CONSTS.SKIN.ARMS.GENERATE_SVG(this.props.primarySkinColour), this._getXPos(CONSTS.SKIN.ARMS.WIDTH), this._getYPos(CONSTS.SKIN.ARMS.H_MULTIPLE), ctx);
        }, 10);
    };

    drawFace(ctx) {
        this.drawSVG(this.props.mouthOption.GENERATE_SVG(), this._getXPos(this.props.mouthOption.WIDTH), this._getYPos(this.props.mouthOption.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.HAIR.EYEBROWS.GENERATE_SVG(this.props.hairColour), this._getXPos(CONSTS.HAIR.EYEBROWS.WIDTH), this._getYPos(CONSTS.HAIR.EYEBROWS.H_MULTIPLE), ctx);
        this.drawSVG(this.props.eyeOption.GENERATE_SVG(this.props.eyeColour), this._getXPos(this.props.eyeOption.WIDTH), this._getYPos(this.props.eyeOption.H_MULTIPLE), ctx);
        this.drawSVG(this.props.bangOption.GENERATE_SVG(this.props.hairColour), this._getXPos(this.props.bangOption.WIDTH), this._getYPos(this.props.bangOption.H_MULTIPLE), ctx);
    };

    drawShirt(ctx) {
        this.drawSVG(CONSTS.SHIRT.GENERATE_SVG(this.props.shirtColour), this._getXPos(CONSTS.SHIRT.WIDTH), this._getYPos(CONSTS.SHIRT.H_MULTIPLE), ctx);
        this.drawSVG(CONSTS.SHIRT.CUFFS.GENERATE_SVG(this.props.shirtCuffsColour), this._getXPos(CONSTS.SHIRT.CUFFS.WIDTH), this._getYPos(CONSTS.SHIRT.CUFFS.H_MULTIPLE), ctx);
        this.drawSVG(this.props.shirtOption.GENERATE_SVG(), this._getXPos(this.props.shirtOption.WIDTH), this._getYPos(this.props.shirtOption.H_MULTIPLE), ctx);
    };

    drawProp(ctx) {
        this.drawSVG(this.props.propOption.GENERATE_SVG(), this._getXPos(this.props.propOption.WIDTH), this._getYPos(this.props.propOption.H_MULTIPLE), ctx);
    };

    drawSVG(svgString, x, y, ctx) {
        if(!svgString) {
            return
        }

        const svg64 = btoa(svgString);
        const b64Start = 'data:image/svg+xml;base64,';
        const image64 = b64Start + svg64;
        const img = new Image();

        img.onload = function() {
            ctx.drawImage(img, x, y);
        };

        img.src = image64;
    };

    saveImage = () => {        
        const link = document.createElement('a');
        link.href = this.canvas.toDataURL();
        link.download = "HiMammaAvatar.png";
        link.click();
    };

    componentDidUpdate() {
        this.clearAndDraw();   
    };

    componentDidMount() {
        this.setCanvasSize();
        this.clearAndDraw();
    };

    render() {
        return (
            <div className="Canvas-Wrapper">
                <canvas className="Canvas" ref={canvas => this.canvas = canvas }/>
                <button className='Canvas-Save-Button' onClick={ this.saveImage }>Save</button>
            </div>
        );
    };
};