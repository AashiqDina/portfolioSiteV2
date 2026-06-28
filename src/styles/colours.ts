
export function addAlpha(colour: string, alpha: number): string{
    if(alpha >= 100 || alpha < 0) return colour
    return `${colour}${alpha}` 
}

// Basic Colours
export const WHITE = "#ffffff"
export const BLACK = "#000000"


// Blue Colouts
export const MUTED_BLUE = "#5973a6"
