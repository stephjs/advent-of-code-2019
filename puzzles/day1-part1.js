function calcFuel(massArr) {
    return massArr.reduce((acc, curr) => {
        return acc + (Math.floor(curr / 3) - 2)
    }, 0)
}

const { simpleListToArray, spacedLog } = require('../helper')
const fs = require('fs');
const myInput = fs.readFileSync('../inputs/day-1', 'utf8')
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

spacedLog('The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.')
spacedLog(`My puzzle answer was ${calcFuel(simpleListToArray(myInput))}!`)
readline.question(`What are your fuel values (ex: 12 7 5687 9 70)?`, (values) => {
    const customFuel = calcFuel(simpleListToArray(values))
    spacedLog(`The sum of the fuel requirements for your custom spacecraft is ${customFuel}!`)
    readline.close()
})