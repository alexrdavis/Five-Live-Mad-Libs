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

// Get verb from user input
function getVerb() {
    const verb = prompt("Enter a verb ")
    return verb
}

// Get an animal from user input
function getAnimal() {
    const animal = prompt("Enter an animal ")
    return animal
}

// Get a color from user input
function getColor() {
    const color = prompt("Enter a color ")
    return color
}

// Get another verb, ending in "ing"
function getVerbing() {
    const verb = prompt("Enter a verb ending in ing ")
    return verb
}

// Get adverb from user input
function getAdverb() {
    const adverb = prompt("Enter an adverb (ending in ly) ")
    return adverb
}

// Get Number from user input
function getNumber() {
    const number = prompt("Enter a number ")
    return number
}

// Get time from user input
function getMeasureOfTime() {
    const time = prompt("Enter a measure of time (example: days, weeks, months) ")
    return time
}

// get silly word from user input
function getSillyWord() {
    const sillyWord = prompt("Enter a silly word ")
    return sillyWord
}


// Display (print to console)
function display() {
    let print = "This weekend I am going camping with " + getName() + ". I packed my lantern, sleeping bag, and " + getNoun() + ". I am so " + getAdjective() + " to " 
    + getVerb() + " in a tent. I am " + getAdjective() +  " we might see a " + getAnimal() + ", they are kind of dangerous. We are going to hike, fish and " + getVerb() + 
    ". I have heard that the " + getColor() + "lake is great for " + getVerbing() + ". Then we will " + getAdverb() + " hike through the forest for " + getNumber() + " " + getMeasureOfTime() + 
    ". If I see a " + getColor() + " " + getAnimal() + " while hiking, I am going to bring it home as a pet! At night we will tell " + getNumber() + " " + getSillyWord() + " stories and roast " +
    getNoun() + " around the campfire!"
    console.log(print)
}

// Call display function
display()