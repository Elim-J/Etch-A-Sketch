/*
    Create a webpage with a 16x16 grid of square divs
        [I want the user to be able to choose the size of etch-n-sketch]
            Could add an input box for this

 */     

    const root = document.querySelector("#root");

    //Create a container with a class name
    const container = document.createElement("div");
    container.classList.add("container");
    
    let numOfRows = 16  //start with hardcoded number for now
    let numSquares = numOfRows * numOfRows; 

    for(let i = 0; i < numSquares; i++){
        //give divs a class name [so you can style them in css]
        let square = document.createElement("div");
        square.classList.add("square");
        //append the divs to the container
        container.appendChild(square);
    }
        
    //Append the container to root
    root.appendChild(container);



