/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//For of loop is faster
// USING A FOR OF LOOP

function falsyBouncer(array) {
    let result =[]
    
    for (value of array){
        if(value){
            result.push(value)
        }
    }
    
    return result
}

// USING .FILTER()

function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)  
    })
}



module.exports = falsyBouncer