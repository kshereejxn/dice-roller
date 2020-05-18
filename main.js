let showAllRolls = document.querySelector ('#show-all-rolls');
let roll = document.querySelector ('#roll');
let numberOfRolls =document.querySelector 
('#number-of-rolls');
let total = document.querySelector ('#total');
let reset = document.querySelector ('#reset');
var dieRolls= [];
let sumOfRolls = 0;
let table = document.querySelector ('#table');

roll.addEventListener("click", function(){
for (index = 0; index < numberOfRolls.value; index +=1){
    let guess = Math.floor(Math.random() *6) +1;
    dieRolls.push(guess);
    sumOfRolls += guess;
}

total.innerHTML = sumOfRolls
console.log ("dice rolled")
})

showAllRolls.addEventListener("click", function(){
for (index =0; index < dieRolls.length; index += 1){
    let newList = document.createElement ("li");
    newList.innerHTML = dieRolls[index]
    table.appendChild(newList)
}
})



/*reset.addEventListener("click", function() {
    let newResetValue = (reset.innerHTML);
    reset.innerHTML = newResetValue;

    if (newResetValue = 1) {
        numberOfRolls.value = 0;
        total.innerHTML = 0; 
        showAllRolls.innerHTML = 0;
        
        console.log ("Game reset");
    }
    else {

    }

  

})*/


