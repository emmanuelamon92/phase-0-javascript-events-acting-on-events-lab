// Your code here
const dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "#FF69B4"; 
dodger.style.bottom = "100px"; 
dodger.style.bottom = "0px";
// dodger.style.left = "0px"; 

let moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
    
let moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 440){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})

// document.addEventListener("keydown", function(event) {
//     console.log(event)
//     if (event.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// });