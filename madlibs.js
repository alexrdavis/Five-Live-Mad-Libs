/*
Madlibs Project:
Make a program that will take in user input from the consumer and then print out a Mad Lib to the console
*/

// Get name from user input
function getName() {
    const name = prompt("Person's name ")
    return name
}

// Get a noun from user input
function getNoun() {
    const noun = prompt("Enter a noun ")
    return noun
}

// Get an adjective from user input
function getAdjective() {
    const adjective = prompt("Enter an adjective (feeling) ")
    return adjective
}