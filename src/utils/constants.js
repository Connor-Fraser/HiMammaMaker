export default {

    SHIRT : {
        W_MULTIPLE: 0,
        H_MULTIPLE: 0.5,
        DEFAULT_COLOUR: "#659ed5",
        COLOUR_SWATCH: ['#659ed5', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
        GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.44 213.43"><defs><style>.cls-1{fill:${colour}}</style></defs><title>SHIRT_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M452.44,155.05c0-72.6-66-155-157.91-155H281.91c0,24.29-24.93,44-55.69,44s-55.69-19.7-55.69-44H157.91C66,0,0,82.45,0,155.05H70.16v58.38h312V155.05Z"/></g></g></svg>`,

        CUFFS: {
            W_MULTIPLE: 0,
            H_MULTIPLE: 0.728,
            DEFAULT_COLOUR: "#476e93",
            COLOUR_SWATCH: ['#476e93', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.61 13.41"><title>SHIRTCUFF_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="44.92" height="13.41"/><rect class="cls-1" x="244.69" width="44.92" height="13.41"/></g></g></svg>`
        },

        OPTIONS: [
            {
                NAME: 'NONE',
                GENERATE_SVG: null
            },
            {
                NAME: 'BALL',
                W_MULTIPLE: 0,
                H_MULTIPLE: 0,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.37 53.76"><defs><style>.cls-1{fill:#83cdbb;}</style></defs><title>CIRCLE</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M76.37,38.18A38.19,38.19,0,1,0,3.32,53.76H73A38,38,0,0,0,76.37,38.18Z"/></g></g></svg>`
            },
            {
                NAME: 'STAR',
                W_MULTIPLE: 0,
                H_MULTIPLE: 0,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.44 67.56"><defs><style>.cls-1{fill:#fdcb80;}</style></defs><title>STAR_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M24.28,67.56a7.55,7.55,0,0,0-2.75-8.44L3.13,45.75A7.56,7.56,0,0,1,7.57,32.08H30.32a7.55,7.55,0,0,0,7.18-5.22l7-21.64a7.56,7.56,0,0,1,14.38,0l7,21.64a7.55,7.55,0,0,0,7.18,5.22H95.87a7.56,7.56,0,0,1,4.44,13.67L81.91,59.12a7.55,7.55,0,0,0-2.75,8.44"/></g></g></svg>`
            },
        ]
    },

    SKIN : {
        PRIMARY_DEFAULT_COLOUR: '#fde1cc',
        SECONDARY_DEFAULT_COLOUR: '#eabcb2',

        NECK: {
            W_MULTIPLE: 0.35,
            H_MULTIPLE: 0.5,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"><title>NECK_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M38,0H0A28.65,28.65,0,0,0,28.65,28.65,28.66,28.66,0,0,0,57.31,0H38"/></g></g></svg>`
        },

        EARS: {
            W_MULTIPLE: 0.12,
            H_MULTIPLE: 0.27,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 42.26"><title>EARS_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="283.96" cy="21.13" r="21.13"/><circle class="cls-1" cx="21.13" cy="21.13" r="21.13"/></g></g></svg>`
        },

        FACE: {
            W_MULTIPLE: 0.175,
            H_MULTIPLE: 0.08,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><title>FACE_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="97.7" cy="97.7" r="97.7"/></g></g></svg>`
        },

        NOSE: {
            W_MULTIPLE: 0.45,
            H_MULTIPLE: 0.3,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><title>NOSE_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="0 27.2 15.7 0 31.41 27.2 0 27.2"/></g></g></svg>`
        },

        ARMS : {
            W_MULTIPLE: 0.031,
            H_MULTIPLE: .759,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291 300"><title>ARMS_SVG</title><defs><style>.cls-1{fill:${colour}}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="36.4" height="23.97"/><rect class="cls-1" x="236.16" width="36.4" height="23.97"/></g></g></svg>`
        }
    }
}