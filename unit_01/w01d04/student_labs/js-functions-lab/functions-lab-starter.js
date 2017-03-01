// Question 1
function maxOfTwoNumbers(num1, num2) {
	if(num1 > num2) {
		return(num1);
	} else {
		return(num2);
	} 
} 

// Question 2
function maxOfThree(num1, num2, num3) {
	
	if(num1 > num2 && num1 > num3) {
		return(num1);
	} 
	
	if(num2 > num3 && num2 > num1) {
		return(num2); 
	}

	if(num3 > num2 && num3 > num1) {
		return(num3);
	}
}
	
// Question 3
function isCharacterAVowel(letters) {
  if(letters === "a"|| letters === "e"|| letters === "i"|| letters === "o"|| letters === "u") {
 console.log("true"); 
} else {
  console.log("false");
}
}

// Question 4
function sumArray(array) {
	startingDigit = 0;
	for(var i=0; i < array.length; i++) {
	  startingDigit = startingDigit + array[i];
	} return startingDigit;
} 
var sumOfArray = [1,2,29,4,5];


// Question 4
function multipleArray(array) {
	startingDigit = 1;
	for(var i=0; i < array.length; i++) {
	  startingDigit = startingDigit*array[i];
	} return startingDigit;
}
var productOfArray = [5,2,4,5];

// Question 5
var numberOfArguments = function(){
  return numberOfArguments.length;
}



// Question 6
var reverseString = function (someString) {
  var newString = '';
for(var i=someString.length-1; i>= 0; i--) {
  newString = newString + someString.charAt(i);
  }
  return newString;
};


// Question 7
function findLongestWord (words) {
    var emptyVariable = 0;
    for(var i=0; i<words.length; i++) {
      if(words[i].length > emptyVariable) {
        emptyVariable = words[i].length;
      }
    } return emptyVariable;   
}

// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

