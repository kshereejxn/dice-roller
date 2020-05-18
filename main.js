let showAllRollsButton = document.querySelector ('#show-all-rolls-button');
let roll = document.querySelector ('#roll');
let numberOfRolls =document.querySelector 
('#number-of-rolls');
let total = document.querySelector ('#total');
let reset = document.querySelector ('#reset');
var dieRolls= [];
let sumOfRolls = 0;

roll.addEventListener("click", function(){
for (index = 0; index < numberOfRolls.value; index +=1){
    let guess = Math.floor(Math.random() *6) +1;
    dieRolls.push(guess);
    sumOfRolls += guess;

}

total.innerHTML = sumOfRolls
console.log ("dice rolled")
})


/*reset.addEventListener("click", function() {
    console.log ("Game reset");

    let numberOfRolls.innerHtml = 0;
    let total.innerHtml = 0;
})*/

/* 1 click "roll" dice
2. have "roll" dice = "number of rolls" * math.random (1-6)
3. let "total" = value from #2
4. let "show all rolls" = total per roll in a table
create array*/

/*{var dice = Math.floor(Math.random() *6) =1;
roll.innerHTML = dice;
total.innerHTML = " +dice+";
}*/

/*let newDiceString = '<li class="dice">' = numberRolled + "</li>"; allRollsElement.innerHTML += newDiceString;*/


