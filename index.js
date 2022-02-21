// Readline for user input.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Alphabet array as reference for bein able to later sum up each letter in inputName using the nameSum() function
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const nameSum = (input) => {
    let sum = 0;

    /* 
    Loop through each letter in input and if the current letter is in the alphabet array
    add the letters position in the alphabet array + 1 (because JavaScript starts counting at 0) to the total sum.
    */
    for (let index = 0; index < input.length; index++) {
        const letter = input[index].toLowerCase();

        if (alphabet.includes(letter)) {
            sum += alphabet.indexOf(letter) + 1;
        }
    }

    return sum;
}

// Read user input then print out the sum of the inputted name.
readline.question('Input your name: ', inputName => {
    console.log(`The sum of your name is: ${nameSum(inputName)}`);
    readline.close();
});


module.exports = nameSum;