var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Which country features a maple leaf on its flag?",
    choices: ["USA", "Canada", "Mexico", "Iran"],
    answer: "Canada"
  },
  {
    title: "Who is Winnie the Pooh's gloomy donkey friend?",
    choices: ["Piglet", "Tigger", "Eeyore", "Christopher Robin"],
    answer: "Eeyore"
  },
  {
    title:
      "Which has the best Donkey Kong Country video game music ever for SNES?",
    choices: [
      "Donkey Kong Country",
      "Donkey Kong Country 2: Diddy's Kong Quest",
      "Donkey Kong Country 3: Dixie's Double Trouble",
      "Road Rash"
    ],
    answer: "Donkey Kong Country 2: Diddy's Kong Quest"
  }
];

var id = 0;
let incrementFromZero = 0
var time = 100;
var score = 0;
let buttonTemplate;
var buttonText = document.getElementsByClassName("choice-button")

  
const choices = (objIndex, arrIndex) => { questions.forEach(() => {
  if (objIndex === 5) {
    // Create card template variable
    // should return the template needed for the last card
    // template literal variables should store high scores and stuff
    // select form from bootstramp to enter initials
      // once submitted, set to local storage
      // if desired, clear local storage
  }
  questions[objIndex].choices[arrIndex]
  buttonTemplate = 
      `<button
        type="button"
        class="btn btn-light btn-lg col-sm-3 d-block choice-button my-4 mx-auto"
      >
      <span class="card-text ">
        <small 
          class="text-muted"> ${questions[objIndex].choices[arrIndex]} 
        </small>
      </span>
      </button>`
  });
  return buttonTemplate;
}

$(document).ready(() => {

// start timer/quiz function
// ====================================================================================================
  $("#start-quiz").on("click", () => {
    var timeInterval = setInterval(function() {
      if (time === 0) {
        $("#display-time").text(time);
        clearInterval(timeInterval);
      } else {
        $("#display-time").text(time);
        time--;
      }
    }, 1000);
    hideCard();
    createCard(0);
  });
}); // Do not erase. End of jQuery;

const createCard = (n) => {
  $(".contains-cards").html(`
    <div class="card">
      <div class="card-body" id="question-card">
        <h5 class="card-title d-flex justify-content-center">${question(n)}</h5>
        <div id="button-container">
        ${choices(n,0)}
        ${choices(n,1)}
        ${choices(n,2)}
        ${choices(n,3)}
        </div>
      </div>
    </div>`);
    incrementId()
};

// incrementor
// ====================================================================================================
const incrementId = () => {
  let nextQuestionId = $(".choice-button")
  nextQuestionId.on("click", () => {
    id++;
    nextQuestion(id);
  })
}

// next question after incrementation
// ====================================================================================================
const nextQuestion = (n) => {
  if (n === 1) {
    clickNextQuestion(n);
    console.log("nextQuestion function at id 1")
  }
  if (n === 2) {
    clickNextQuestion(n);
    console.log("nextQuestion function at id 2")
  } 
  if (n === 3) {
    clickNextQuestion(n);
    console.log("nextQuestion function at id 3")
  }
  if (n === 4) {
    clickNextQuestion(n);
    console.log("nextQuestion function at id 4")
  }
  if (n === 5) {
    clickNextQuestion(n);
    console.log("nextQuestion function at id 5")
  }
}

// click next question
// ====================================================================================================
const clickNextQuestion = (n) => {
  // if (id === n) {
    buttonText[0].addEventListener("click", answerChecker(id, incrementFromZero))
  // }
}

// checks answers
// ====================================================================================================
const answerChecker = (idParam, answerIndex) => {

  let buttonClicked = $(event.target)[0].innerText.toLowerCase().toString().trim()
  let correctAnswer = questions[answerIndex].answer.toLowerCase().toString().trim()
  
  incrementFromZero++;

  switch (idParam , buttonClicked) {

    case 1 , correctAnswer:
      score++;
      createCard(idParam)
    break;

    case 2 , correctAnswer:
      score++;
      createCard(idParam)
    break;

    case 3 , correctAnswer:
      score++;
      createCard(idParam)
    break;

    case 4 , correctAnswer:
      score++;
      createCard(idParam)
    break;

    case 5 , correctAnswer:
      score++;
      createCard(idParam)
    break;

    default:
      console.log("DEFAULT")
      createCard(idParam)
      time -= 15;
  } 
}

// returns answer for each question
// ====================================================================================================
const returnAnswer = (n) => {
  if (n < 5) {
    // return console.log(n)
    return questions[n].answer.toLowerCase().toString().trim()
  } else
  if (n = 5) {
    return questions[4].answer.toLowerCase().toString().trim()
  }
}

// generates questions
// ====================================================================================================
const question = (objIndex) => {
  if (objIndex >= 5) {
    console.log("You've reached the end of your quiz.")
    return "";
  } else {
    questions.forEach(() => {
      questions[objIndex].title
    })
    return questions[objIndex].title
  }
}

