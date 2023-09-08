// Node.js is a JavaScript runtime which allows to run JavaScript outside of browser i.e it allows to run JavaScript on machine just like C, C++ 

// let vs var vs const
// let and const have block scope while var have function scope. let and const can't be hoisted while var can be hoisted.

// undefined
// let name; // if we print this it will be undefined. So, if you declare any variable without it's value it will get undefined.

// null vs undefined
// null is representation of empty value(null:- undefined nahi hai woh khali hai). undefined means we have declared only variable and not assigned any value to it.

// Data types
// object,number,string,boolean,null,undefined,symbol
// Symbol is a primitive data-type that represents a unique value. It can be used to create unique property keys in objects.
// typeof Date = object, typeof null = object, typeof undefined = undefined

const n = "33abc";
const num = Number(n);
console.log(typeof num); // number
console.log(num); // NaN , if there was undefined instead of 33abc then also it will give NaN

const score = null;
const scoreNum = Number(score);
console.log(typeof scoreNum); // number
console.log(scoreNum); // 0

// "33" => 33
// null => 0
// "vansh" => NaN
// undefined => NaN
// true => 1

console.log("7"-"3"); // 4 as '-' operator automatically converts string to number
console.log("7"+"3"); // 73 as '+'opeartor concates it can't convert to number
console.log("7"-3+4); // 8
console.log("7"+3+4); // 734
console.log(7+3+"4"); // 104

// Memory Allocation(Stack and Heap)
// Primitive data types will be allocated Stack memory while Non-Primitive data types will be allocated Heap Memory. Anything stored in Stack we will get copy of that while in Heap we will get reference of that.
// So, For Primitive we get copy so original value can't be changed but for Non-Primitive we get reference so original value gets changed.
// Eg - 
let a = "2";
let b = a;
b = "5";
console.log(b); //5
console.log(a); // 2 ; So, if we changed b , a was not changed 

const ab = [1,2,3,4];
const bc = ab;
bc[1] = 7;
console.log(ab); // changed bc and ab also changed(Non-primitive, Heap)
console.log(bc);

// Strings
// typeof string; // object
// slice vs substring
// slice() allows -ve index while substring() doesn't allows
const name1 = "vansh-shah";
console.log(name1.split('-')); // string to array, splits from '-'

console.log(Math.ceil(Math.random()*6)); // 1 to 6 random numbers generator

//Arrays
// JavaScript array-copy instructions create shallow copies i.e same reference will be shared. Change in new array will change original array. Deep copy doesn't share same reference.
const role = "admin";
const arr = [...role]; // string to array
console.log(arr);
const names = ["Msdhoni","Raina","Gambhir","Jadeja"];
const newName = names.slice(0,2); // selected array elements as a new array
console.log("A",names);
console.log("B",newName);
const newNames = names.splice(0,2); // returns array containing elements that were deleted
console.log("C",names);
console.log("D",newNames);
//slice vs splice - Slice doesn't delete array elements while splice deletes and manipulates original array

const smallNos = [1,2,3,4,5];
const bigNos = [6,7,8,9,10];
const newNos = [...smallNos,...bigNos]; // concat 2 or more arrays
console.log(newNos);

// Symbol
const sym = Symbol("sym1");
console.log(typeof sym);
console.log(sym);

//Objects
const obj1 = {
    name:"Vansh",
    age:21,
    [sym]:"sym1"
}
console.log(obj1[sym]);
console.log(obj1);

const obj2 = {
    1:'a',
    2:'b',
    3:'c'
}
const obj3 = {
    4:'d',
    5:'e'
}
const newObj = {...obj2,...obj3}; // concat two objects
console.log(newObj);
const {name} = obj1; // object destructuring
console.log(name);

// Functions
function cartPrice(val1,...prices) { // rest operator to pass multiple values to function
    if (prices.includes(200)) { // user array methods
        console.log("Minimum price");
    }
    return prices // it has became array now
}
//val1 = 200 and prices=[400,500]
console.log(cartPrice(200,400,500)); // returns array

//Nullish coalescing operator (??)
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//for-of and for-in loops
// for-in loops iterates keys

// For object:- for-in loop is used
for(const val in obj2){
    console.log(val); // prints keys
}
for(const val in obj2){
    console.log(obj2[val]); // prints values
}

// For arrays:- both for-of and for-in loop can be used
//names is array
for(const name in names){
console.log(name); // prints keys i.e for arrays keys are 0,1,2...
}
for(const name in names){
    console.log(names[name]); // prints values
}
// for-of loop directly iterates values
for(const name of names){
    console.log(name); // prints values
}

//forEach() vs map()
//The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array

//filter,map,reduce
//1. filter
// can be used to filter values in array by giving conditions
const nums = [1,2,3,4,5,6,7,8,9,10];
// val means each value
const filterNum = nums.filter((val)=>{return val>=4})
console.log(filterNum);

//2. map
// can be used to perform some operation on each value and returns new array
const addOne = nums.map((val)=>{
    return val*2
})
console.log(addOne); // multiplies each array element with 2 and returns new array

