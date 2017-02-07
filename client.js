//Creating the test arrays here
var arrayTestOne = ['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'];
var arrayTestTwo = ['Word', 'Time', 'Now', 'Baby'];
var arrayTestThree = ['Super ', 'Bad ', 'the ', 'movie ', 'is ', 'pretty ', 'funny ']

//Running the console log tests here, inputting my created arrays and arbitrary index numbers
console.log(concatenatorFromPoint(arrayTestOne, 3));
console.log(concatenatorFromPoint(arrayTestOne, 2));
console.log(concatenatorFromPoint(arrayTestOne, 0));
console.log(concatenatorFromPoint(arrayTestTwo, 2));
console.log(concatenatorFromPoint(arrayTestThree, 0));

/* The concatenating function itself. This loops over the array starting at the
input number a's index, and outputs a string composed of the array's remaining elements */
function concatenatorFromPoint(someArray, a) {
  var arrayLength = someArray.length; //sets this variable for readability
  var newString = '' //creating an empty string variable that will be filled with the array's elements
  for(var i= a; i<arrayLength; i++){
    newString = newString + someArray[i];
  }
  return newString;
}
