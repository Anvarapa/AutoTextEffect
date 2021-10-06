const textEl = document.querySelector('#text')
const speedEl = document.querySelector('#speed')
let text = 'Anvar Turdaliev'
let idx = 1
let incr = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx = 1
    }
    setTimeout(writeText, incr)
}

speedEl.addEventListener('input', (e)=>{
    incr = 300 / e.target.value
})