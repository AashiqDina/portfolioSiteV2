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

    textHoverAnimation: {
        background: string;
    }
}

export type headerTab = {
    title: string,
    link: string,
}