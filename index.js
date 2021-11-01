let harrysHealth = "100"

let winnerIs = "Voldemort is the winner";
let newWinner = winnerIs.replace("Voldemort", "Harry")

// console.log(newWinner)

if(newWinner.includes("Harry")){
    // console.log("replaced successfully")
}
else if (newWinner.includes("Voldemort")){
    // console.log("Voldemort still exists")
}

let newWinnerSplit = newWinner.split(" ")
// console.log(newWinnerSplit)
//convert to kebob-case
let winnerKebobCase = newWinnerSplit.join("-")
// console.log(winnerKebobCase)

function isHarryAlive(){
    if (harrysHealth > 0){
        console.log("Harry is alive")
    } else {
        console.log("RIP Harry Potter")
    }
}

function surpriseAttack(attack){
harrysHealth -= attack
isHarryAlive()
}

// surpriseAttack(40)
// surpriseAttack(30)
// surpriseAttack(40)
// isHarryAlive()

function greeting (person1, person2){
    console.log(`${person1} and ${person2} say hello to each other`)

}
// greeting("Quy", "Kelsey")
// greeting("Bry", "Robert")
// greeting("Stephen", "Caitlin")

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    let randomNumber = Math.floor(Math.random() * (possibleRolls.length + 1))
    return randomNumber
}

// let firstRoll = rollDice()
// let secondRoll = rollDice()
// console.log(firstRoll)
// console.log(secondRoll)

function diceMultiplier(){
let firstRoll = rollDice()
let secondRoll = rollDice()
console.log("firstRoll: ",firstRoll)
console.log("secondRoll: ", secondRoll)

return firstRoll * secondRoll
}
let multipliedRoll = diceMultiplier()
console.log(mutipliedRoll)

