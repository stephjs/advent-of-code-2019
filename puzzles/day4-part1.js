function checkPassword(num) {
    let repeatingNumber = false;
    const numStr = num.toString().split('')
    if (numStr.length !== 6) {
        return false
    }
    let previous = '0'
    for (let current of numStr) {
        repeatingNumber = previous === current ? true : repeatingNumber
        if (current < previous) {
            return false
        }
        previous = current
    }
    return repeatingNumber
}

function countValidPwInRange(range) {
    const [low, high] = range.split('-')
    let counter = 0
    for (let i = low; i < high; i++) {
        counter = checkPassword(i) ? counter + 1 : counter
    }
    return counter
}

console.log(countValidPwInRange('245182-790572'))