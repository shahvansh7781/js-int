//Callbacks, Promises, Async-Await

//1. Without callback

// function print1(params) {
//     console.log(1);
// }

// function print2(params) {
//     setTimeout(() => {
//         console.log(2);
//     }, 500);
// }

// function print3(params) {
//     console.log(3);
// }

// print1();
// print2();
// print3();

// So, without callback it prints 1,3,2 i.e JavaScript waits for none but we want till 2 is not printed 3 should not be printed i.e after completion of print2() function only print3() should be executed. i.e we want 1,2,3 in print.
// So, now Callbacks came into picture without it this is not possible. Function passed as parameter is called Callback.

//2. With Callback
// print3() is passed as callback to print2() and it ensures that when 2 is printed after that only print3() i.e here callback will be called.
function print1(params) {
  console.log(1);
}

function print2(print3) {
  setTimeout(() => {
    console.log(2);
    print3(print4); // print3 executed after printing 2 and passing print4 as callback
  }, 500);
}

function print3(print4) {
  console.log(3);
  print4(); // taking print4 as callback and print4 executed after printing 3
}
function print4(params) {
  console.log(4);
}
print1();
print2(print3);
// Here, we have print 1,2,3,4 in Synchronous manner with callbacks without callbacks it would print 1,3,4,2. Now, you can see we have passed callback for both 3,4 and suppose we have 100 functions like this then it would become so messy and this is called Callback Hell. Here, you can see we are passing 3 into 2 and 4 into 3 and if we have more than it would become messy and not readable so this is Callback Hell. Promises are solution to Callback Hell.

//Callback Hell example
// So, we are fetching user data and based on that data we are fetching more data so 2 calls are made

function callbackHell(params) {
  setTimeout(() => {
    // it takes some time to fetch user data(5sec)
    const user = { name: "Vansh" };
    console.log(user);
    setTimeout(() => {
      // now based on user data we are fetching more data it also takes some time(10sec)
      const data = { postId: 7 };
      console.log(data);
      //another settimeout for next call and so on ....
    }, 1000);
  }, 500);
}
callbackHell();
// We can see callback inside callback(settimeout inside settimeout) and this goes on

//Promises

// Async-Await
// It improves syntax and readability of Promises. Await keyword waits till promise is either rejected or resolved it doesn't execute further code. Async makes a function return a Promise and Await makes a function wait for Promise.
async function getData(params) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(1);
  console.log(data);
  console.log(2);
}
getData();
// printing will be 1,data,2 . This is what we wanted Synchronous execution even if there is an time taking operation
