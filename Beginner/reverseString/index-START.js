/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split("").reverse().join("")
    //return [...text].reverse().join('') 

    //ES6 we can use the spread operator as shown below to tweak this solution a bit.
  
    //  let result = ""
    //for (let i = text.length - 1; i >= 0; i--) {
   //     result += text[i]
    //}
    //return result
    //loop 

  /*   if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    } */
    //recursive

    return text.split("").reduce((acc, char) => char + acc, '')
    //return [...text].reduce((acc, char) => char + acc, '')
    //.reduce()
}



module.exports = reverseString