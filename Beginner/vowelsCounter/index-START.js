/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const Vowels = ["a", "e", "i", "o", "u"]

//iterative approach
/* function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;
    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (Vowels.includes(letter)) {
            counter++
        }
    }
    // Return number of vowels
    return counter
} */

//regex
function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {    
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}

module.exports = vowelsCounter;
