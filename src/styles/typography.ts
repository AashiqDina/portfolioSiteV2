import { addAlpha } from "./colours";
import { defaultTheme } from "./defaultThemeColourScheme";

const theme = defaultTheme

const text = {
    color: theme.MainColour,
    fontFamily: "Sansation, sans-serif",
    margin: 0,
    padding: 0,
}

export const typography = {

    text,

    header1: {
        ...text,
        fontSize: "9rem"
    },

    header2: {
        ...text,
        fontSize: "7rem"
    },

    header3: {
        ...text,
        fontSize: "5rem"
    },

    header4: {
        ...text,
        fontSize: "3rem"
    },

    header5: {
        ...text,
        fontSize: "2rem"
    },

    paragraph1: {
        ...text,
        fontSize: "3rem",
        fontweight: 200
    },

    paragraph2: {
        ...text
    },

    paragraph3: {
        ...text
    },

    paragraph4: {
        ...text
    },

    paragraph5: {
        ...text
    },

}