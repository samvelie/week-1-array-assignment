//Creating the test arrays here
var arrayTestOne = ['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'];
var arrayTestTwo = ['Word', 'Time', 'Now', 'Baby'];

//Running the console log tests here, inputting my created arrays and arbitrary index numbers
console.log(concatenatorFromPoint(arrayTestOne, 3));
console.log(concatenatorFromPoint(arrayTestOne, 2));
console.log(concatenatorFromPoint(arrayTestOne, 0));
console.log(concatenatorFromPoint(arrayTestTwo, 2));

function concatenatorFromPoint(someArray, a) {
  var arrayLength = someArray.length;
  var newString = ''
  for(var i= a; i<arrayLength; i++){
    newString = newString + someArray[i];
  }
  return newString;
}
