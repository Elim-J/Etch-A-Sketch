
/**
 * Etch-N-Sketch
 * Sabrina K.
 * 
 * Project Description:
 *      40x40 grid that users can draw on
 *      Initializes single color for all squares and decreases brightness on each mouseover
 *      
 * Additional Comments:
 *      etch-customizing-func.js contains unused additional functionality 
 *      If const squareColor = generateColor(); is local variable within function setSquareColor(e)
 *          each square will have a different color, otherwise the same color    
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
     * @returns CSS template string of random background-color
     */
    function generateColor(){
         return `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    /**
     * 
     * @param {mouseover} e
     * 
     * setSquareColor is used once to set initial color
     * decreaseBrightness is new eventlistener for each square with initial color 
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
     * Reduce brightness of color by 10% on each mouseover
     */
    function decreaseBrightness(e){
            let squareId = e.target.id;
            let square = document.getElementById(squareId);

            let numRegex = /\d+|s/g;    //Match all numbers and spaces
            let num = square.style.cssText.match(numRegex);     //Store array of rgb numbers in num
            square.style.cssText = `background-color: rgb(${num[0] - 25}, ${num[1] - 25}, ${num[2] - 25})`;
    }
    
    const root = document.querySelector("#root");

    const squareColor = generateColor();    //Global variable allows for same color squares
    

    //Container holds all squares
    const container = document.createElement("div");
    container.classList.add("container");
    
    /**
     * 
     * Create Squares, Append to container
     */

    let numOfRows = 40;
    let numSquares = numOfRows * numOfRows;

    for(let i = 0; i < numSquares; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener("mouseover", setSquareColor, {once: true});
        
        container.appendChild(square);
    }

    //Finally, append container with all squares to root
    root.appendChild(container);