const arr=[7,2,10];
function number(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2!==0){
            console.log ("нечетное число")
        }else {
            console.log ("четное число")
        }
    }
}
number (arr)