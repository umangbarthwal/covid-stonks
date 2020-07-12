(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
        
        }
        // if answer is wrong or blank
       
      });
  
      // show number of correct answers out of total
      if(numCorrect > 8){
        resultsContainer.innerHTML = ` Yay! You are healthy `;
      }
      else{
         resultsContainer.innerHTML = `You should go to the locate testing center and get a checkup at your nearest testing center soon! `;
      }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Little interest or pleasure in doing things",
        answers: {
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
          
        },
        correctAnswer: "a"
      },
  
      {
         question: " Feeling down, depressed, or hopeless",
        answers:{
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
          
        },
        correctAnswer: "b"
      },
        {
      question: "Trouble falling or staying asleep, or sleeping too much",
        answers: {
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
          
          
        },
        correctAnswer: "b"
      },
  
      {
        question: "Trouble falling or staying asleep, or sleeping too much",
        answers: {
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
          
          
        },
        correctAnswer: "b"
      },
  
        {
        question: "Trouble concentrating on things, such as reading the newspaper or watching television ",
        answers: {
          a: "Yes",
          b: "No",
          
        },
        correctAnswer: "b"
      },
  
  
      {
        question: "Feeling tired or having little energy ",
        answers: {
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
        },
        correctAnswer: "a"
      },
      {
        question: "Poor appetite or overeating ",
        answers: {
          a: "Not at all",
          b: "Several days",
          c: "More than half the days",
          d:"Nearly every day",
        },
        correctAnswer: "a"
      },
     
      {
       question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "b"
      },
  
     
  
      {
       question: "Trouble concentrating on things, such as reading the newspaper or watching television ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "b"
      },
  
      
  
      
  
           {
       question: "Moving or speaking so slowly that other people could have noticed ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "b"
      },
  
       
  
  
  
       {
        question: "Thoughts that you would be better off dead, or of hurting yourself ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "b"
      },
  
       {
        question: "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people? ",
        answers: {
          a: "Not at all",
          b: "Nearly every day",
        },
        correctAnswer: "a"
      },
  
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  