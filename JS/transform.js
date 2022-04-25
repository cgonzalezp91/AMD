//Time O(n+m)
//Space O(n+m) still have doubt about this mainly because we have a call stack when we traverse with the recursion and we have the return array

const d1 = [1,2,3]
const d2 = [4,5,6]
const d3 = [7,8,9,11,12,13,15]
const data = [d1,d2,d3]
const transform = (data) => {
    const maxR = data.length - 1
    let resultArray = []
    let tempArray = []
    let maxLength = 0
    for (let i = 0; i < data.length; i++){
        maxLength = maxLength > data[i].length ? maxLength : data[i].length
    }
    const traverse = (row, col) => {
        if (col > maxLength - 1) {
            return null
        }
        tempArray.push(data[row][col])
        if(row === maxR){
            resultArray.push([...tempArray])
            tempArray = []
            traverse(0,col+1)
        } else {
            traverse(row+1,col)
        }
    }
    traverse(0,0)
    console.log(resultArray)
}

console.log(transform(data))