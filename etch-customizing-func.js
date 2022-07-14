function changeColorRainbow(e){
    console.log(e);
    let squareId = e.target.id;
    let square = document.getElementById(squareId);
    square.style.cssText = `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()});`;
}