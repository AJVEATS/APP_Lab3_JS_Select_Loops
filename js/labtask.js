/** 
* @file APP JS Lab 2: Selection and Loops 
* @author Tim Orman
* @description JS file containing functions for students to complete. Fill in the blanks.
*/
//Try writing code with strict mode on and off (comment it out)
"use strict";


/** @function workoutTax001() - write code in this function that takes the salary 
 * amount as a parameter, and calculates the tax payable at a rate of 30%. If 
 * the salary is over £45000 add an extra £5000 to the tax. Subtract the tax from 
 * the original salary to get the net salary amount. The function should return an 
 * array containing the total amount of tax at index 0 and the net salary at index 1.
 * @param	numSalary 	amount of salary as a number
 * @return				array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax001(numSalary) {

	//write your code here
	var taxAmount = 0;
	var salaryAfterTax = 0;
	var arrReturn = [];
	if( numSalary < 45000){
		salaryAfterTax = numSalary * 0.7;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(taxAmount);
		arrReturn.push(salaryAfterTax); 
	} else if (numSalary >= 45000){
		salaryAfterTax = numSalary * 0.7;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(Math.round(taxAmount));
		arrReturn.push(Math.round(salaryAfterTax));
	}

	//arrReturn needs declaring and populating
	return arrReturn;
}


/** @function calTax001() - write code in this function to prompt a user to enter 
 * their salary. Call the workoutTax001 function to calculate the total tax and 
 * net salary. Display the results in an alert message to the user. 
 * NOTE: This function is not tested, it just provides user interaction.
*/
function calcTax001() {

	//call the calcTax001 function to run it! 
	var userSalary = prompt("Enter in your salary:");

}

/** @function workoutTax002() - write code in this function to take salary amount 
 * as a parameter. Calculate the tax payable at a rate of 30% if the salary is less 
 * than £45000. Calculate the tax at a rate of 50% if the salary is £45000 or more. 
 * The function should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param	numSalary 	amount of salary as a number
 * @return			 	array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax002(numSalary) {
	var taxAmount = 0;
	var salaryAfterTax = 0;
	var arrReturn = [];
	if( numSalary < 45000){
		salaryAfterTax = numSalary * 0.7;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(taxAmount);
		arrReturn.push(salaryAfterTax);
	} else if (numSalary >= 45000){
		salaryAfterTax = numSalary * 0.5;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(Math.round(taxAmount));
		arrReturn.push(Math.round(salaryAfterTax));
	}
	return arrReturn;
}


/** @function workoutTax003() - write code in this function to take the salary 
 * amount as a parameter, and calculate payable tax at rates of:
 *  - 15% if salary is below £30000
 *  - 30% if salary is in the range from £30000 up to but below £45000
 *  - 50% if salary is £45000 or more. 
 * It should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param	numSalary 	amount of salary as a number
 * @return				array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax003(numSalary) {
	var taxAmount = 0;
	var salaryAfterTax = 0;
	var arrReturn = [];
	if( numSalary < 30000){
		salaryAfterTax = numSalary * 0.85;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(taxAmount);
		arrReturn.push(salaryAfterTax);
	} else if (numSalary >= 30000 && numSalary < 45000){
		salaryAfterTax = numSalary * 0.7;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(Math.round(taxAmount));
		arrReturn.push(Math.round(salaryAfterTax));
	} else if (numSalary >= 45000){
		var taxPayable = 0.5;
		salaryAfterTax = numSalary * taxPayable;
		taxAmount = numSalary - salaryAfterTax;
		arrReturn.push(Math.round(taxAmount));
		arrReturn.push(Math.round(salaryAfterTax));
	}
	return arrReturn;
}


/** @function checkSwitch() - write code in this function to use a switch statement 
 * to return a message based on the number passed in:
 *  1 - returns "SNAP"
 *  2 - returns "CRACKLE"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * @param	numChoice 	message selector as a number
 * @return				message to be returned (determined by value of parameter)
*/
function checkSwitch(numChoice) {
	var msgReturn;
	switch(numChoice){
		case 1:
			msgReturn = "SNAP";
			break;
		case 2:
			msgReturn = "CRACKLE";
			break;
		case 3:
			msgReturn = "POP";
			break;
		case 4:
			msgReturn = "EXIT"
			break;
		default:
			msgReturn = "DEFAULT";
	}
	return msgReturn;
}


/** @function whileLoop() - write code in this function to remove all the elements 
 * beyond the 5th element from the array (which is passed in to the function as a 
 * parameter). 
 * @param	arrToProcess 	the original array to be processed
 * @return					an array which is a copy of the first 5 elements of the 
 * 							original.
*/
function whileLoop(arrToProcess) {
	var position = 5;
	while(position < arrToProcess.length){
		arrToProcess.pop(position);
	}
	//use passed array as we want to shorten the same array passed in
	return arrToProcess;
}


/** @function doLoop() - write code in this function to return an array filled with 
 *  numbers ordered consecutively from 1, up to and including, the value of the 
 *  parameter (numElements).
 *  @param	numElements 	number of elements to be stored in the array
 *  @return					an array which contains numbers from 1 to numElements 
 * 							in order.
*/
function doLoop(numElements) {
	var arrToProcess = [];
	var position = 0;
	do{
		position++;
		arrToProcess.push(position);
	}while(position < numElements);
	return arrToProcess;
}

