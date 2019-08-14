export default {

    SHIRT : {
        WIDTH: 304.34,
        H_MULTIPLE: 0.712,
        DEFAULT_COLOUR: "#659ed5",
        COLOUR_SWATCH: ['#659ed5', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c', '#f78da7', '#9900ef'],
        GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="304.34" height="143.57" viewBox="0 0 304.34 143.57"><defs><style>.cls-1{fill:${colour};}</style></defs><title>TSHIRT_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M304.34,104.3C304.34,55.46,259.94,0,198.12,0h-8.49c0,16.34-16.77,29.59-37.46,29.59S114.71,16.34,114.71,0h-8.49C44.4,0,0,55.46,0,104.3H47.19v39.27H257.06V104.3Z"/></g></g></svg>`,

        CUFFS: {
            WIDTH: 304.25,
            H_MULTIPLE: 0.921,
            DEFAULT_COLOUR: "#476e93",
            COLOUR_SWATCH: ['#476e93', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c', '#f78da7', '#9900ef'],
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="304.25" height="14.09" viewBox="0 0 304.25 14.09"><defs><style>.cls-1{fill:${colour};}</style></defs><title>CUFFS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><rect class="cls-1" width="47.19" height="14.09"/><rect class="cls-1" x="257.06" width="47.19" height="14.09"/></g></g></svg>`
        },

        OPTIONS: [
            {
                NAME: 'NONE',
                GENERATE_SVG: null
            },
            {
                NAME: 'BALL',
                WIDTH: 108.56,
                H_MULTIPLE: 0.845,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" width="108.56" height="76.42" viewBox="0 0 108.56 76.42"><defs><style>.cls-1{fill:#53c1ac;}</style></defs><title>CIRCLE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M108.56,54.28A54.28,54.28,0,1,0,4.72,76.42h99.12A54.15,54.15,0,0,0,108.56,54.28Z"/></g></g></svg>`
            },
            {
                NAME: 'STAR',
                WIDTH: 108.67,
                H_MULTIPLE: 0.856,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" width="108.67" height="70.98" viewBox="0 0 108.67 70.98"><defs><style>.cls-1{fill:#fecc80;}</style></defs><title>STAR_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M25.5,71a7.94,7.94,0,0,0-2.88-8.88l-19.33-14A7.94,7.94,0,0,1,8,33.7h23.9a7.94,7.94,0,0,0,7.55-5.49L46.78,5.49a7.94,7.94,0,0,1,15.1,0l7.39,22.72a7.94,7.94,0,0,0,7.55,5.49h23.89a7.94,7.94,0,0,1,4.67,14.36l-19.33,14A8,8,0,0,0,83.16,71"/></g></g></svg>`
            },
        ]
    },

    SKIN : {
        PRIMARY_DEFAULT_COLOUR: '#fde1cc',
        SECONDARY_DEFAULT_COLOUR: '#eabcb2',
        COLOUR_SWATCH: ['#fde1cc', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c', '#f78da7', '#9900ef'],
        SECONDARY_COLOUR_SWATCH: ['#eabcb2', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c', '#f78da7', '#9900ef'],

        NECK: {
            WIDTH: 81.47,
            H_MULTIPLE: 0.711,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="81.47" height="40.73" viewBox="0 0 81.47 40.73"><defs><style>.cls-1{fill:${colour};}</style></defs><title>NECK_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M27.39,0H0A40.73,40.73,0,0,0,40.73,40.73,40.73,40.73,0,0,0,81.47,0H54.08"/></g></g></svg>`
        },

        EARS: {
            WIDTH: 320.51,
            H_MULTIPLE: 0.42,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="320.51" height="44.39" viewBox="0 0 320.51 44.39"><defs><style>.cls-1{fill:${colour};}</style></defs><title>EARS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="cls-1" cx="298.31" cy="22.2" r="22.2"/><circle class="cls-1" cx="22.2" cy="22.2" r="22.2"/></g></g></svg>`
        },

        FACE: {
            WIDTH: 277.78,
            H_MULTIPLE: 0.165,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="277.78" height="277.78" viewBox="0 0 277.78 277.78"><defs><style>.cls-1{fill:${colour};}</style></defs><title>FACE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M138.89,0A138.9,138.9,0,1,0,277.78,138.89,138.89,138.89,0,0,0,138.89,0Z"/></g></g></svg>`
        },

        NOSE: {
            WIDTH: 32.99,
            H_MULTIPLE: 0.465,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="32.99" height="28.57" viewBox="0 0 32.99 28.57"><defs><style>.cls-1{fill:${colour};}</style></defs><title>NOSE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><polygon class="cls-1" points="0 28.57 16.5 0 32.99 28.57 0 28.57"/></g></g></svg>`
        },

        ARMS : {
            WIDTH: 286.34,
            H_MULTIPLE: 0.946,
            GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="286.34" height="25.19" viewBox="0 0 286.34 25.19"><defs><style>.cls-1{fill:${colour};}</style></defs><title>ARMS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><rect class="cls-1" width="38.24" height="25.19"/><rect class="cls-1" x="248.1" width="38.24" height="25.19"/></g></g></svg>`
        }
    },

    EYES : {
        DEFAULT_COLOUR: '#5c433c',
        COLOUR_SWATCH: ['#5c433c', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c', '#f78da7', '#9900ef'],
        OPTIONS : [
            {
                NAME: 'NORMAL',
                WIDTH: 153.13,
                H_MULTIPLE: 0.405,
                GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="153.13" height="24.3" viewBox="0 0 153.13 24.3"><defs><style>.cls-1{fill:${colour};}</style></defs><title>EYES_MALE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="cls-1" cx="12.15" cy="12.15" r="12.15"/><circle class="cls-1" cx="140.98" cy="12.15" r="12.15" transform="translate(6.08 54.88) rotate(-22.5)"/></g></g></svg>`
            },
            {
                NAME: 'LASHES',
                WIDTH: 167.08,
                H_MULTIPLE: 0.405,
                GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="167.08" height="24.3" viewBox="0 0 167.08 24.3"><defs><style>.cls-1{fill:${colour};}</style></defs><title>EYES_FEMALE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M165.91,1.89c-1.84,1.72-6.28,1.58-10,1.08a12.14,12.14,0,1,0,4.2,9.18c0-.24,0-.47,0-.7C164.86,11,169.24-1.23,165.91,1.89Z"/><path class="cls-1" d="M19.08,0a12.14,12.14,0,0,0-7.95,3c-3.69.5-8.13.64-10-1.08C-2.16-1.23,2.21,11,7,11.45c0,.23,0,.46,0,.7A12.15,12.15,0,1,0,19.08,0Z"/></g></g></svg>`
            },
        ]
    },

    MOUTH: {
        OPTIONS : [
            {
                NAME: 'OPEN',
                WIDTH: 115.4,
                H_MULTIPLE: 0.57,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" width="115.4" height="44.37" viewBox="0 0 115.4 44.37"><defs><style>.cls-1{fill:#e3795b;}.cls-2{fill:#be583a;}.cls-3{fill:#fff;}</style></defs><title>MOUTH_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M97.61,32.13c11-8,17.79-19.26,17.79-31.74H0c0,12.8,7.18,24.32,18.63,32.36,10.27-6.41,24.4-10.37,40-10.37C73.73,22.38,87.44,26.09,97.61,32.13Z"/><path class="cls-2" d="M97.61,32.13c-10.17-6-23.88-9.75-39-9.75-15.61,0-29.74,4-40,10.37C28.91,40,42.63,44.37,57.7,44.37,73.19,44.37,87.25,39.71,97.61,32.13Z"/><path class="cls-3" d="M57.7,11.25c31.87,0,57.7-5,57.7-11.25H0C0,6.21,25.83,11.25,57.7,11.25Z"/></g></g></svg>`
            },
            {
                NAME: 'CLOSED',
                WIDTH: 90.35,
                H_MULTIPLE: 0.6,
                GENERATE_SVG: () => `<svg xmlns="http://www.w3.org/2000/svg" width="90.35" height="14.94" viewBox="0 0 90.35 14.94"><defs><style>.cls-1{fill:none;stroke:#e3795b;stroke-miterlimit:10;stroke-width:4.71px;}</style></defs><title>SMILE_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M1.22,2.12s39,23.55,88.12,0"/></g></g></svg>`
            }
            
        ]
    }
}