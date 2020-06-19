generateGrid(16);
document.getElementsByTagName("button")[0].addEventListener("click", event => promptUser(event));

function generateGrid(side_length){
    document.documentElement.style.setProperty("--square-side-length", side_length);
    let container = document.getElementsByClassName("container")[0];
    container.innerHTML=""; //clear any existing square/pixels
    let total_squares = side_length**2;
    for(let i = 0; i< total_squares ; i++) {
        let square = document.createElement("div")
        square.classList.add("item"/*, `item${i+1}`*/);
        container.appendChild(square);
    }
    attachPixelListeners();
}

function changeBackgroundColor(event){
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = "transparent";
    }
}

function attachPixelListeners() {
    let container = document.getElementsByClassName("container")[0];
    container.addEventListener("mouseover", event => changeBackgroundColor(event))
}

function promptUser(){
    let new_length = prompt("Please enter the side length for the new square:", "Enter number here");
    generateGrid(new_length);
    attachPixelListeners(new_length);
}
