function checkPassword(num) {
    let singleAdjacentMatchExists = false;
    const numStr = num.toString().split('')
    if (numStr.length !== 6) {
        return false
    }
    let previous = '0'
    for (let i = 0; i < numStr.length; i++) {
        const current = numStr[i]
        const next = numStr[i + 1] ? numStr[i + 1] : null
        const prior = i > 1 ? numStr[i - 2] : null
        if (previous === current) {
            let extraMatch = false
            if (prior) {
                extraMatch = prior === current ? true : extraMatch
            }
            if (next) {
                extraMatch = next === current ? true : extraMatch
            }
            singleAdjacentMatchExists = !extraMatch ? true : singleAdjacentMatchExists
        }
        if (current < previous) {
            return false
        }
        previous = current
    }
    return singleAdjacentMatchExists
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