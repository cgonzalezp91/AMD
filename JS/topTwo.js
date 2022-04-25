//Time: O(nlogn) because we are sorting, but after the sort everything else is minimal like the slice and the map from the end array
//Space: O(1) we sort the array in place

const productRankings = [
    {name:"AMD_Product-A", rank:1},
    {name:"AMD_Product-B", rank:10},
    {name:"AMD_Product-C", rank:2},
    {name:"AMD_Product-X", rank:4}
]

const topTwo = (json) => {
    let returnObj = {top2: []}
    json = sortByRank(json)
    returnObj.top2 = (json.map(value => value.name))
    return returnObj
}
//Sorting by rank and returning the first two (this can be more dynamic if we pass the prop and the number of returning elements)
//Like sortByRank(arr, prop, n)
const sortByRank = (arr) => {
    arr.sort((a,b) => {
        if(a.rank === b.rank) return 0
        else if (parseInt(a.rank) > parseInt(b.rank)) return 1
        else return -1
    })
    return arr.slice(0,2)
}

console.log(topTwo(productRankings))