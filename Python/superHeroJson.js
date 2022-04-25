//Dynamic Programming
//Time:O(n) we have two loops, one for the json and other for the map, wworst case is that the map is same length as json this will make O(2n) and the 2 is a constant so we drop it
//Space:O(n) worst case is that the map is the same length as n
//Sorry not sure how to do this in python right now.
const transformJSON = (json) => {
    const returnObj = {superherosbyCity:[]}
    const map1 = new Map()
    json.forEach(heroObj => {
        if(!map1.has(heroObj.city)) map1.set(heroObj.city, [heroObj.name])
        else {
         const temp= map1.get(heroObj.city)
         temp.push(heroObj.name)
         map1.set(heroObj.city, temp)
        }
    })
    console.log(map1)
    for (const [key, value] of map1){
        console.log(key)
        returnObj.superherosbyCity.push({[key]:value})
    }
    
    return returnObj
}


const jsonHero = [
    {name:'batman', id:1, city:'gotham'},
    {name:'spiderman', id:2, city:'NYC'},
    {name:'superman', id:2, city:'NYC'}
]
console.log(transformJSON(jsonHero))