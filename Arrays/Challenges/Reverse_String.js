// Write a function that takes in a string and returns the string reversed.
// Sample input: "hello"
// Sample output: "olleh"

// En este caso hago uso del método split() para dividir la cadena en un array de caracteres, luego uso el método reverse() 
// para invertir los elementos del array y finalmente uso el método join() para unir los caracteres de nuevo en una cadena.

// In this case I use the split() method to split the string into an array of characters, then I use the reverse() method 
// to reverse the elements of the array and finally I use the join() method to join the characters back into a string.

const reverseString = (string) => string.split("").reverse().join("");
console.log(reverseString("hello my friend"))