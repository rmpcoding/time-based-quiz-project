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
  var time = 100;
  var questionOne = questions[0].title;
  var score; //use this to add scores
  let buttonTemplate;
  var buttonText = document.getElementsByClassName("choice-button")

  
  const choices = (objIndex, arrIndex) => { questions.forEach(() => {
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
  // id=n;
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
    // console.log($(".choice-button").textContent())
    clickNextQuestion(id);
    // check answers via function
};


// generates questions
// ====================================================================================================
const answerGenerator = (objIndex) => {
  questions.forEach(() => {
    questions[objIndex].answer
  })
  return questions[objIndex].answer.toLowerCase().trim()
}


const answerChecker = (n) => {
  console.log(n)
  console.log(id)
  console.log(answerGenerator(id))
  answerGenerator(n);
  let buttonClicked = $(event.currentTarget)[0].innerText.toLowerCase().toString().trim()
    if (buttonClicked === answerGenerator(n)) {
      console.log(true)
      // move onto next question with id param set as 2;
      // no penalty
        // add one to score;
    } else {
      console.log(false)
      // move onto next question with id param set as 2;
      // penalty
        // do not add one to score
    }
  }

  const clickNextQuestion = (n) => {
    if (id === 1) {
      console.log("I'm able to do it;")
    }
    buttonText[0].addEventListener("click", answerChecker(n))
  }

  const incrementId = () => {
    let nextQuestionId = $(".choice-button")
    nextQuestionId.on("click", () => {
      id+=1;
      nextQuestion(id);
    })
  }

  const nextQuestion = (n) => {
    console.log(id)
    if (n === 1) {
      createCard(n)
      console.log("nextQuestion function at id 1")
    }
    if (id === 2) {
      createCard(2)
      console.log("nextQuestion function at id 2")
    } 
    if (id === 3) {
      createCard(3)
      console.log("nextQuestion function at id 3")
    }
    if (id === 4) {
      createCard(4)
      console.log("nextQuestion function at id 4")
    }
  }

// generates questions
// ====================================================================================================
const question = (objIndex) => {
  questions.forEach(() => {
    questions[objIndex].title
  })
  return questions[objIndex].title
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