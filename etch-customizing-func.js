/**
 * 
 * @param {mouseover} e
 * Generate random colors 
 */
function changeColorRainbow(e){
    let squareId = e.target.id;
    let square = document.getElementById(squareId);
    square.style.cssText = `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()});`;
}