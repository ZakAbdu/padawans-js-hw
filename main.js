//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

 let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
 let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    //Your code goes here
    for (i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            console.log('Matched dog_name')
        }
        else {
            console.log('No Matches')
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, 'even index')
    }
    return arr
}
console.log(replaceEvens(arr1))

//Expected output
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




// ----------------- CODE-WARS PROBLEMS --------------------------- //

/*
Vowel Count:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. 
*/

function vowelCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    return count
}

let sentence = 'hey my name is zak and im from san diego'
console.log(vowelCount(sentence))



/*
Reverse String:
Write a function that takes in a string. 
The function should return a new string where the order of the characters is reversed.
*/

function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i]
        reversed += char
    }
    return reversed
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'