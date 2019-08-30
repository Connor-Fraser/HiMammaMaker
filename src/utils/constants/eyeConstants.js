export default {
    COLOUR_SWATCH: ['#87a359', '#659ed5', '#c18953', '#825f5a'],
    DEFAULT_COLOUR_INDEX: 3,
    DEFAULT_OPTION_INDEX: 1,

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
}