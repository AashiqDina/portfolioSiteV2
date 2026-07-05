import { theme } from "../types";
import { addAlpha, BLACK, MUTED_BLUE, WHITE, DEFAULT_TOP, DEFAULT_BOTTOM } from "./colours";


// Default Colour Scheme
const defaultMainColour = WHITE
const defaultSecondaryHoverColour = addAlpha(MUTED_BLUE, 50) 
const defaultButtonBackgroundColour = addAlpha(BLACK, 50)

export const themes: Record<string, theme> = {
    default: {
        background: {
            background: `linear-gradient(180deg, ${DEFAULT_TOP}, ${DEFAULT_BOTTOM})`,
        },

        icons: {
            backgroundColor: defaultMainColour
        },

        svgIcons: {
            fill: defaultMainColour
        },

        primaryText: {
            color: defaultMainColour,
            fontFamily: "Sansation, sans-serif",
            margin: 0,
            padding: 0,
        },

        primaryButton:{
            color: defaultMainColour,
            fontFamily: "Sansation, sans-serif",
            borderColor: defaultMainColour,
            backgroundColor: defaultButtonBackgroundColour
        },

        secondaryButton: {
            backgroundColor: undefined
        },

        textHoverAnimation: {
            background: `linear-gradient(135deg, ${defaultMainColour} 25%, ${defaultSecondaryHoverColour}, ${defaultMainColour} 75%)`
        },

        card: {
            // border: `1px solid ${defaultMainColour}`,
        },
    },
};