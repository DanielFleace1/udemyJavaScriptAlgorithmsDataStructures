// write a recursive function that checks to see a word is palindrom

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// iterative approach 
function isPalindrome(str){
    for(let i =0; i<str.length;i++){ 
        if(str[i] !== str[str.length-1]){
           return false
       }
       str = str.slice(0,-1)
       console.log('string', str)
   }
   return true 
}
// console.log(
// isPalindrome('amanaplanacanalpandemonium') // false
// )
// extract parameters  str
//deduct a minimal case: i>= str.len
// if str[i] > str.length return true
// tacocat
// t true if acocat = t // remove first & last letters

// recursive soln - a little different that my problem solving strategy but made sense this way quickly to me
function isPalindrome(str){
    if(str.length < 3) return true 
    if(str[0] !== str[str.length-1]){
        return false
    }
    str = str.slice(1,-1)
    return isPalindrome(str)
}
console.log(isPalindrome('awesome'),isPalindrome('foobar'), isPalindrome('tacocat'),isPalindrome('amanaplanacanalpanama'),isPalindrome('amanaplanacanalpandemonium'))
