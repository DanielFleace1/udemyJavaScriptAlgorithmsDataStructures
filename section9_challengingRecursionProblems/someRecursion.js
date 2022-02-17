// write a recursive func that accepts an array & a function and returns true if a single value in the array returns true in the funciton 

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// iterative approach
const isOdd = val => val % 2 !== 0;

function someRecursive(ary, func){
    for(let i = 0; i <ary.length;i++){
        if(func(ary[i])){
            return true  
        } 
    }
    return false
  }
console.log(someRecursive([1,2,3,4], isOdd),someRecursive([4,6,8,9], isOdd),someRecursive([4,6,8], isOdd),someRecursive([4,6,8], val => val > 10))

// extract parameters // ary , func 
// deduct minimal base case // ary[i] === ary.length 
// expand iterative approach

//  false if [2,4,6] === false => false if [4,6] === false => false if [6] === false 
// false if [2,3,6] ==== false => true if [3,6] === true. 


// soln recursive 
function someRecursive(ary,func){
  if(ary.length ===0) return false;
  if(func(ary[0]) === true) return true 
  return someRecursive(ary.slice(1),func)
}

console.log(someRecursive([1,2,3,4], isOdd),someRecursive([4,6,8,9], isOdd),someRecursive([4,6,8], isOdd),someRecursive([4,6,8], val => val > 10))

