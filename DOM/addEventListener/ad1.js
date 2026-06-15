// DARK MODE

let darkModeBtn = document.getElementById("dark-mode-btn")

darkModeBtn.addEventListener('click', function(){
 
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "#dad2be";
        
    } else {
        document.body.style.backgroundColor = "black";
    }
});

// SECRET REVEAL

let secretBtn = document.getElementById("submit-btn")
let secretCounter = document.getElementById("secret-counter")

secretBtn.addEventListener('click', function () {
    if (secretCounter.style.display === "none"){

        secretCounter.style.display = "flex"
        document.body.style.height = "130vh"

    }
    else{
          secretCounter.style.display = "none"
        document.body.style.height = "100vh"
    }
    
})

// COUNTER

let counter = document.getElementById("counter")
let snapOutput = document.getElementById("snap-output")


let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")

let snapshot = document.getElementById("snapshot")
let clear = document.getElementById("clear")

let count = 0

increment.addEventListener('click', function () {
    count++
    counter.innerHTML = count
})

decrement.addEventListener('click', function () {
    count--
    counter.innerHTML = count
})

snapshot.addEventListener('click', function () {
   

    snapOutput.innerHTML += counter.innerHTML + " - "
    
    count = 0
    counter.innerHTML = 0
    clear.style.display = "flex"
})

function clearr(){

     snapOutput.innerHTML = 0
}