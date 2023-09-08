//What is Node.js?
//Node.js is JavaScript runtime built on Chrome's V8 engine.
//Node.js is a JavaScript running on server.
//Runtime environment is literally just the environment where our application is running

//History of Node.js
//Ryan Dahl took V8 engine and embedded in a C++ program and called it Node.exe then it was called Node.js

//What is V8 engine?
//It was build for chrome. It is Just-in-Time Compiler and not Interpreter.

//When to use Node.js?
//I/O bound apps, Realtime chat applications, Data streaming Apps.

//CPU intensive apps like gaming,video compression should not use Node.js because when heavy-task is running it blocks Node.js event loop from moving forward for longer period of time.

//Node.js is single-threaded and non-blocking i.e it can handle many requests at one time. Eg - We have three requests to fetch data one from disk then from database and other from Network. Now, let's say fetching data from disk requires 10sec then what do you think will Node.js wait for 10sec then process other request? No, Node.js will not wait it will handle next request. This happens because of its event loop.

//What is REPL?
// It can be used to experiment Node.js codes and to debug JS codes. It stands for Read,Eval,Print and Loop.

//fs module
//It is used to work with file system.
//writeFileSync() - If file does not exists then it will be created and if it exists then data will be overriden. This is synchronous method.
//appendFileSync() - It appends data to existing file and this is synchronous method.

//os module
//It is used to get information about operating system.

//path module
//It is used to work with directories and file paths.

//events module(Code Step by Step)
//Event is a signal and EventEmitter is the one who generates/emits the event. Simple example of event in JS is when we click button something should happen i.e particular code/function should execute. In Node.js we don't have button but we have API here
//Generating events
//To generate/create/emit event, emit()  method is used. Syntax - event.emit(event_name);

//Handling events
// To handle event, on() method is used. Syntax - event.on(event_name,function)
//event_name has name of event i.e which event to handle and function means what we want to do when this event occurs.

//We need to create object of EventEmitter class
const EventEmitter = require('events');
const event = new EventEmitter();
event.emit();
event.on();

//Streams
