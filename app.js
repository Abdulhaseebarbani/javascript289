// String Fullname
// Chapter 21-25 task 1

// var fname =prompt("Enter First Name","Your First Name")
// var lname =prompt("Enter Last Name","Your Last Name")
// var fullName = fname+ " " + lname
// alert("Welcome Mr." + fullName)
// Chapter 21-25 task 2
// Favorite Mobile
// var fm = prompt("Which is your Favorite Phone","enter model also")
// document.write("My Favorite phone is: "+ fm +'<br>')
// var length= fm.length;
// document.write('Length of string is: '+ length)

// Chapter 21-25 task 3
// Index of Letter
// var i= x.indexOf('n');
// var x= "Pakistani"
// document.write('String:' + x + '<br>')
// document.write('index of "n": ' + i)

// Chapter 21-25 task 4
// last character
// var x= "Hello World"
// var i= x.lastIndexOf('l');
// document.write('String: ' + x + '<br>')
// document.write('last index of "l": ' + i)
// Chapter 21-25 task 5
// Character at index
// x= "Pakistani"
// var xChar = x.charAt(3);
// document.write('String is '+ x + '<br> '+ 'Character at index 3 is ' + xChar)
// Chapter 21-25 task 6
// Q1 using concat 
// var firstName =prompt("Enter First Name","Your First Name")
// var lastName =prompt("Enter Last Name","Your Last Name")
// var fullName = firstName.concat(lastName);
// document.write('Full Name: '+ fullName );
// Chapter 21-25 task 7
// Replace words
// var x= "Hyderabad"
// var newText = x.replace("Hyder", "Islam");
// document.write('city: '+ x + '<br>'+'after replacement: '+ newText)
// Chapter 21-25 task 8
// and to &
// var text = "“Ali and Sami are best friends. They play cricket and football together.”";
// var newText = text.replace(/and/g, "&");
// document.write(newText)
// Chapter 21-25 task 9
// string to number
// var x = "472"
// document.write('value: '+ x + '<br>' + 'type: String <br>' )
// var y = parseInt(x);
// document.write('value: '+ y + '<br>' + 'type: number')
// Chapter 21-25 task 10
// upper case convert
// var x= prompt("Enter any word");
// document.write('User input: ' + x + '<br>')
// var y = x.toUpperCase()
// document.write('upper case: '+ y)
// Chapter 21-25 task 11
// Title case
// var x = prompt("Enter your course")
// document.write('User input: ' + x + '<br>')
// var firstchar = x.slice(0,1);
// var otherchar = x.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var y = firstchar + otherchar;
// document.write('Title Case: '+ y)
// Chapter 21-25 task 12
// Number to string
// var num = 35.36;
// var n = num.toString();
// document.write('number: '+ num + '<br>'+ 'string: '+ n)

// Chapter 21-25 task 13
// Enter a Valid user name

// var char = prompt("Please enter your username")
// for (var i = 0; i < char.length; i++){
//     var ch = char.charCodeAt(i)
//     if (ch === 33 || ch === 44 || ch === 46 || ch === 64){
//         alert("Please Enter a valid username \n \n ◻ Prevent this page from creating additional dialogs")
//         var matchFound = 1
//         break
//     }
// }
// if (matchFound !== 1){
//     alert("your username is valid")
// }
// Chapter 21-25 task 14
// Search items
// var A = ["cake","apple pie", "cookie", "chips", "patties"]
// var s= prompt("Welcome to our Bakery, What do you want to order Sir/Madam \n ◻ Prevent this page from creating additional dialogs")
// var s = s.toLowerCase();
//     if (A.lastIndexOf(s) !== -1){
//         alert(s+ ' is available at index ' + A.indexOf(s) + ' in our bakery')
//     } 
//     else{
//         alert("We are sorry " + s + " is not available in our bakery ")
// } 
// Chapter 21-25 task 15
// Enter Valid Password
// var p= prompt("Enter Your Password")
//  var Password = /^[A-Za-z]\w{6,\}$/;
//  if (p.match(Password)){
//      alert('Password approved')
//  }
//  else {
//      alert("Password can not begin with a number \n Please Enter a valid password")
//  }

