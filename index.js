/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const inputEl = document.getElementById("input-num")

btnEl.addEventListener("click", function(){
    
    let inputValue = inputEl.value    
    buttonReactor(inputValue)
    inputEl.value = 0
}) 

function buttonReactor(num){
    const lengthDifferentiator = 3.281
    const volumeDifferentiator = 3.785
    const massDifferentiator = 2.204
        
    converter(num, lengthDifferentiator, "length", "meters", "feet")
    
    converter(num, volumeDifferentiator, "volume", "liters", "gallons")
    
    converter(num, massDifferentiator, "mass", "kilo", "pounds")
}
    
function converter(num, numDiff, strDiff, valueStr1, valueStr2){
    
    
    const differentiator = numDiff
    let val1 = valueStr1 
    let val2 = valueStr2
    
    val1 = (num * differentiator).toFixed(2) 
    val2 = (num / differentiator).toFixed(2) 
    
    if (strDiff === "length") {
        lengthEl.innerHTML = `${num} ${valueStr1} = ${val1} ${valueStr2} | ${num} ${valueStr2} = ${val2} ${valueStr1}`    
    } else if (strDiff === "volume") { 
        volumeEl.innerHTML = `${num} ${valueStr1} = ${val1} ${valueStr2} | ${num} ${valueStr2} = ${val2} ${valueStr1}` 
    } else if (strDiff === "mass") {
        massEl.innerHTML = `${num} ${valueStr1} = ${val1} ${valueStr2} | ${num} ${valueStr2} = ${val2} ${valueStr1}`
    }
}

