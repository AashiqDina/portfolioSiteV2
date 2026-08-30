/* 
The theme is one pre-defined stylesheet for relevant components
- but the themes come from the colours itself, as the only thing
reallu changing in the themes will be the colours. This is defined 
in themeColourScheme.ts 

This file essentially creates the CSSProperties using those colours
to be used through out the site

Little Note: May be a little messy but decided to keep the type in this file
(at least for now, while developing) as its a pain switching files 
when creating a new component theme 
*/

import { CSSProperties } from "react";
import { addAlpha, BLACK } from "./colours";
import { ThemeColourScheme } from "./themeColourScheme";
import { createTypography } from "./typography";

export type Theme = {
  background: CSSProperties;
  stars: CSSProperties;
  moon: CSSProperties;
  text: CSSProperties;
  headerModal: CSSProperties;
  headerNavButtons: CSSProperties;
  icons: CSSProperties;
  svgIcons: CSSProperties;
  primaryButton: CSSProperties;
  secondaryButton: CSSProperties;
  textHoverAnimation: CSSProperties;
  card: CSSProperties;
  pill: CSSProperties;

  HeaderHoverColor1: {
    colour: string;
  };
  HeaderHoverColor2: {
    colour: string;
  };
  HeaderHoverColor3: {
    colour: string;
  };
  HeaderHoverColor4: {
    colour: string;
  };
  HeaderHoverColor5: {
    colour: string;
  };
  HeaderHoverColor6: {
    colour: string;
  };
  HeaderHoverColor7: {
    colour: string;
  };
};

export function createTheme(currentTheme: ThemeColourScheme): Theme {
  return {
    background: {
      background: `linear-gradient(
                180deg,
                ${currentTheme.BackgroundFirstColour},
                ${currentTheme.BackgroundSecondColour}
            )`,
    },

    stars: {
      backgroundColor: currentTheme.StarsColour,
      boxShadow: `0 0 2px 1px ${addAlpha(currentTheme.StarsColour, 50)}`,
    },

    moon: {
      background: `linear-gradient(
                135deg,
                ${currentTheme.BackgroundFirstColour},
                ${currentTheme.BackgroundSecondColour}
            )`,
      boxShadow: `0 0 250px 1px ${addAlpha(currentTheme.MainColour, 33)}`,
    },

    ...createTypography(currentTheme),

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
      fill: currentTheme.MainColour,
    },

    primaryButton: {
      color: currentTheme.MainColour,
      fontFamily: "Sansation, sans-serif",
      borderColor: currentTheme.MainColour,
      backgroundColor: currentTheme.ButtonBackgroundColour,
    },

    secondaryButton: {
      backgroundColor: undefined,
    },

    textHoverAnimation: {
      background: `linear-gradient(
                135deg,
                ${currentTheme.MainColour} 25%,
                ${currentTheme.SecondaryHoverColour},
                ${currentTheme.MainColour} 75%
            )`,
    },

    card: {
      backgroundColor: addAlpha(BLACK, 50),
    },

    pill: {
      borderWidth: "1px",
      borderColor: currentTheme.MainColour,
      borderStyle: "solid",
      borderRadius: "10rem",
      padding: "0.5rem 1rem",
    },

    HeaderHoverColor1: {
      colour: currentTheme.HeaderHoverColor1,
    },
    HeaderHoverColor2: {
      colour: currentTheme.HeaderHoverColor2,
    },
    HeaderHoverColor3: {
      colour: currentTheme.HeaderHoverColor3,
    },
    HeaderHoverColor4: {
      colour: currentTheme.HeaderHoverColor4,
    },
    HeaderHoverColor5: {
      colour: currentTheme.HeaderHoverColor5,
    },
    HeaderHoverColor6: {
      colour: currentTheme.HeaderHoverColor6,
    },
    HeaderHoverColor7: {
      colour: currentTheme.HeaderHoverColor7,
    },
  };
}
