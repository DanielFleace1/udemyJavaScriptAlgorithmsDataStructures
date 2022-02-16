// Write a function which accepts array of numbers an returns product of each number

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


function productOfArray(arr){
    if(!Array.isArray(arr)) return 'variable must be array' 
    if (arr.length === 0) return 1 
    return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10]))
