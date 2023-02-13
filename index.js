let count = 0
let ResultEl = document.getElementById("result-el")
function add1(){
    count += 1
    ResultEl.textContent = count
}
function add2(){
    count += 2
    ResultEl.textContent = count
}
function add3(){
    count += 3
    ResultEl.textContent = count
}
let countg = 0
let ResultElG = document.getElementById("guest-result-el")
function add1g(){
    countg += 1
    ResultElG.textContent = countg
}
function add2g(){
    countg += 2
    ResultElG.textContent = countg
}
function add3g(){
    countg += 3 
    ResultElG.textContent = countg
}
function resetgame(){
    count = 0
    countg= 0
    ResultEl.textContent = count
    ResultElG.textContent = countg
}