var add = function(number1, number2){
	return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(add(number1, number2));

var subtract = function(number1, number2){
  return number1 - nubmer2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(subtract(number1, number2));

var multiply = function(number1, number2){
  return number1 * nubmer2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(multiply(number1, number2));

var divide = function(number1, number2){
  return number1 / nubmer2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(divide(number1, number2));

var bmi = function (height, weight) {
	return ((weight*703)/(height*height));
};

var weight = prompt("Put your weight in pound:");
var height = prompt("Put your height in inches");

alert (bmi(height, weight));

var convert = function (celsius) {
	return celsius *1.8 +32;
};
var celsius = parseInt(prompt("Enter temperature in celsius degrees:"));
alert (convert(celsius));

var convert = function (fahrenheit) {
	return ((fahrenheit-32)*(5/9));
};
var fahrenheit = parseInt(prompt("Enter temperature in Fahrenheit degrees:"));
alert (convert(fahrenheit));

var conversion = function (gallon) {
	return gallon / 0.26417;
};
var gallon = parseInt(prompt("Enter gallon amount:"));
alert (conversion(gallon));
