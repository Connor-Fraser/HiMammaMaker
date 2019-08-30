export default {
    COLOUR_SWATCH: ['#fce1cc', '#fddbcc', '#e5bda7', '#ca9f95', '#7c6a65'],
    SECONDARY_COLOUR_SWATCH: ['#e3a694', '#e3a694', '#b78d83', '#a3776b', '#574d4c'],
    DEFAULT_COLOUR_INDEX: 0,

    NECK: {
        WIDTH: 81.47,
        H_MULTIPLE: 0.714,
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
        H_MULTIPLE: 0.95,
        GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="286.34" height="25.19" viewBox="0 0 286.34 25.19"><defs><style>.cls-1{fill:${colour};}</style></defs><title>ARMS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><rect class="cls-1" width="38.24" height="25.19"/><rect class="cls-1" x="248.1" width="38.24" height="25.19"/></g></g></svg>`
    }
}