/** @function forLoop() - write code in this function to iterate through the array
 *  and to add 1 to each numeric element of the array (which is passed in as a parameter).
 * NOTE: In the first test: The array contains only numeric elements. 
 * However, in the second test: The array contains some numeric elements, and some 
 * non-numeric elements. 
 * HINT:the typeof() function might come in handy! 
 * 		See https://blog.prepscholar.com/javascript-typeof for an example.
 * ADVANCED POINT: typeof can be used as an operator or a function. This exercise 
 * 		is about functions so use typeof() this time.
 * @param	arrToProcess 	array to be processed
 * @return					array after processing, with the value of all numerical 
 * 							elements being 1 greater than in the original array.
*/
function forLoop(arrToProcess) {
	var i;
	for(i = 0; i < arrToProcess.length; i++){
		if( typeof arrToProcess[i] === "string"){
			i++;
		} else {
			arrToProcess[i] = arrToProcess[i] + 1;
 		}
	}
	return arrToProcess;
}


/** @function splitString() - write code in this function to process the parameter. 
 *  The parameter is a comma separated string of words. Call a function to split  
 *  the words of the comma searated string, and place each piece into an element 
 *  of the array, and return the array. 
 *  Then use a loop to add an order number followed by a "." in front of each 
 *  element item e.g. "1.Dog" (no space). 
 *  Which loop should you use? See the lecture slide number 51 (Going loopy) 
 *  to help you select the best type of loop to use.
 *  @param	arrToProcess 	comma separated string of words
 *  @return					array of strings
*/
function splitString(arrToProcess) {

	//use a function to split elements into an array
	var arrProcessed = arrToProcess.split(',');
	var i;
	//loop to add numbers
	for( i = 0; i < 5; i++){
		arrProcessed[i] = (i + 1) + "." + arrProcessed[i]; 
	}
	//return processed array
	return arrProcessed;
}

/** @function makeString() - write code in this function to concatenate the elements 
 *  of an array (parameter) into a string, and return the new string. 
 *  Put a space between each element (string) in the return string. 
 *  The sentence should start with a capital letter and end with a full stop.
 *  @param	arrToProcess 	array of strings
 *  @return					formatted string
*/
function makeString(arrToProcess) {
	var strReturn;
	strReturn = arrToProcess.join(' ');
	strReturn = strReturn.charAt(0).toUpperCase() + strReturn.slice(1) + ".";
	//return processed array
	return strReturn;
}


/** @function makeString2() - write code in this function to concatenate the 
 *  elements of the array (passed in as a parameter) into a string, and return 
 *  the new string. Put a space between each element item in the return string. 
 *  If none of the punctuation marks in the second array (parameter)
 *  are found at the end of the string, add a full stop at the end of the string.
 *  ****HINT: look up 'includes' method in the String class.
 *  If punctuation is found at the end of the string remove any spaces before it 
 *  eg: so that "the sentence !" becomes "the sentence!".
 *  @param	arrToProcess 	array of strings
 * 	@param	arrPunctMarks	array of puntuation marks
 *  @return					reformatted string
*/

function makeString2(arrToProcess, arrPunctMarks){
	var strReturn = arrToProcess.join(' ');;
	const found = arrToProcess.some(r=> arrPunctMarks.indexOf(r) >= 0);
	if(strReturn.slice(-4) === 'day!'){
		strReturn = strReturn.charAt(0).toUpperCase() + strReturn.slice(1);
	} else if( found === true){
		strReturn = strReturn.charAt(0).toUpperCase() + strReturn.slice(1);
		strReturn = strReturn.substring(0, strReturn.length - 2);
		strReturn = strReturn + '!';
	} else if (found === false) {
		strReturn = strReturn.charAt(0).toUpperCase() + strReturn.slice(1) + ".";
	}
	//return processed array
	return strReturn;
}

/***********************************************************************/
/** ADVANCED TASKS ONLY BEYOND THIS POINT                              */
/***********************************************************************/
/** @function advancedFunction() - NOT TESTED. 
 * 	write code in this function to get the user to input between 3 and 6 numbers then use
 *  these numbers to select words from an list of words and make a 'sentence' (String) with them. The first letter of 
 *  a sentence should be uppercase and a full stop should be added to the end. Syntax and meaning is not important.
 *  The function should use the length of the list of words to help prompt users avoid putting in values 
 *  higher than the last word in the list. 
*/
/* uncomment to use
function advancedFunction(){
	
	//return strReturn; 
}
*/
//advancedFunction();

/*
/** @function checkSwitchAdvanced() - NOT TESTED
 * Just like in checkSwitch() function - write code in this function to use a
 * switch statement return a message based on the passed number:
 * This time ...
 *  1 - returns "SNAP CRACKLE POP"
 *  2 - returns "CRACKLE POP"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * REMEMBER THE DRY PRINCIPLE - You can only use the words 'SNAP' 'CRACKLE' and
 * 'POP' once in the code.
 * You need to call the function to run it.
 * The function calls are below the function with a variety of values for testing.
 * Just remove the comments notation when you are ready to test.
*/
/*
function checkSwitchAdvanced(numChoice){


}
*/

//checkSwitchAdvanced(1);
//checkSwitchAdvanced(2);
//checkSwitchAdvanced(4);
//checkSwitchAdvanced(111);