//3. reduce
// can be used to perform some operation when some initial value is given and it returns one single value after doing operations
// initially initialValue is passed as 0 then initialValue becomes what ans is returned(here initialVal+currVal) and currValue is value of each array element every time one by one
const ans = nums.reduce((acc,currValue)=>{
console.log(`initialVal: ${acc} and currVal: ${currValue}`);
return acc+currValue;
},0)
console.log(ans);

// What is CORS?
// cors allow us to request data from another URL. cors error comes when we try to fetch data from different URL. Browser uses same origin policy so it blocks data from another URL. So our request should go to same origin. When our request goes to different url it is called cross origin request. Eg - If our site is on different origin and its css files and images are on different origin then we will get cors error for images and css files browser will block them and it is called cors error.

// Shadowing
// If we have same name variable outside and inside a block then the variable present inside block will shadow outside one. Eg - var is shadowing let means var is outside block and let is inside block.
// Illegal Shadowing
// We can't shadow let using var i.e let outside block and var inside block is not allowed
// Eg - 
// function name(params) {
    
//     let b="Hi";
//     if (true) {
//         var b = "Hello";
//         console.log(b);
//     }
    
// }

//=> var vs let vs const
//Declaration
//Allowed   //Not Allowed(let and const both)
// var a1;  // let b;
// var a1;  // let b;

//Declaration without Initialization
//Allowed in var and let but not in const

//Re-initialization
//Not allowed in const only

//Hoisting
// var is hoisted and let,const are hoisted but in Temporal Dead Zone. let and const are not hoisted like var.
// Temporal Dead Zone is time between declaration and initialization of let and const variables. It means they are in scope but not declared yet.

//map()
//It is used to create new array from existing array by appying some function to each element

//filter()
// It applies some condition to each element and if condition matches it pushes that element to ans array

//reduce()
// It reduces array of values to one value i.e it returns one value.
//It has two parameters callback and initial value. Its callback has 2 parameters majorly accumulator and current element of array. accumulator value is result of previous calculation,initially it has value equal to initial value.

//map() vs forEach()
//map() doesn't modify original array while forEach() modifies original array. map() returns something while forEach() doesn't even if we add return statement

//Functions
//What are First class functions?
// It means functions can be treated like variables are called first class functions. It means what a variable can do, function can also do that. i.e can be passed as parameter can be declared, can be returned etc.
//What is IIFE?
// It is immediately invoked function expression. Means wrap a function inside () and then immediately call it i.e (); Everything inside IIFE is private so even variable with 'var' keyword can't be accessed outside
// Eg - 
(function sum(num) {
    return num+num;
})(5)
//Parameters vs Arguments
//Things passed during function call are arguments and when we receive that are called parameters.
function t(num) { // parameters
    
}
t(5); // arguments
// Spread vs Rest operators
function t(...num) { // rest
    console.log(num);
}
let arr2=[5,6,7]
t(...arr2); // spread
// In Parameters, rest should always be the last one. spread can be anywhere
// Eg - 
function t(a,...num,b) { // not allowed
    console.log(num);
}
let arr3=[5,6,7]
t(...arr3);

function t(a,num,...b) { // allowed i.e at last always
    console.log(num);
}
let arr4=[5,6,7]
t(...arr4);
//Arrow Function vs Normal Function
// this keyword in Arrow function points to global object so we can't use this keyword inside arrow function, while this keyword in Normal function points to current context not global
//Eg - 
function normal() {
    console.log(arguments); // returns 1,2,4 even though we have not taken in parameters
}
normal(1,2,4);

const arrow = ()=>{
    console.log(arguments); // returns error 
}
arrow(1,2,3);
//So, this is one difference between normal and arrow functions

//Lexical Scope in JavaScript
// A variable defined outside the function can be accessible inside of another function defined after the variable declaration
// Eg - 
function outer(params) {
    var name="Vansh"
    function inner(params) {
        console.log(name);
    }
    inner();
}
outer();
//Closures
//Closure gives you access to outer function's scope from an inner function. So, in above example inner() is called an closure. In JavaScript, everytime we create function closure is created because it binds itself to its environment or its lexical scope so inner function have access to its parent's scope. The instance of inner function we wrote maintains a reference to its lexical environment within which 'name' variable exists.
// A closure(here inner function) has access to local scope(own),outer function scope,global scope.
// Why Closure?
// Closure makes it possible for a function to have private variables.

//What is Currying?
// It is a function that takes one argument at a time and returns a new function expecting the next argument. Currying functions are created by chaining closures by returning their inner functions simultaneously. f(a,b,c) is converted to f(a)(b)(c)
//Why Currying?
//It helps in avoiding same variable again and again. It makes a function pure so possibility of errors is less.
//Eg - Normal
function sum1(a,b,c) {
    return a+b+c
}
sum1(4,5,6);
//Eg - Currying
function sum2(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}
sum2(4)(5)(6);

