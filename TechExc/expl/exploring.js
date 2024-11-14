/*  The following array contains multiple elements.
    create one String with all the elements of the Array and log it to the console */

    const dataH = [
        "HTML",
        "CSS",
        "XML",
        "JSON",
        "Javascript"
    ]
    
    function convertToString() {
        /* Your code here should return to the console one String containing all the elements of array data . */

    const result = data.join(' ');
    console.log(result);
    }
    
    convertToString()







/*  The following array contains multiple data types.
    Normalize them by converting them all to numbers using a function
    and log the result in the console */

const data = [
    1,
    2,
    "3",
    "4",
    5
];

data.forEach((element) => console.log(element));





//function convertArrayStringsToNumbers() {
   // if (typeof == 'number')
    /* Your code here should convert the data array to an array containing only numbers and no strings 
    and log the result to the console. 
    
    
convertArrayStringsToNumbers()
let numberArray = [];
data.forEach((element) => numberArray.push(+((element));

// Print the array of numbers
console.log(numberArray);


*/



let numberArray = [];
data.forEach((element) => numberArray.push(+(element)))

let numberArray2 = data.map(Number);

let 


console.log(numberArray);
console.log(numberArray2);




