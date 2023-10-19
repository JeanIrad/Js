function removeDuplication(arr){
    let unique = []
    for(let i = 0; i < arr.length; ++i){
        if(unique.indexOf(arr[i]) < 0){
            unique.push(arr[i])
        }
    }
    return unique
}
// let test = removeDuplication([1, 2, 3, 4, 5, 6, 7, 3,10, 1, 11, 219, 2991, 2, 4, 5, 7, 8, 9])
console.log(test)