/* 
    Defines all the colours and themes - essentially
    where all the customisation (Colour-related) is
*/

import * as colours from "./colours";

export type ThemeName = "default" | "light" | "dark";

export type ThemeColourScheme = {
  MainColour: string;
  SecondaryHoverColour: string;
  ButtonBackgroundColour: string;
  BackgroundFirstColour: string;
  BackgroundSecondColour: string;
  StarsColour: string;
  CardBackground: string;

  HeaderHoverColor1: string;
  HeaderHoverColor2: string;
  HeaderHoverColor3: string;
  HeaderHoverColor4: string;
  HeaderHoverColor5: string;
  HeaderHoverColor6: string;
  HeaderHoverColor7: string;
};

export const defaultTheme: ThemeColourScheme = {
  MainColour: colours.WHITE,
  SecondaryHoverColour: colours.addAlpha(colours.MUTED_BLUE, 50),
  ButtonBackgroundColour: colours.addAlpha(colours.BLACK, 50),
  BackgroundFirstColour: colours.DEFAULT_TOP,
  BackgroundSecondColour: colours.DEFAULT_BOTTOM,
  StarsColour: colours.WHITE,
  CardBackground: colours.BLACK,

  HeaderHoverColor1: colours.HOVER_PUPRLE_VARIANT_1,
  HeaderHoverColor2: colours.HOVER_PUPRLE_VARIANT_2,
  HeaderHoverColor3: colours.HOVER_PUPRLE_VARIANT_3,
  HeaderHoverColor4: colours.HOVER_PUPRLE_VARIANT_4,
  HeaderHoverColor5: colours.HOVER_PUPRLE_VARIANT_5,
  HeaderHoverColor6: colours.HOVER_PUPRLE_VARIANT_6,
  HeaderHoverColor7: colours.HOVER_PUPRLE_VARIANT_7,
};

export const themeColourSchemes: Record<ThemeName, ThemeColourScheme> = {
  default: defaultTheme,
  light: defaultTheme,
  dark: defaultTheme,
  // ... whatever else I want to add
};