// set local storage area
// ====================================================================================================
localStorage.setItem("name", "robert");
$("#appendStorage").text(localStorage.getItem("name"));

// dynamic css events
// ====================================================================================================
const hideCard = () => {
  $("#start-quiz-text").slideUp(); //start quiz card fadeout
};

const hideButton = () => {
  $(event.currentTarget).slideUp(); //start quiz button fadeout. Don't think I need this.
};

const answeredCorrectlyStyleChange = () => {
  // $("#start-quiz-text").css("border", "3px solid #9CC7C5"); //start quiz card border green
  $(event.currentTarget).css("border", "3px solid #8CC7C5"); //start quiz button border green
};








  
    // console.log(buttonText[0].innerText);
    // console.log(document.getElementsByClassName("choice-button"));
    // console.log(buttonText[0].addEventListener(("click"), answerChecker()))


    // generates questions
// ====================================================================================================
// const answerGenerator = (objIndex) => {
//   console.log(objIndex)
//   questions.forEach(() => {
//     questions[objIndex].answer
//   })
//   return questions[objIndex].answer.toLowerCase().trim()
// }

    // if (  !== buttonText[0].innerText)

    // console.log($(".choice-button").innerText())

    // $( "button" ).click(function() {
    //   if ($( this ).val() === "strings") {
    //     console.log("yess, here.")
    //   };
    // });
    // if ($(".text-muted").val() === "string")
    // console.log("trreeeueuee")
    // $(".text-muted").on("click", console.log("hi"))


// buttonPop()  

// const buttonChoices = (n) => {
//   buttonDiv = $("#button-container")
//     for (let i = 0; i < 5; i++) {
//       let popUpChoices = questions[0].choices[i]
//       console.log(popUpChoices)
//       button = buttonDiv.html(`<button
//       id="first-button"
//       type="button"
//       class="btn btn-light btn-lg col-sm-3 buttons"
//       >
//         <span class="card-text">
//           <small 
//             class="text-muted"> ${questions[0].choices[i]} 
//             ${console.log(popUpChoices)}
//           </small>
//         </span>
//       </button>`)
//     }
//     return button;
//   }






  // if (buttonClicked === questions[0].answer) {
  //   score++;
  //   console.log(score)
  //   createCard(1)
  // } else if (buttonClicked !== questions[0].answer) {
  //   console.log("wrong answer")
  //   // no incrementation of score
  //   createCard(1)
  // } else

  // if ((buttonClicked === questions[1].answer)) {
  //   score++;
  //   console.log(score)
  //   createCard(2)
  // } else if (buttonClicked !== questions[1].answer) {
  //   // no incrementation of score
  //   createCard(2)
  // }

  // if ((buttonClicked === returnAnswer(2))) {
  //   score++;
  //   createCard(3)
  // } else {
  //   // no incrementation of score
  //   createCard(3)
  // }
  // if ((buttonClicked === returnAnswer(3))) {
  //   score++;
  //   createCard(4)
  // } else {
  //   // no incrementation of score
  //   createCard(4)
  // }
  // if ((buttonClicked === returnAnswer(4))) {
  //   score++;
  //   createCard(5)
  // } else {
  //   // no incrementation of score
  //   createCard(5)
  // }
  // if ((buttonClicked === returnAnswer(5))) {
  //   score++;
  //   console.log(score)
  //   console.log(returnAnswer(5))
  // }

  // let answerToQuestionOne = questions[0].answer.toLowerCase().toString().trim()
  // let answerToQuestionTwo = questions[1].answer.toLowerCase().toString().trim()
  // let answerToQuestionThree = questions[2].answer.toLowerCase().toString().trim()
  // let answerToQuestionFour = questions[3].answer.toLowerCase().toString().trim()
  // let answerToQuestionFive = questions[4].answer.toLowerCase().toString().trim()

  // logic for next-question button
  // ====================================================================================================
    // next-question button dynamically populates
    // increment each time it is clicked by + 1
    // each click registers and  will have a corresponding id to match the questions array


  // try to make this call outside of the function.
//   const questionGenerator2 = (element, n) => {
//     let answerChoices;
//     for (let i = 0; i < element.length; i++) {
//       answerChoices += element[n].choices[i]; 
//     }
//     console.log(answerChoices);
//   };
//   questionGenerator2(questions, 0);



// const buttonPop = () => {
//   // console.log($(".contains-cards"))  
//   return $(".contains-cards").html( 
//       `<button
//       id="first-button"
//       type="button"
//       class="btn btn-light btn-lg col-sm-3 buttons"
//       >
//         <span class="card-text">
//           <small 
//             class="text-muted"> 

//           </small>
//         </span>
//       </button>`
//     )
// }

// ${choices(3, 0)}
// ${choices(3, 1)}
// ${choices(3, 2)}
// ${choices(3, 3)}