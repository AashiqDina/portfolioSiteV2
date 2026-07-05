export type theme = {
    background: {
        background: string;
    };

    icons: {
        backgroundColor: string;
    };

    svgIcons: {
        fill: string
    }

    primaryText: {
        color: string;
        fontFamily: string;
        margin: number;
        padding: number;
    };

    primaryButton: {
        color: string,
        fontFamily: string,
        borderColor: string,
        backgroundColor: string,
    }

    secondaryButton: {
        backgroundColor: undefined
    },

    textHoverAnimation: {
        background: string;
    }

    card: {
        // border: string
    }
}

// --------- Header --------- 

export type headerTab = {
    title: string,
    link: string,
}

// --------- Home --------- 

export type homePageData = {
    title: string,
    description: string,
    borderHoverColour: string
}