//JavaScript Objects
//Object is collection of properties which have key-value pair relation.
// delete keyword is used when we want to delete property from object and it will not work for a local variable.
//Dynamic/Computed properties
//Eg - 
const prop="firstName"
const ageProp="age"
const userName = {
    [prop]:"Vansh",
    [ageProp]:21
}
//JSON.stringify() and JSON.parse()
// To convert object to String, JSON.stringify() is used. To convert String(of object format) to object, JSON.parse() is used.
// Why it is required?
// To set item in local storage direct object can't be used otherwise it gives [object Object] so it is to be converted to string and vice-versa.
//Object Referencing
//It is shallow copy so change in original object will change new object.
//Eg - 
let c={
    message:"Hey"
}
let d;
d=c; // just reference given not all properties i.e shallow copy
c.message="Hello"
console.log(d.message); //Hello, as changes in c will be reflected in d also
//How to clone a object?
//First stringify it and then parse it
//Eg - 
const oldObj = {
    name:"Vansh"
}
const cloneObj = JSON.parse(JSON.stringify(oldObj));
// 2nd way is destructuring
const cloneObj1 = {...oldObj};

//'this' keyword
//It depends on context in which it is currently in. 'this' keyword is reference to an object
//Global 
//Eg - 
console.log(this); // Here, it is Global context so it prints window object.
//Inside Function
//Eg - 
function test(params) {
    console.log(this); //Window object - It will target parent object and parent object for this function is window object and if this function would have been inside any object then it would have targetted that object. Normal function point it to its immediate parent. If we have arrow function inside object and we try to print 'this' then we will get window object i.e global object and not current object. But if we have object and then inside object we have normal function and inside normal function if we have arrow function and if we print 'this' then arrow function will not print window object instead it will print current object b'coz of it's parent function. In JavaScript it gives window object but in Node it will give global object.
}
test();

//Imp
//Call,bind,apply and this in JavaScript(developedbyed Youtube - importance of 'this')
//call passes current execution context to other function.

// Trick for 'this' keyword in JavaScript
//If we are invoking/calling a function see on left side which object through we are invoking and 'this' will reference that object only.
//Eg - user.details() - We are invoking function and on left side we have user object so 'this' keyword will refer to user object.
//Eg - details() - We are invoking function but on left we don't have any object so 'this' keyword will refer to window object i.e global object.

//bind in JavaScript
//Yeh koi bhi object i.e object jo hum argument mai pass karenge usko jis function par bind call kara hai usse bind karega means ab woh function mai agar 'this' call kiya toh woh 'this' yeh jo object bind kara usko reference karega. bind will always create new instance of function that calls bind so we need to store it somewhere.

//Call in JavaScript 
//Now, we want that we don't want to create instance everytime and we want to save memory space. We want something that we can invoke directly. In this case call() is used. So, here we don't need to save any instance. We directly have to invoke call() on that function by passing object. Also,we can pass additional arguments one by one after object.
// Syntax - function_name.call(object,arg1,arg2,...)
//  Eg - details.call(vansh)
// Here, vansh is object and function is details.

//Apply
//It is similar to call() just one change is that additional arguments are passed in single array instead of one by one
//Syntax - function_name.apply(object,[arg1,arg2,..])

//'this' with Arrow functions
// Arrow functions don't have their own 'this' binding

//Debouncing and Throttling
//Debouncing
//So, if we go to any ecommerce site and search for products then when we are continuosly typing it doesn't show us search results but when we stop for some seconds(wait time) after that api call is done and then it shows us the search results/suggestions. This is Debouncing. It helps us to optimize certain events. If we make api call on every letter we type then there will be many unnecessary api calls on backend server.So, Debouncing limits execution of function call and waits for certain time before running it again.

//Throttling
//It is technique to limit event execution of event handler function even when event is triggered continously.
//It is used in Twitter,Instagram etc many sites. So, suppose we are scrolling and continously scrolling feed then what twiiter and instagram does is that it gives us new posts continuosly. So, here throttling is used so it checks that if from bottom we have reached to some pixels or not like 500px or not and if we have reached till end then api call is made and we get new posts. So, this gives us feature of Infinite scrolling. So, in Throttling also we don't monitor it for every single scroll otherwise there will be many event calls(as scroll is event) at once. So, we monitor it when we have reached at bottom of screen i.e some pixels left to reach bottom.

//debounce can be implemented using library of lodash. It has method called debounce. This debounce method takes function and wait time as parameters. Same is for throttle, lodash has method for it.

//Promises,Async/Await
//JavaScript is single threaded so it can execute code in parallel. So, it first executes synchronous code then it executes async code like setTimeout etc. So, even if we keep 0 sec in setTimeout it will execute afterwards only as it is part of Web API. Even API call is also async code so meanwhile it is fetching data from backend i.e API call is made it will execute synchronous code along side it will not wait. So, JavaScript first executes all synchronous code then only it will execute async code.
//Promises.all() - It gives us result of all resolved promises only so if anyone of promise gets rejected then all will get rejected.
//Promises.allSettled() - It gives us all Promises rejected and resolved also even if anyone gets rejected.