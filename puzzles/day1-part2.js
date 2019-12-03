function calcFuel(mass) {
    return Math.floor(mass / 3) - 2
}

function calcRecursiveFuel(massArr) {
    let totalFuel = 0
    for (let mass of massArr) {
        let fuel = mass
        while (fuel > 0) {
            fuel = calcFuel(fuel)
            totalFuel += fuel > 0 ? fuel : 0
        }
    }
    return totalFuel
}

const { simpleListToArray, spacedLog } = require('../helper')
const fs = require('fs');
const myInput = fs.readFileSync('../inputs/day-1', 'utf8')
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

spacedLog('The Fuel Counter-Upper needs to know the total fuel requirement. Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.')
spacedLog(`My puzzle answer was ${calcRecursiveFuel(simpleListToArray(myInput))}!`)
readline.question(`What are your fuel values (ex: 12 7 5687 9 70)?`, (values) => {
    const customFuel = calcRecursiveFuel(simpleListToArray(values))
    spacedLog(`The sum of the fuel requirements for your custom spacecraft is ${customFuel}!`)
    readline.close()
})