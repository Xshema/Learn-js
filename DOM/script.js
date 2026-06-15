let count = 0

const title = document.getElementById("title")

const increment = document.getElementById("increment")

const decrement = document.getElementById("decrement")

function update(){
    title.textContent = count
}


increment.addEventListener('click', ()=>{
    count++
     update()
})


decrement.addEventListener('click', ()=>{
    count--
    update()
})






