export function applyTilt(element: HTMLElement, clientX: number, clientY: number, rotationMultiplier: number, perspective: number){
    const articleSpecs = element.getBoundingClientRect();

    const xDistanceInArticle = clientX - articleSpecs.left;
    const yDistanceInArticle = clientY - articleSpecs.top;
    const projCardCenterX = articleSpecs.width / 2;
    const projCardCenterY = articleSpecs.height / 2;

    const RotateX =
        ((yDistanceInArticle - projCardCenterY) / projCardCenterY) * 1 * rotationMultiplier;

    const RotateY =
        ((xDistanceInArticle - projCardCenterX) / projCardCenterX) * 1 * rotationMultiplier;

    element.style.transform = `
        perspective(${perspective}rem)
        rotateX(${-RotateX}deg)
        rotateY(${RotateY}deg)
    `;
}