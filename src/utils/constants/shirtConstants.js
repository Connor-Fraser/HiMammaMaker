export default {
    WIDTH: 304.34,
    H_MULTIPLE: 0.714,
    COLOUR_SWATCH: ['#6a55a1', '#48396d' ,'#43b9c6', '#0f8790', '#79be43', '#3d9644', '#ffc32f','#d4ab2a', '#f78f1e', '#d67827', '#f399c1', '#cb4e4b', '#902a1d','#333333', '#555555', '#dddddd'],
    GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="304.34" height="143.57" viewBox="0 0 304.34 143.57"><defs><style>.cls-1{fill:${colour};}</style></defs><title>TSHIRT_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path class="cls-1" d="M304.34,104.3C304.34,55.46,259.94,0,198.12,0h-8.49c0,16.34-16.77,29.59-37.46,29.59S114.71,16.34,114.71,0h-8.49C44.4,0,0,55.46,0,104.3H47.19v39.27H257.06V104.3Z"/></g></g></svg>`,

    DEFAULT_COLOUR_INDEX: 10,
    DEFAULT_OPTION_INDEX: 1,

    CUFFS: {
        WIDTH: 304.25,
        H_MULTIPLE: 0.922,
        COLOUR_SWATCH: ['#48396d','#6a55a1','#43b9c6', '#0f8790', '#79be43', '#3d9644', '#ffc32f','#d4ab2a', '#f78f1e', '#d67827', '#f399c1', '#cb4e4b', '#902a1d','#333333', '#555555', '#dddddd'],
        GENERATE_SVG: (colour) => `<svg xmlns="http://www.w3.org/2000/svg" width="304.25" height="14.09" viewBox="0 0 304.25 14.09"><defs><style>.cls-1{fill:${colour};}</style></defs><title>CUFFS_SVG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><rect class="cls-1" width="47.19" height="14.09"/><rect class="cls-1" x="257.06" width="47.19" height="14.09"/></g></g></svg>`,
        DEFAULT_COLOUR_INDEX: 11,
    },

    OPTIONS: [
        {
            NAME: 'NONE',
            GENERATE_SVG: () => null
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
}