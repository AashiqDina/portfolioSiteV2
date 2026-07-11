import { WHITE, addAlpha, MUTED_BLUE, BLACK, DEFAULT_BOTTOM, DEFAULT_TOP, HOVER_PUPRLE_VARIANT_1, HOVER_PUPRLE_VARIANT_2, HOVER_PUPRLE_VARIANT_3, HOVER_PUPRLE_VARIANT_4, HOVER_PUPRLE_VARIANT_5, HOVER_PUPRLE_VARIANT_6 } from "./colours";

export const defaultTheme = {
    MainColour: WHITE,
    SecondaryHoverColour: addAlpha(MUTED_BLUE, 50) ,
    ButtonBackgroundColour: addAlpha(BLACK, 50),
    BackgroundFirstColour: DEFAULT_TOP,
    BackgroundSecondColour: DEFAULT_BOTTOM,
    StarsColour: WHITE,
    
    HeaderHoverColor1: HOVER_PUPRLE_VARIANT_1,
    HeaderHoverColor2: HOVER_PUPRLE_VARIANT_2,
    HeaderHoverColor3: HOVER_PUPRLE_VARIANT_3,
    HeaderHoverColor4: HOVER_PUPRLE_VARIANT_4,
    HeaderHoverColor5: HOVER_PUPRLE_VARIANT_5,
    HeaderHoverColor6: HOVER_PUPRLE_VARIANT_6,
}