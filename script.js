//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
/*
//Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});
*/
/*
//Primitives vs objects
var a = 23;
var b = a;
a = 46;

console.log(a,b);


//objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age, obj2.age);


//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San francisco';
}

change(age, obj);

console.log (age, obj.city);

//passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr,  fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el) {
    return el >= 18;
}

function calculateAge(el) {
    return 2016 - el;
}

function maxHearRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHearRate);
console.log(ages);
console.log(rates);

// Functions returning another function

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');

*/

// IIFE
/*
function game() {
    var score = Math.random * 10;
    console.log(score >= 5);
}
game();
*/
/*
(function () {
    var score = Math.random * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

//Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
retirementGermany(1990);
var retirementIceland = retirement(67);
retirementIceland(1990);

//retirement(66)(1990);
*/
// Functions returning another function
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');
*/
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('john');
interviewQuestion('designer')('john');
interviewQuestion('not sure')('john');
var interviewQuestionJohn = interviewQuestion('teacher');
interviewQuestionJohn('John');


function interviewQuestion() {
    return function(job, name) {
        if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion()('designer', 'Mark');
*/

//Bind, Call and Apply

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

//Global variable for score
var score = 0;

//Function prototype for question object
var genericQuestion = function (question, answers, answer) {
    this.question = question; 
    this.answers = answers;
    this.correctAnswer = answer;
}

//Prototype method to print object to console
genericQuestion.prototype.printQuestion = function () {
    //print question to console
    console.log(this.question);
    
    //print all possible answers with number
    for(i=0;i<this.answers.length; i++) {
        console.log(i+1 + ': ' + this.answers[i]);
    }
}

genericQuestion.prototype.printScore = function () {
    console.log('Score: ' + score);
}

//Prompt the user to determine whether the correct answer was selected
//If correctly selected, state so, if not, respond with correct answer
genericQuestion.prototype.checkAnswer = function (userAnswer) {
    if (userAnswer == this.correctAnswer) {
        score += 1;
        console.log("Correct answer was selected.");
        this.printScore();
        //console.log("***************************");
        console.log('');
    } else if (userAnswer != this.correctAnswer && userAnswer in this.answers) {
        console.log('Incorrect answer. Correct answer is ' + (this.correctAnswer +1) + '.');
        this.printScore();
        //console.log("***************************");
        console.log('');
    } else {
        console.log('Please choose an answer from the listed choices');
        this.printScore();
        //console.log("***************************");
        console.log('');
    }
}
/*
(function (question, answers, answer) {
    this.question = question; 
    this.answers = answers;
    this.correctAnswer = answer;
    this.printQuestion = function () {
        //print question to console
        console.log(this.question);
        
        //print all possible answers with number
        for(i=0;i<this.answers.length; i++) {
            console.log(i+1 + ': ' + this.answers[i]);
        }
    }
    this.checkAnswer = function (userAnswer) {
        if (userAnswer == this.correctAnswer) {
            console.log("Correct answer was selected.");
        } else if (userAnswer != this.correctAnswer && userAnswer in this.answers) {
            console.log('Incorrect answer. Correct answer is ' + this.correctAnswer + '.');
        } else {
            console.log('Please choose an answer from the listed choices');
        }
    }
})('What country do you live in?',  ['Canada','USA', 'Israel', 'Ukraine'],  0);
*/
//Pick a number from 0 to 4 randomly
function randomNumber () {
    return Math.floor(Math.random() * 5);
}

//Create 5 questions
var firstQuestion = new genericQuestion('What country do you live in?',  ['Canada','USA', 'Israel', 'Ukraine'],  0);
var secondQuestion = new genericQuestion('What is your favourite food?',  ['Fish','Shrimp', 'Sushi', 'Humus'],  3);
var thirdQuestion = new genericQuestion('What city do you live in?',  ['Toronto','Stouffville', 'Markham', 'Ottawa'],  1);
var fourthQuestion = new genericQuestion('What continent do you live in?',  ['Africa','North America', 'Asia', 'Europe'],  1);
var fifthQuestion = new genericQuestion('What planet do you live in?',  ['Mars','Earth', 'Uranus', 'Venus'],  1);

// create a question array so they can be randomly selected
var questionArray = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion];

nextRandomQuestion();

//Function to choose the next random question
function nextRandomQuestion () {
    //Choose a random question and print it to console 
    var randomNum = randomNumber();
    questionArray[randomNum].printQuestion();

    //Prompt user for answer, and get response
    var userAnswer = prompt('Type the number of the correct answer.');

    //If user chooses to exit, end question loop
    if (userAnswer === 'exit') {
        return;
    } else {
        //check answer and provide feedback to user
        questionArray[randomNum].checkAnswer(userAnswer-1);
        nextRandomQuestion();
    }
}