
// Helper function to merge two sorted arrays
// a = j /// b = i 

function merge2sorted(a,b){
    let j = 0;
    for(let i = 0; i <b.length; i++){
        while ( b[i] > a[j]){
            j++
        }
        a.splice(j,0,b[i])
    }
    return a 
}
console.log(
merge2sorted([0,2,3,11,12,17,100],[5,10,20])
)