// Chapter 21-25 task 16
// // Split "method
// var msg = 'University of Karachi'
// for (var i = 0 ; i < msg.length ; i++){
//     document.write(msg[i] + "<br>")
// }
// Chapter 21-25 task 17
// Last character of input
// var x= prompt("Enter Name")
// document.write('user Input: ' + x + '<br>')
// var y = x.slice(-1)
// document.write('Last character of input: '+ y)
// Chapter 21-25 task 18
// Occurence of the
// var text = "the quick brown fox jumps over the lazy dog.";
// var text = text.toLowerCase();
// var count = (text.match(/the/g) || []).length;
// document.write('Text: The quick brown fox jumps over the lazy dog <br> There are ' + count + ' occurence(s) of word "the"');


// chapter 26-30 task 1
// Postive integer
// var x= prompt("Enter Integer");
// document.write('number: '+ x + '<br>');
// var r= Math.round(x);
// document.write('Round of value: '+ r + '<br>');
// var f= Math.floor(x);
// document.write('floor value: '+ f + '<br>');
// var c= Math.ceil(x);
// document.write('Ceil of value: '+ c + '<br>');

// chapter 26-30 task 2
// negative integer
// var x= prompt("Enter negative Integer");
// document.write('number: '+ x + '<br>');
// var r= Math.round(x);
// document.write('Round of value: '+ r + '<br>');
// var f= Math.floor(x);
// document.write('floor value: '+ f + '<br>');
// var c= Math.ceil(x);
// document.write('Ceil of value: '+ c + '<br>');

// chapter 26-30 task 3
// absolute value
// var x = prompt("Enter Value")
// var a = Math.abs(x);
// document.write('The absolute value of'+ x + ' is ' + a)
// chapter 26-30 task 4
// Random numbers
// document.write('random dice value: '+ Math.floor(Math.random()* 4) + '<br>')
// document.write('random dice value: '+ Math.floor(Math.random()* 6))
// chapter 26-30 task 5
// random coin value
// var x = Math.random()*2
// var floor = Math.floor(x)  
// if (floor === 0 ){
//     document.write("2 random coin value is: Heads <br>"  )
// }
// else (floor === 1) 
//     document.write("1 random coin value is: Tails" )
// chapter 26-30 task 6
// Random numner between 1 and 100

// x = Math.floor(Math.random() * 100) + 1;
// document.write('Random number between 1 and 100 is :' + x);

// chapter 26-30 task 7
// Weight parse
// var x = prompt("Enter your weight  in Kilograms")
// var y = parseFloat(x);
// document.write('The weight of user is '+ y + ' Kilograms')

// chapter 26-30 task 8
// Secret
// var x = 9;
// var y = prompt("Guess the secret number", "1-10")
// if (y == x){
//     alert("congratulations you guessed correct")
// }
// else{
//     alert("Try Again")
// }

