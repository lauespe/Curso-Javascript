//  GREET THE USER 
let name = prompt("Welcome to IELTS Optimize! What is your name?");

function greeting(){
    alert(`Hi ${name}, I hope you find this website useful to prepare for the IELTS exam`);
}
greeting();

// 0- CHOOSE FROM THE 3 OPTIONS: 1.version, 2.score, 2.riddle

let introQuestion = prompt("What would you like to do?  1- I'd like to know which version of the exam I should do.  2- I'd like to know the estimate IELTS score band I could get.  3- I feel like playing. I'd like to do some riddles");

// 1- PURPOSE FOR TAKING THE EXAM 
if (introQuestion == 1) {
    
    let purpose = prompt(`Fantastic! What's the main purpose for taking the exam? Write a number from 1 to 6: 1. Live abroad 2. Work abroad3. Study abroad 4.Validate your university degree5. a personal challenge 6. Other`)

    if (purpose == 1||2) {
        alert("You have to take the IELTS General Training version");
    }else if (purpose == 3||4) {
        alert("You have to take the IELTS Academic version");
    }else if (purpose == 5) 
        alert("You could take either version. I'd suggest checking a mock exam of each version and decide which suits you better.");
}

// 2- CALCULATION OF YOUR ESTIMATE SCORE

if (introQuestion == 2) {
    
    let scoreRules= alert("CALCULATION OF YOUR IELTS GLOBAL SCORE BAND: First, you need to do a complete mock exam in the assigned time. Record the score you got in each of the 4 skills. Once you have these 4 score bands, you0ll be able to calculate your global score band."); 
    let listeningB = prompt("LISTENING BAND: From 1 to 9, which score band did you get in the listening part?");
    let readingB = prompt("READING BAND: From 1 to 9, which score band did you get in the reading part?");
    let speakingB = prompt("SPEAKING BAND: From 1 to 9, which score band did you get in the speaking part?");
    let writingB = prompt("WRITING BAND: From 1 to 9, which score band did you get in the writing part?");

    function average(listeningB, readingB, speakingB, writingB) {
        let globalScore = (parseInt(listeningB) + parseInt(readingB) + parseInt(speakingB) + parseInt(writingB)) / 4;
        return globalScore;
    }

let globalScore = average(listeningB, readingB, speakingB, writingB);
alert("Your estimate IELTS Global Score is " + globalScore);
}

//  3- GUESS THE RIDDLES

if (introQuestion == 3) {

    alert("Do you feel like playing? Let's start! You have 3 tries.");

    let riddle1;
    let riddle2;
    let riddle3;

    for (let i = 0; i < 3; i++) {
        riddle1 = prompt("What's the word that is spelled wrong in the dictionary?");
    
    if (riddle1.toLowerCase() !== "wrong") {
        alert("Sorry...wrong answer. You can do it better! Give it another try.");
    } else {
        alert("Well done! What a bright person you are!");
        break; 
    }
    }

    for (let i = 0; i < 3; i++) {
        riddle2 = prompt("What has 15 hearts but no other organs??");
    
    if (riddle2.toLowerCase() !== "cards" && riddle2.toLowerCase() && "deck of cards" && riddle2.toLowerCase() !== "a deck of cards") {
        alert("Oops! Incorrect answer. Why don't you try again?");
    } else {
        alert("Congratulation! You are unstoppable! Shall we move on to the last riddle?");
        break; 
    }
    }
    for (let i = 0; i < 3; i++) {
        riddle3 = prompt("What needs to be broken before you can use it?");
        if (riddle3.toLowerCase() !== "egg" && (riddle3.toLowerCase() !== "an egg")){
        alert("Sorry! That's not the answer. Give it another try!");
    } else {
        alert("You rock! Congrats! ");
        break; 
    }
}
}

