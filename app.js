// // // //CHAPTER 1
// // // alert("Welcome visitor!");
// // // var x = prompt("Enter a password");
// // // alert("Wrong password entered");
// // // alert("Welcome to JS Land...\nHappy Coding!");
// // // alert("Welcome to JS Land...");
// // // alert("Happy Coding");
// // // console.log("Hello, I can run JS through my web browser's console.")

// // //Chapter 2
// // // var username;
// // // var myName = "Muhammad Ahmed";

// // var message = "Hello, World!";
// // alert(message);
// // var fname = "Jhone Doe";
// // var age = 15;
// // var course = "Certified Mobile Application Development";
// // alert(fname);
// // alert(age);
// // alert(course);
// // alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
// // var email = 'example@example.com';
// // alert("My email is " + email);
// // var book = "A smarter way to learn JavaScript";
// // alert("I am trying to learn from the Book " + book);
// // document.write("<h1>Yah!I can write HTML content throught Javascript</h1>");
// // alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// //Chap3
// // var age = 15;
// // alert("I am " + age + " years old.");
// // var visitors = 5;
// // alert("You have visited this site " + visitors + "times");
// // var birthyear = 2001;
// // document.write("My birth year is " + birthyear);
// // document.write("Data type of my declared variable is a number");
// // var vname = "John Doe";
// // var pTitle = "T-Shirt";
// // var qty = 5;
// // document.write(vname + " ordered" + qty + "on XYZ clothing store");

// // //CHAP 4
// // var a, b, c;
// // //legal
// // var ab, ac, ad, a5, $n;
// // //illegal
// // var 12a, .name, n a, list-p, terra--FormData;

// // document.write("<h1>Rules for nameing JS variables.</h1><br>Variable names can only contain letters, numbers, $ and __For example $my_1stVariable\nVariables must begin with a letter, $ or __ For example $name, _name or name \nVariable names are case sensitive\n Variable names should not be JS keywords")
// //Chapter 5 Math Expression

// // var a = +prompt("Enter a number : ");
// // var b = +prompt("Enter a number : ");
// // document.write("The sum of " + a + "and " + b + "is " + (+a + b));
// // document.write("The difference of " + a + "and " + b + "is " + (+a - b));
// // document.write("The product of " + a + "and " + b + "is " + (+a * b));
// // document.write("The divisor of " + a + "and " + b + "is " + (+a / b));
// // var variable;
// // alert(variable);
// // variable = 10;
// // document.write("Initial value : " + variable);
// // document.write("Value after increment : " + (++variable));
// // variable =+7;
// // document.write("Value : " + (variable));
// // --variable;
// // document.write("Value after decrement : " + variable);
// // document.write("Remainder is : " + (variable % 3));
// // var ticket = 600;
// // document.write("The cost to buy 5 tickets is : " + ticket * 5);

// // for (let i = 1; i < 11; i++)
// // {
// //     document.write("4 x 1 = " + 4 * i);
// // }
// //Converter
// // document.write("25 C is " + ((25 * 9/5) + 32));
// // document.write("<br>75 F is " + Math.round((70 -32) * 5/9));

// //q7 Price of Item
// // document.write("<h1>Shopping Cart</h1>");
// // document.write("<br><br>");
// // var item = 650;
// // document.write("Price of 1 item is " + item + "<br>");
// // var qty = 3;
// // document.write("Quantity of item 1 is " + qty + "<br>");
// // var item2 = 100;
// // document.write("Price of item 2 is " + 100 + "<br>");
// // var qty2 = 7;
// // document.write("Quantity of item 2 is " + 7 + "<br>");
// // var shcharges = 100;
// // document.write("Shipping charges " + shcharges + "<br>");
// // document.write("<br>");
// // document.write("Total cost of your order is " + (item*qty + item2 * qty2 + shcharges) + "<br>");

// // document.write("<h1>Marks Sheet</h1>");

// // document.write("<br /><br />");
// // var totalm = 980;
// // var obtained_m = 804;
// // document.write("Total marks : " + totalm + "<br>Marks Obtained: " + obtained_m + "<br>Percentage : " + (obtained_m/totalm) * 100);
// // document.write("<h1>Currency in PKR</h1>");
// // var dollars = 104.8;
// // var riyal = 28;
// // var pak = 104.8 * 10 + 25 * 28;
// // document.write("Total Currency in PKR : " + pak);

// // var number = 10;
// // var result = ((number + 5) * 10) /2;

// //Age Calc
// // var yod = 1997;
// // var yoc = 2021;
// // document.write("<h1>Age Calculator</h1><br>Current year : " + yoc + "<br>Birth year : " + yod + "<br>Your Age is : " + (yoc - yod));

// // var yod = 20;
// // var yoc = 2 * 3.14 * yod
// // document.write("<h1>The Geometrizer</h1><br>Radius of the circle: " + yod + "<br>The circumference is  : " + yoc + "<br>The area is: " + (yod * yod * 3.141));

// // var a = +prompt("Enter a number : ");
// // document.write("The value of a is " + a);
// // document.write("<hr>");
// // document.write("The value of ++a is : " + (++a));
// // document.write("<br>Now the value of a is : " + a);
// // document.write("<hr>");
// // document.write("The value of a++ : " + (a++));
// // document.write("The value of a is : " + (a));
// // document.write("<hr>");
// // document.write("The value of --a is : " + (--a));
// // document.write("<br>Now the value of a is : " + a);
// // document.write("<hr>");
// // document.write("The value of a-- : " + (a--));
// // document.write("The value of a is : " + (a));

// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--; //output would be 3;
// // alert(result);

// // var a = prompt("Enter a number : ");
// // if (a == undefined || isNaN(a) || a == null) {
// //   for (let i = 1; i < 11; i++) {
// //     document.write(5 + " x 1 = " + 5 * i + "<br>");
// //   }
// // } else {
// //   for (let i = 1; i < 11; i++) {
// //     document.write(a * 1 + " x 1 = " + a * i + "<br />");
// //   }
// // }

// // var sub = [];
// // var total = 100;
// // scores = [];
// // for (let i = 0; i < 3; i++) {
// //   sub[i] = prompt("Enter the name of the subject " + (+i + 1));
// //   scores[i] = prompt("Enter the marks of subject : " + (+i + 1));
// // }
// // document.write(
// //     `    <table>
// //     <tr>
// //       <th>Subject</th>
// //       <th>Total</th>
// //       <th>Marks</th>
// //       <th>Percentage</th>
// //     </tr>
// //     <tr>
// //       <td>${sub[0]}</td>
// //       <td>${100}</td>
// //       <td>${scores[0]}</td>
// //       <td>${scores[0]}</td>
// //     </tr>
// //     <tr>
// //     <td>${sub[1]}</td>
// //     <td>${100}</td>
// //     <td>${scores[1]}</td>
// //     <td>${scores[1]}</td>    </tr>
// //     <tr>
// //     <td>${sub[2]}</td>
// //     <td>${100}</td>
// //     <td>${scores[2]}</td>
// //     <td>${scores[2]}</td>    </tr>
// //   </table>`
// // );

// // var city = prompt("Enter your city:");
// // if (city == "Karachi" || city == "karachi")
// // {
// //     alert("Welcome to the city of light lekin aap ka mobile chalay jaiga");
// // }
// // else
// // {
// //     alert("welcome");
// // }
// var gender = prompt("Enter your gender : ");
// if (gender == "male" )
// {
//     alert("Good morning, Sir");
// }
// else {
//     alert("Good morning, Ma'am");
// }

// var color = prompt("Enter the color of the traffic light : ");
// if (color == "red") {
//   alert("Must Stop");
// } else if (color == "yellow") {
//   alert("Ready to move");
// } else if ((color = "green")) {
//   alert("Move now!");
// }

// var fuel = prompt("Enter the fuel in your car");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// }

//Copied String
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");



// Marksheet

// document.write("<h1>Marks Sheet</h1>");

// document.write("<br /><br />");
// var totalm = 980;
// var obtained_m = 804;
// document.write("Total marks : " + totalm + "<br>Marks Obtained: " + obtained_m + "<br>Percentage : " + (obtained_m/totalm) * 100);
// if ((obtained_m/totalm) * 100 >= 80) {
//     document.write("<br>Grade : A-one<br>Remarks : Excellent");
// }
// else if ((obtained_m/totalm) * 100 >= 70) {
//     document.write("<br>Grade : A<br>Remarks : Good");
// }
// else if ((obtained_m/totalm) * 100 >= 60) {
//     document.write("<br>Grade : B<br>Remarks : You need to improve");
// }
// else if ((obtained_m/totalm) * 100 < 60) {
//     document.write("<br>Grade : Fail<br>Remarks : Sorry");
// }

// var secretno = Math.round(Math.random() * 10);
// var x = prompt("Guess")
// if (x == secretno)
// {
//     alert("Bingo! Correct Answer");
// }
// else if (x == (secretno+1)) {
//     alert("Close enough to correct answer");
// }

// var number = 10;

// if (number % 3)
// {
//     alert("Number is divisible by 3");
// }
// else {
//     alert("Number is not divisible");

// }
// var number = prompt("Enter a number : ");
// if (number % 2 == 0){
//     alert("Even")
// } else {alert("odd")};


//IF... Else
// var number = prompt("Enter a character");
// if (number.length === 1)
// {
//     if(number.charCodeAt() >=65 && number.charCodeAt() <=90)
//     {
//         alert("Uppercase");
//     }
//     else if (number.charCodeAt() >=97 && number.charCodeAt() <=122)
//     {
//         alert("Lowercase");
//     }
//     else {
//         alert("Number or special character");
//     }
// }
// else {
//     alert("Enter a single character only");
// }




//

// var integer = +prompt("Enter an integer");
// var int2 = +prompt("enter another integer : ");
// if(integer > in2)
// {
//     document.write(integer + " is the largest ");
// } else if(integer < in2)
// {
//     document.write(int2 + " is the largest ");
// }
// else 
// {
//     document.write("They both are equal");
// }


// var integer = +prompt("Enter an integer");
// if(integer > 0)
// {
//     document.write(integer + " is positive ");
// } else if(integer < 0)
// {
//     document.write(int2 + " is negative");
// }
// else 
// {
//     document.write("Number is zero");
// }

// vowels = ["a", "e", "i", "o", "u"];
// var char = prompt("Enter a character");
// if (vowels.includes(char))
// {
//     alert(true);
// } else {
//     alert(false);
// }


// var password = "Password123";
// var userp = prompt("Enter your password");
// if (userp.length == 0){
//     alert("Enter your password");
// }
// else {
//     if (userp === password){
//         alert("Your password is correct");
//     }
//     else {
//         alert("Incorrect password");
//     }
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }
var time = prompt