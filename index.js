/*
    Create a webpage with a 16x16 grid of square divs
        [I want the user to be able to choose the size of etch-n-sketch]
            Could add an input box for this

 */   
    const squareColor = setSquareColor();
    /*
        Return number 0-255
    */
    function getRandomNumber(){
        return Math.floor((Math.random() * 256));
    }

    // Generate one random color for all squares
        //return string
    function setSquareColor(){
         return `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    }

    function assignInitialColor(e){
        let squareId = e.target.id;
        let square = document.getElementById(squareId);
        square.style.cssText = squareColor;
        square.removeEventListener("mouseover", assignInitialColor);
        square.addEventListener("mouseover", decreaseBrightness);
    }

    /*
        Note about brightness: Red-Green-Blue: the higher the number, the brighter it becomes
            rbg(0, 10, 0) --> black with some green in it
            I could use this fact to decrease brightness by decreasing rgb values
            */
    function decreaseBrightness(e){
        //numRegex matches all numbers and spaces
            let squareId = e.target.id;
            let square = document.getElementById(squareId);
            let numRegex = /\d+|s/g;
            let numbers = square.style.cssText.match(numRegex);
            let num1 = numbers[0] - 25;
            let num2 = numbers[1] - 25;
            let num3 = numbers[2] - 25;
            square.style.cssText = `background-color: rgb(${num1}, ${num2}, ${num3})`
    }

    const root = document.querySelector("#root");

    //Create a container with a class name
    const container = document.createElement("div");
    container.classList.add("container");
    
    let numOfRows = 16  //start with hardcoded number for now
    let numSquares = numOfRows * numOfRows; 

    //create squares
    for(let i = 0; i < numSquares; i++){
        //give divs a class name [so you can style them in css]
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener("mouseover", assignInitialColor, {once: true});
        
        //append the divs to the container
        container.appendChild(square);
    }

    //Append the container to root
    root.appendChild(container);

    

    



