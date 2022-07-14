
/**
 * Etch-N-Sketch
 * Sabrina K.
 * 
 * Project Description:
 *      40x40 grid that users can draw on
 *      Initializes single color for all squares and decreases brightness on each mouseover
 *      
 * Additional Comments:
 *      etch-customizing-func.js contains functionality for random colors
 *      May create functionality for user to change color in future design
 */
   
    /**
     * 
     * @returns number 0-255 for rgb
     */
    function getRandomNumber(){
        return Math.floor((Math.random() * 256));
    }

    /**
     * 
     * @returns string style property
     */
    function generateColor(){
         return `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    /**
     * 
     * @param {mouseover} e 
     */
    function setSquareColor(e){
        let squareId = e.target.id;
        let square = document.getElementById(squareId);
        square.style.cssText = squareColor;

        square.removeEventListener("mouseover", setSquareColor);
        square.addEventListener("mouseover", decreaseBrightness);
    }

    /**
     * 
     * @param {mouseover} e 
     */
    function decreaseBrightness(e){
            let squareId = e.target.id;
            let square = document.getElementById(squareId);

            let numRegex = /\d+|s/g;    //match all numbers and spaces
            let num = square.style.cssText.match(numRegex);     //store rgb values in num
            square.style.cssText = `background-color: rgb(${num[0] - 25}, ${num[1] - 25}, ${num[2] - 25})`;
    }

    const squareColor = generateColor();
    const root = document.querySelector("#root");

    //Container holds all squares
    const container = document.createElement("div");
    container.classList.add("container");
    
    let numOfRows = 40;
    let numSquares = numOfRows * numOfRows; 

    /**
     * 
     * Create Squares, Append to container
     */
    for(let i = 0; i < numSquares; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener("mouseover", setSquareColor, {once: true});
        container.appendChild(square);
    }

    //Finally, append container with all squares to root
    root.appendChild(container);

    

    



