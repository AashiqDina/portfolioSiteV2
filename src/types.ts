// export type Theme = {
//     background: {
//         background: string;
//     };

//     header: {
//         backgroundColor: string;
//     }

//     headerNavButtons: {
//         backgroundColor: string;
//     }

//     icons: {
//         backgroundColor: string;
//     };

//     svgIcons: {
//         fill: string;
//     }

//     primaryText: {
//         color: string;
//         fontFamily: string;
//         margin: number;
//         padding: number;
//     };

//     primaryButton: {
//         color: string;
//         fontFamily: string;
//         borderColor: string;
//         backgroundColor: string;
//     }

//     secondaryButton: {
//         backgroundColor: undefined
//     };

//     textHoverAnimation: {
//         background: string;
//     }

//     card: {
//         // border: string
//     };

//     HeaderHoverColor1: { colour: string }
//     HeaderHoverColor2: { colour: string }
//     HeaderHoverColor3: { colour: string }
//     HeaderHoverColor4: { colour: string }
//     HeaderHoverColor5: { colour: string }
//     HeaderHoverColor6: { colour: string }

// }

// --------- Header --------- 

export type HeaderPagesData = {
    title: string;
    description: string;
    borderHoverColour: string;
    path: string;
}

// --------- Projects --------- 

export type ProjectData = {
    id: string;
    name: string;
    summary: string;
    technologies: string[];
    links: {
        github?: string;
        liveDemo?: string;
    };
    images: {
        logo?: string; 
        thumbnail: string;
        additional?: string[];
    };
    descriptions: string[];
}   