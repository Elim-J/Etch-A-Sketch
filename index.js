/*
    Create a webpage with a 16x16 grid of square divs
        [I want the user to be able to choose the size of etch-n-sketch]
            Could add an input box for this

 */     
    function changeColor(e){
        console.log(e);
        let squareId = e.target.id;
        let square = document.getElementById(squareId);
        square.style.cssText = "background-color: red;";
    }

    /*
    Return number 0-255
    */
    function getRandomNumber(){
        return Math.floor((Math.random() * 256));
    }

    const root = document.querySelector("#root");

    //Create a container with a class name
    const container = document.createElement("div");
    container.classList.add("container");
    //container.addEventListener("mouseover", changeColor);
    
    let numOfRows = 16  //start with hardcoded number for now
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
/*
        Figure out how to change color of divs permanently on hover
            Get the container's children (all of them), add
            an event listener to them (hover event) and then add a function
            which I write at the top which changes their background color

            updated: try to make it change to different colors
            final update: try to make it 10% of black so that after
                10 passes it is completely black.
    */

    

    



