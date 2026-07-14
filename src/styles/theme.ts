import { addAlpha, BLACK, WHITE } from "./colours";
import { defaultTheme } from "./defaultThemeColourScheme";
import { typography } from "./typography";


// Default Colour Scheme

const currentTheme = defaultTheme

// NEED TO REPLACE ANY - KEEPING IT FOR NOW AS IM BUILDING 
export const themes: Record<string, any> = {
    default: {
        background: {
            background: `linear-gradient(180deg, ${currentTheme.BackgroundFirstColour}, ${currentTheme.BackgroundSecondColour})`,
        },

        stars: {
            backgroundColor: currentTheme.StarsColour,
            boxShadow: `0 0 2px 1px ${addAlpha(currentTheme.StarsColour, 50)}`,
        },

        moon: {
            background: `linear-gradient(135deg, ${currentTheme.BackgroundFirstColour}, ${currentTheme.BackgroundSecondColour})`,
            boxShadow: `0 0 250px 1px ${addAlpha(currentTheme.MainColour, 33)}`,
        },

        ...typography,

        headerModal: {
            backgroundColor: addAlpha(currentTheme.BackgroundFirstColour, 100),
        },

        headerNavButtons: {
            backgroundColor: addAlpha(BLACK, 60),
        },

        icons: {
            backgroundColor: currentTheme.MainColour,
        },

        svgIcons: {
            fill: currentTheme.MainColour
        },

        primaryButton:{
            color: currentTheme.MainColour,
            fontFamily: "Sansation, sans-serif",
            borderColor: currentTheme.MainColour,
            backgroundColor: currentTheme.ButtonBackgroundColour
        },

        secondaryButton: {
            backgroundColor: undefined
        },

        textHoverAnimation: {
            background: `linear-gradient(135deg, ${currentTheme.MainColour} 25%, ${currentTheme.SecondaryHoverColour}, ${currentTheme.MainColour} 75%)`
        },

        card: {
            // border: `1px solid ${defaultMainColour}`,
        },

        HeaderHoverColor1: {colour: currentTheme.HeaderHoverColor1},
        HeaderHoverColor2: {colour: currentTheme.HeaderHoverColor2},
        HeaderHoverColor3: {colour: currentTheme.HeaderHoverColor3},
        HeaderHoverColor4: {colour: currentTheme.HeaderHoverColor4},
        HeaderHoverColor5: {colour: currentTheme.HeaderHoverColor5},
        HeaderHoverColor6: {colour: currentTheme.HeaderHoverColor6},
    },
};