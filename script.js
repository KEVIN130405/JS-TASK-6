///Array Higher-Order Methods — 12 Questions
// 1.Create an array of 5 numbers and use forEach() to print each number.
let numbers = [1,2,3,4,5]
numbers.forEach((curentelement, indexnumber, totalarray)=>{
    console.log(curentelement);
    
})

// 2.Create an array of student names and use forEach() to print: Hello, <name>
let studentnames = ["kevin","mugil","essam","antony"]
studentnames.forEach((curentelement)=>{
    console.log("Hello, ", curentelement);
    
})

// 3.Create an array of numbers and use map() to create a new array containing each number multiplied by 2.
let numbers2 = [1,2,3,4]
let map = numbers2.map((a,b,c)=>{
    return a *2
})
console.log(map);

// 4.Create an array of prices and use map() to add 100 to every price.
let price = [10,20,30,40]
let add = price.map((a,b,c)=>{
    return a + 100
})
console.log(add);

// 5.Create an array of numbers and use filter() to get only even numbers.
let numbers3 = [1,2,3,4,5,6]
let even = numbers3.filter((c,i,t)=>{
    return c % 2 === 0

})
console.log(even);

// 6.Create an array of ages and use filter() to get students whose age is greater than or equal to 18.
let ages = [18,20,8,7,21,22]
let ages2 = ages.filter((c,i,t)=>{
    return c >= 18;

})
console.log(ages2);

// 7.Create an array of numbers and use find() to find the first number greater than 50.
let numbers4 = [10,20,50,60,70,80]
let find = numbers4.find((c,i,t)=>{
    return c >50

})
console.log(find);

// 8.Create an array of student objects with name and mark. Use find() to find the first student whose mark is greater than 80.
let student = [
    {name : "kevin",marks : 82},
    {name : "mugil", marks : 92},
    {name : "yusuf", marks : 74} 
]
let find2 = student.find((c,i,t)=>{
    return c.marks > 80
})

console.log(find2);

// 9.Create an array of numbers and use reduce() to calculate the total sum.
let numbers5 = [1,2,3,4,5]
let reduce = numbers5.reduce((acc,c,i,t )=>{
    return acc + c 

},0);
console.log(reduce);

// 10.Create an array of prices and use reduce() to calculate the total price.
let prices = [20,40,50,60,90]
let total = prices.reduce((acc,c,i,t)=>{
    return acc + c 

},0)
console.log(total);

// 11.Create an array of numbers and use some() to check whether at least one number is greater than 100.
let numbers6 = [20,40,60,80,100,120,140]
let some = numbers6.some((c,i,t)=>{
    return c > 100

})
console.log(some);

// 12.Create an array of marks and use every() to check whether all students scored above 35.
let marks = [25,30,45,60,85,90]
let every = marks.every((c,i,t)=>{
    return c > 35

})
console.log(every);


///Sort / Join / Array Conversion — 5 Questions
// 13.Create an array of numbers and sort them in ascending order using sort() with a callback.
let sortarr = [10,1024,22,3345,67,89]
let ascending = sortarr.sort((a,b)=>{
    return a-b

})
console.log(ascending);

// 14.Create an array of numbers and sort them in descending order.
let sortarr2 = [10,1024,22,3345,67,89]
let descending = sortarr.sort((a,b)=>{
    return b - a

})
console.log(descending);

// 15.Create an array of student names and convert the array into a string using toString().
let array = ["kevin","yusuf","mugil","saran"]
console.log(array.toString());

// 16.Create an array of names and combine them using join() with " - ".
let array2 = ["kevin","rizviq","ritick","yusuf"]
console.log(array2.join(" - "));

// 17.Create an array of products and use join() to display them as one sentence separated by commas.
let array3 = ["mobiles","laptop","tv","AC"]
console.log(array3.join(","));



///  String Methods — 8 Questions
// 18.Create a string "JavaScript" and print the character at index 4 using charAt().
let string = "JavaScript"
console.log(string.charAt(4));

// 19.Create a string and use charCodeAt() to find the character code of its first character.
let string2 = "python"
console.log(string2.charCodeAt(0));

// 20.Create a string containing "Hello JavaScript" and print its length.
let string3 = "Hello Javascript"
console.log(string3.length);

// 21.Create "JavaScript Developer" and use slice() to extract "JavaScript".
let string4 = "JavaScript Developer"
console.log(string4.slice(0,10));

// 22.Create a string containing lowercase text and convert it to uppercase using toUpperCase().
let string5 = "javascript"
console.log(string5.toUpperCase());

// 23.Create a string containing uppercase text and convert it to lowercase using toLowerCase().
let string6 = "DEVELOPER"
console.log(string6.toLowerCase());

// 24.Create a string with spaces before and after the text. Remove the extra spaces using trim().
let string7 = " FullStack "
console.log(string7.trim());

// 25.Take a sentence from the user using prompt() and use includes(), indexOf(), startsWith(), and endsWith() to check different parts of the sentence.
// let sentence = prompt("Enter a sentence:")
// console.log("sentence:", sentence);
// console.log(sentence.includes());
// console.log(sentence.indexOf());
// console.log(sentence.startsWith());
// console.log(sentence.endsWith());

// console.clear();

///Date Methods — 5 Questions
// 26.Create a new Date object and print the current:YearMonthDateDay
let data =new Date()
console.log(data.toLocaleDateString());


// 27.Create a new Date object and print the current:HoursMinutesSeconds
let date =new Date()
console.log(date.toLocaleTimeString());

// 28.Create a date and change its year using setFullYear().
let year = 2005
let date2 = new Date();
date2.setFullYear(year)
console.log(date2.getFullYear());
console.log(date2);

// 29.Create a date and change its month and date using setMonth() and setDate().
let month = 4
let date3 = 13

let data3 = new Date
data3.setMonth(month - 1)
data3.setDate(date3 )
console.log(data3);

// 30.Get the user's date of birth using prompt(), create a Date object, and find the day of the week on which they were born.

let year4 = prompt("enter your DOB year")
let month4 = prompt("enter your DOB month")
let date4 = prompt("enter your DOB date")

let data4 = new Date()
data4.setFullYear(year4)
data4.getMonth(month4)

data4.getDate(date4)

console.log(data4.getDay);

let daydata = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

alert(daydata[data4.getDay()])







