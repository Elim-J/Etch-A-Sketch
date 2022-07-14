/*
    Create a webpage with a 16x16 grid of square divs
        [I want the user to be able to choose the size of etch-n-sketch]
            Could add an input box for this

 */   

    /*
        Return number 0-255
    */
    function getRandomNumber(){
        return Math.floor((Math.random() * 256));
    }

    function changeColor(e){
        console.log(e);
        let squareId = e.target.id;
        let square = document.getElementById(squareId);
        square.style.cssText = `background-color: red;`;

        //Note to self: Needed +=, otherwise background-color:red 
            //will just be overwritten by brightness
            //Question: How to dynamically change brightness? 
                //and subtract brightness by 10%?
        square.style.cssText += `filter: brightness(50%);`;
    }

    function changeColorRainbow(e){
        console.log(e);
        let squareId = e.target.id;
        let square = document.getElementById(squareId);
        square.style.cssText = `background-color: rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()});`;
    }

   

    const root = document.querySelector("#root");

    //Create a container with a class name
    const container = document.createElement("div");
    container.classList.add("container");
    //container.addEventListener("mouseover", changeColor);
    
    let numOfRows = 2  //start with hardcoded number for now
    let numSquares = numOfRows * numOfRows; 

    for(let i = 0; i < numSquares; i++){
        //give divs a class name [so you can style them in css]
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener("mouseover", changeColor);
        //append the divs to the container
        container.appendChild(square);
    }

    //Append the container to root
    root.appendChild(container);

    

    



