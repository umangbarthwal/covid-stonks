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
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
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
        question: "How do you feel physically right now? ",
        answers: {
          a: "I feel physically normal",
          b: "I'm not feeling quite right",
          
        },
        correctAnswer: "b"
      },
  
      {
        question: "How do have a sore or painful throat? ",
        answers: {
          a: "Yes",
          b: "No",
          
        },
        correctAnswer: "a"
      },
        {
        question: "How do have a loss of smell/taste? ",
        answers: {
          a: "Yes",
          b: "No",
          
        },
        correctAnswer: "a"
      },
  
        {
        question: "How do have a unusual hoarse voice? ",
        answers: {
          a: "Yes",
          b: "No",
          
        },
        correctAnswer: "a"
      },
  
        {
        question: "Are you feeling any chest pain or tightness in your chest? ",
        answers: {
          a: "Yes",
          b: "No",
          
        },
        correctAnswer: "a"
      },
  
  
      {
        question: "Do you have a fever or feeling too hot? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
      {
        question: "Do you feel chills or shivers(feel too cold)? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
     
      {
       question: "Are you regularly taking any blood pressure medications? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
       {
       question: "Do you regularly take immunosuppressant medications (including steroids, methotrexate, biologic agents)? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
      {
       question: "Do you regularly take aspirin (baby aspirin or standard dose)? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
       {
       question: "Do you regularly take NSAIDs like ibuprofen, nurofen, diclofenac, naproxen?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
        {
       question: "Do you have a lung disease?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
        {
       question: "Do you have a kidney disease?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
       {
       question: "Are you living with cancer?",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
         {
       question: "In general, do you have any health problems that require you to limit your activities? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
           {
       question: "Do you have heart disease? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
           {
       question: "Do you have diabetes?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
          {
       question: "Do you have hayfever (seasonal allergies)?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
         {
       question: "Do you have eczema?  ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
  
  
       {
        question: "Are you experiencing dizziness or light headedness? ",
        answers: {
          a: "Yes",
          b: "No",
        },
        correctAnswer: "a"
      },
  
       {
        question: "Do you have a headache? ",
        answers: {
          a: "Yes",
          b: "No",
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
  