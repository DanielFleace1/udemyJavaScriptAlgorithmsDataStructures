
//Write a recurisve funciton which accepts a number and returns the nth number in the fibonacci sequence of whole numbers 

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//0,1,1,2,3,5,8,13,

// Iterable approach.
function fib(n){
    if (n <=  1) return 1;
    let t1 = 0;
    let t2 = 1;
    let sum = 0; 
    for (i = 1;i<n;i++){
        sum = t1+t2
        t1 = t2
        t2 = sum 
    }
    console.log(t2)
    return t2
}
fib(2)
// extract parameters => n
//deduct minimal probelm instance. n <= 1
// add solution to minimal problem instance 
// expand funciton 
// fib(4) = fib(3) - fib(2)= fib(2)- fib(1) - fib(1) -fib(0)
// fib(n) = fib(n-1) +fib(n-2)
// make base case fib(2) = 3 so that it does not reach fib(0)

function fib(n){
    if(n<=0) return 0 
    if(n<=2) return 1
    return fib(n-1) + fib(n-2);
}


console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
