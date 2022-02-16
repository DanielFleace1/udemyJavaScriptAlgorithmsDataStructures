// // Write a function reverse which accepts a string  and returns a new string in reverse. 
// // reverse('awesome') // 'emosewa'
// // reverse('rithmschool') // 'loohcsmhtir'


// iterative approach
function reverseIter(str){
    let len = str.length
    let arry = []
    for(let i = len-1;i>=0;i--){
        arry.push(str[i])
    }
    return arry.join('')
}
    //console.log(reverse('awesome'))

// extract parameters => str
// deduct minimal problem instance (base case) =>len 0
// add solution to minimal problem instance 
// expand funciton 
// to reverse bait => tiat = t + iat => iat = i + at and so on 


//SOLN BELOW

function reverse(str){
    if (str.length === 1) return str[0]
    return str.slice(-1) + reverse(str.slice(0,-1))
}
console.log(reverse('awesome'))
