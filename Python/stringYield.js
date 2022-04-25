//Time O(logn) because we iterate from beginning and end at the same time we cut in half the iteration
//Space O(n) because of the result array
const stringYield = (str) => {
    const resultArray = []
    let i = 0, j = str.length - 1
    while (i <= j) {
        if (i === j )  resultArray.push(`(${str[i]},)`)
        else resultArray.push(`(${str[i]},${str[j]})`)
        i++
        j--
    }
    return resultArray
}

console.log(stringYield('123R456'))