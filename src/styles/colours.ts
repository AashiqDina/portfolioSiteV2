
export function addAlpha(colour: string, alpha: number): string{
    if(alpha >= 100 || alpha < 0) return colour
    return `${colour}${alpha}` 
}

// Backgrounds
export const DEFAULT_TOP = "#04080c"
export const DEFAULT_BOTTOM = "#050523"

// Basic Colours
export const WHITE = "#ffffff"
export const BLACK = "#000000"

// Blue Colouts
export const MUTED_BLUE = "#5973a6"

// Purple Colours
export const HOVER_PUPRLE_VARIANT_1 = "#6a00ac"
export const HOVER_PUPRLE_VARIANT_2 = "#5500ff"
export const HOVER_PUPRLE_VARIANT_3 = "#6f00ff"
export const HOVER_PUPRLE_VARIANT_4 = "#9000ff"
export const HOVER_PUPRLE_VARIANT_5 = "#4c00c5"
export const HOVER_PUPRLE_VARIANT_6 = "#5500ff"
