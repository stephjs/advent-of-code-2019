function getBreakingListValue(intList) {
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

function findNounVerbPair(intList, target) {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            const copyList = [...intList];
            copyList[1] = noun;
            copyList[2] = verb;
            const val = getBreakingListValue(copyList)
            if (val === target) {
                return 100 * noun + verb
            }
        }
    }
}

const { commaListToArray, spacedLog } = require('../helper')
const fs = require('fs');
const myInput = fs.readFileSync('../inputs/day-2', 'utf8')
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })

spacedLog(`Find the input noun and verb that cause the program to produce the output 19690720.`)
spacedLog(`My puzzle answer was ${findNounVerbPair(commaListToArray(myInput), 19690720)}!`)
readline.question(`What is your initial state? (ex: 1,9,10,3,2,3,11,0,1,9,10,0,99,30,40,50)?`, (values) => {
    const customValues = findNounVerbPair(commaListToArray(values))
    spacedLog(`100 * your secret noun + your secret verb is ${customValues}!`)
    readline.close()
})