// const promptInstance = require('prompt-sync')({sigint:true});

const promptSync = require('prompt-sync');

const promptInstance = promptSync({
    sigint: true // allows CTRL+C to exit the app
});


let userInput = null;
let userEnteredNumber = false;

do {
    userInput = promptInstance("What is the coolest number in the universe? ");
    
    if (!parseInt(userInput) && !parseFloat(userInput)){
        // throw "user did not enter a number";
        throw new Error("user did not enter a number")
    }

    let userInputAsNumber = Number(userInput);

    if (userInputAsNumber === 42){
    console.log("the universe thanks you for figuring out the answer");
} else {
    console.log("the universe seems unfilfilled...");
}
 } while (!userEnteredNumber);

// helloWorld(userInput);

// let {messagesToShare} = require('./messageList');

// function helloWorld(someMessageToSay) {
//     console.log(someMessageToSay);
// }

// helloWorld("hello there!");

// for (const message of messagesToShare) {
//     helloWorld(message);
// }