// chapter 31-34 task 1
// current date and time
// document.write(new Date());
// chapter 31-34 task 2
// current month
// var list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var now = new Date();
// var month = now.getMonth();
// var currentmonth = list[month];
// alert("Current Month "+ currentmonth)
// chapter 31-34 task 3
// Current day
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " + nameOfToday)
// chapter 31-34 task 4
// It's fun day
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday === "Sun" || "Sat"){
//     alert("It's Fun Day")
// }
// else {
//     alert("It's Working day")
// }
// chapter 31-34 task 5
// first and last days of month
// var date = ["[1-30]/g"];
// var now = new Date();
// var theDate = now.getDate();
// var Today = date[theDate];
// if(Today === "[1-15]/g"){
//     alert("First fifteen days of the month")
// }
// else {
//     alert("Last days of the month")
// }
// chapter 31-34 task 6
// milliseconds and minutes passed
// var fd = new Date("Jan 01,1970 00:00:00")
// var fm= fd.getTime();
// var sd= new Date("Dec 05,2015 22:32:23");
// var sm= sd.getTime();
// var diff= sm-fm
// var mint = diff/(1000*60*60)
// document.write('Current Date: '+sd + '<br>'+ 'Elapsed milliseconds since'+ fd +': '+ diff +'<br>')
// document.write('Elapsed minutes since '+ fd +': '+ mint)
// chapter 31-34 task 7
// Am or Pm
// var time= ["[0-23]/g"];
// var now = new Date();
// var theTime = now.getTime();
// var r = time[theTime];
// if(r === "[0-11]/g"){
//     alert("It's Am")
// }
// else {
//     alert("It's Pm")
// }
// chapter 31-34 task 8
// last date
// var laterDate = new Date("Dec 12,2020")
// document.write(laterDate)
// chapter 31-34 task 9
// Ramzan 
// var fd = new Date("June 18,2015")
// var fm= fd.getTime();
// var sd= new Date("Dec 05,2015");
// var sm= sd.getTime();
// var diff= sm-fm
// var days = diff/(1000*60*60*24)
// var accu = Math.floor(days)
// document.write(accu + ' days have passed Since 1st Ramadan,2015')
// chapter 31-34 task 10
// Seconds passed
// var fd = new Date("Dec 05,2015 22:50:16")
// var fm= fd.getTime();
// var sd= new Date("Jan 01,2015");
// var sm= sd.getTime();
// var diff= fm-sm
// var sec = diff/(1000*60)
// var accu = Math.floor(sec)
// document.write('on reference date '+ fd +' ' + accu + ' seconds has passed Since begining of 2015')
// chapter 31-34 task 11
// 1 hour ago
// var ct = new Date();
// var t= new Date();
// var h = t.setHours(t.getHours()-1)
// document.write('current date: '+ ct + '<br>' +'1 hour ago, it was ' + t) 
// chapter 31-34 task 12
// 100 years back
// var fd = new Date()
// var b = fd.setFullYear(100-fd.g)
// var current = new Date("Dec 05,2005");
// var oneYearFromNow = new Date("Dec 05,2005");
// oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 100);
// alert ("Current date: "+ current + "\n 100 years back, it was "+ oneYearFromNow)
// chapter 31-34 task 13
// Birthday
// var bd = new Date("Nov 05,1993")
// var bm= bd.getTime();
// var cd= new Date();
// var cm= cd.getTime();
// var diff= cm-bm
// var year = diff/(1000*60*60*24*30*12)
// var accu = Math.floor(year)
// document.write('Your age is ' + accu + '<br>'+ 'Your birth year '+ bd.getFullYear())
// chapter 31-34 task 14
// K.E bill
// var name = prompt("Enter Customer name")
// var list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var now = new Date();
// var month = now.getMonth();
// var currentmonth = list[month];
// var units = Math.round(prompt("Enter Units"));
// var charge = Math.round(prompt("Enter Charger per unit"));
// var net = units*charge
// var late= Math.round(prompt("Enter Late Charges"));
// var gross = net + late
// document.write('Customer name: '+ name +'<br>');
// document.write('Month: '+ currentmonth +'<br>');
// document.write('Number of Units: '+ units +'<br>');
// document.write('Charges per unit: '+ charge +'<br>');
// document.write('Net amount Payable (within Due Date): '+ net +'<br>');
// document.write('Late Payment surcharge: '+ late +'<br>');
// document.write('Gross Amount Payable (after Due Date): '+ gross +'<br>');

// chapter 35-38 task 1
// Date and time  
// function date(){
//     document.write(new Date())
// }
// date()
// chapter 35-38 task 2
// Greet user
// function greet(a,b){
//     alert('Welcome '+ a + ' ' + b)
// }
// greet(prompt("Enter First Name"),prompt("Enter Last Name"))
// chapter 35-38 task 3
// Sum of 2 numbers
//  function add(a,b){
//      alert(a+b)
//  }
//  add (+prompt("Enter Value 1"),+prompt("Enter value 2"))
// chapter 35-38 task 4
// Calculator
// function calc(num1,opr,num2){
//     if (opr === "+"){
//         return num1 + num2
//     }
//     else 
//     if (opr === "-"){
//         return num1 - num2
//     }
//     else
//     if (opr === "*"){
//         return num1 * num2
//     }
//     else
//     if (opr === "/"){
//         return num1/num2
//     }
//     else {
//         return "Incorrect operator"
//     }
// }
// var num1 =  +prompt("Enter Value 1")
// var opr = prompt("Enter Operator")
// var num2 = +prompt("Enter Value 2")
//  var result = calc(num1,opr,num2)
//  document.write('Result: '+ result)

// chapter 35-38 task 5
// Square of argument
// function squ (a){
//     alert(a*a)
// }
// var a = +prompt("Enter Value") 
// squ (a)

// chapter 35-38 task 6
// factorial of a number
// function factorial(x) 
// { 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// var x = factorial(prompt("Enter the number"))
// alert(x)
// chapter 35-38 task 7
// Counting from one to another
// function count(a,b) {
//     for(var i = a; i <= b ; i++) {
//     document.write(i + '<br>');
//     }
// }
// var a= prompt("Enter start Value")
// var b= prompt("Enter end Value")
// count(a,b);

// chapter 35-38 task 8
// Hypotenus
// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per) ;
// }
// var base = +prompt("Enter Base")
// var per = +prompt("Enter perpendicular")
// document.write('Hypotenus of right angle traingle is: '+calcHypotenus(base,per))

// chapter 35-38 task 9
// Area
// function area(w,h){
//     return w*h
// }
// document.write('Area of Rectangle(in value) is: '+ area(3,5)+ '<br>')
// var w = prompt("Enter Width of rectangle")
// var h = prompt("Enter Height of rectangle")
// document.write('Area of Rectangle(in variable) is '+ w +'*'+ h +':' + area(w,h))

// chapter 35-38 task 10
// palindrome
// function pal(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return document.write(str + ' is not a palindrome word');
//       }
//     }
//     return document.write(str + ' is a palindrome word');
//    }
//    var str = prompt("Enter word to find palindrome")
//    pal(str)
// chapter 35-38 task 11
// convert first letter of each word
// function uppercase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return document.write('EXAMPLE STRING: "the quick brown fox" <br> EXPECTED OUTPUT: ' + str.join(' '))
//   }
//   var str = "the quick brown fox"
//   uppercase(str);
// chapter 35-38 task 12
//  longest word
// function longestword(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var x = 1 ; x < arr.length ; x++)
//   {
//     if(result.length < arr[x].length)
//     {
//     result = arr[x];
//     } 
//   }
//   return result;
// }
// document.write('EXAMPLE STRING: "Web Development Tutorial" <br> EXPECTED OUTPUT: '+(longestword('Web Development Tutorial')))

// chapter 35-38 task 13
// occurence of a word countvar string = "I am amazing";

// function occ (arg) {
//     var cnt = 0;
//     for(var i=0; i<string.length; i++) {
//         if(string[i] === arg) {
//           cnt++;
//       }
//     }
//     return cnt;
//   }
//   var arg = "'JSResources'"
//   var word = "o"
//   var string = arg;
//   document.write('sample argunments: '+ arg +', '+ word + '<br>occurance of '+ word+' is: ' + occ(word))
// chapter 35-38 task 14
// properties of circle
// circumferance
// function calcCircumference(r,p){
//     return 2*p*r
// }
// var r = +prompt("Enter Radius of Circle")
// var p = 3.142;
// document.write('The Circumferance of Circle is: ' + Math.round(calcCircumference(r,p)))
// // Area
// function calcArea(r,p){
//     return p*r**2
// }

// var r = +prompt("Enter Radius of Circle")
// var p = 3.142;
// document.write('<br>The Area of Circle is: ' + Math.round(calcArea(r,p)))