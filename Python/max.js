//Always assuming that we will have some number inside the array
//Helper Recursion

//Time: O(n)
//Space: O(n)

const max = (array) => {
    let maxNumber = 0
    const recursion = (arr, index) => {
        if (index === array.length) {
            return
        }
        if (array[index] > maxNumber){
            maxNumber = array[index]
        }
        recursion(arr, index+1)
    }

    recursion(array, 0)
    return maxNumber
}

const array1 = [1,2,3,4,5,6,7,8,9]
const array2 = [10,8,7,5,1,4,5,3,2]
console.log(max(array1))
console.log(max(array2))

// Pure Recursion
const pureMax = (array, index=0, maxOutput=0) => {
    if (index === array.length) {
        return maxOutput
    }
    if (array[index] > maxOutput){
        maxOutput = array[index]
    }
    return pureMax(array, index+1, maxOutput)
}


console.log(pureMax(array1))
console.log(pureMax(array2))

//Sorting will drop the space to constante but increase the Time
// Time O(nLogn)
// Space O(1)
const sortMax = (maxArray) => {
    maxArray.sort((a,b) => b-a)
    return maxArray[0]
}

console.log(sortMax(array1))
console.log(sortMax(array2))