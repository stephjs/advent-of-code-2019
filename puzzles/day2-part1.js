function restoreGravity(intList) {
    intList[1] = 12
    intList[2] = 2
    return intList
}

function getBreakingListValue(intList) {
    intList = restoreGravity(intList)
    outerLoop:
    for (let i = 0; i < intList.length; i += 4) {
        switch (intList[i]) {
            case 1:
                intList[intList[i + 3]] = intList[intList[i + 1]] + intList[intList[i + 2]]
                break;
            case 2:
                intList[intList[i + 3]] = intList[intList[i + 1]] * intList[intList[i + 2]]
                break;
            default:
                break outerLoop;
        }
    }
    return intList[0]
}

const { commaListToArray, spacedLog } = require('../helper')
const fs = require('fs');
const myInput = fs.readFileSync('../inputs/day-2', 'utf8')
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

spacedLog(`On the way to your gravity assist around the Moon, your ship computer beeps angrily about a "1202 program alarm". On the radio, an Elf is already explaining how to handle the situation: "Don't worry, that's perfectly norma--" The ship computer bursts into flames.`)
spacedLog(`My puzzle answer was ${getBreakingListValue(commaListToArray(myInput))}!`)
readline.question(`What is your initial state? (ex: 1,9,10,3,2,3,11,0,1,9,10,0,99,30,40,50)?`, (values) => {
    const customValues = getBreakingListValue(commaListToArray(values))
    spacedLog(`Position 0 of your computer when it breaks is ${customValues}!`)
    readline.close()
})