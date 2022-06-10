// ARRAY OF QUESTIONS AND ANSWERS 
    const ArrayOfQuestions = [
        {
            question : '<b>1) What is the name of your school?</b>',
            opt : ' UNIBEN',
            opt1 : ' UNICAL',
            opt2 : ' UNIJOS',
            opt3 : ' UNIPORT',
            correctAnswer : ' UNIBEN',
        },
        {
            question : '<b>2) Which of these is not an element of design?</b>',
            opt : ' Balance',
            opt1 : ' Proportion',
            opt2 : ' Rhythm',
            opt3 : ' Size',
            correctAnswer : ' Size',
        },
        {
            question : '<b>3) Which of these is a part of design process?</b>',
            opt : ' Balance',
            opt1 : ' Survey',
            opt2 : ' Elevation',
            opt3 : ' Conceptualization',
            correctAnswer : ' Conceptualization',
        },
        {
            question : '<b>4) Which of the following names refers to a style in part of Europe that could be considered Art Nouveau?</b>',
            opt : ' Impressionism',
            opt1 : ' Glascow style',
            opt2 : ' Art Brut',
            opt3 : ' Renaissance Revival',
            correctAnswer : ' Glascow style',
        },
        {
            question : '<b>5) Of the following elements of style, which would NOT be considered Art Nouveau?</b>',
            opt : ' Rounded, curving forms',
            opt1 : ' Swirling nature-influenced designs',
            opt2 : ' Symmetrical classical columns',
            opt3 : ' Colorful Asian design elements',
            correctAnswer : ' Symmetrical classical columns',
        },
        {
            question : '<b>6) which of this is the odd one out?</b>',
            opt : ' Time',
            opt1 : ' Proportion',
            opt2 : ' Balance',
            opt3 : ' Scale',
            correctAnswer : ' Time',
        },
        {
            question : '<b>7) Do you think you can be a good developer?</b>',
            opt : ' It depends',
            opt1 : ' I believe so',
            opt2 : ' Hopefully',
            opt3 : ' By the grace of Almighty God',
            correctAnswer : ' Hopefully',
        },
        {
            question : '<b>8) Functional components are static</b>',
            opt : ' True ',
            opt1 : ' Maybe',
            opt2 : ' False',
            opt3 : "I don't know",
            correctAnswer : ' False',
        },
        {
            question : '<b>9) which of these is not associated with MERN stack?</b>',
            opt : ' Django DB',
            opt1 : ' Mongo DB',
            opt2 : ' Express',
            opt3 : ' React',
            correctAnswer : ' Django DB',
        },
        {
            question : '<b>10) Where is Alabian located?</b>',
            opt : ' Ikeja',
            opt1 : ' Surulere',
            opt2 : ' Mile 12',
            opt3 : ' Agege',
            correctAnswer : ' Ikeja',
        },
    ]

//DECLARE THE VARIABLES
    const question = document.getElementById('question')
    const options = document.getElementById('options')
    const button = document.getElementById('button')
    const btn = document.getElementById('btn')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const timeLeft = document.getElementById('timeLeft')
    const timeUp = document.getElementById('timeUp')
    const scoreHolder = document.getElementById('scoreHolder')
    const logo = document.getElementById('logo')
    const btn4 = document.getElementById('btn4')

//HIDE THE TIMER FUNCTIONALITY
    timeUp.style.display = 'none'

// HIDE SUBMIT BUTTON
    btn3.style.display ='none'

    
//HIDE PRINT BUTTON
    btn4.style.display = 'none'


//INITIALIZE THE QUESTIONS COUNTER TO ZERO
    let questions = 0

//INITIALIZE SCORE TO BE ZERO
    let score = 0



//CREATE FUNCTION TO GENERATE QUESTIONS
    
    
    function generateQuestions() {
        //PLACE THE QUESTIONS IN A VARIABLE 
         let myQuestions = ArrayOfQuestions[questions]
         //DISPLAY QUESTIONS
         let myQuest = myQuestions.question
         
         //DISPLAY THE QUESTION ON THE BODY
         question.innerHTML = myQuest 
         
         //DISPLAY OPTIONS
         let option = `
         <br><input type = 'radio' name ='option'  value= '${myQuestions.opt}'>${myQuestions.opt}<br><br>
         <input type = 'radio' name ='option'  value= '${myQuestions.opt1}'>${myQuestions.opt1}<br><br>
         <input type = 'radio' name ='option'  value= '${myQuestions.opt2}'>${myQuestions.opt2}<br><br>
         <input type = 'radio' name ='option'  value= '${myQuestions.opt3}'>${myQuestions.opt3}<br><br> 
         `
         options.innerHTML = option
        //  console.log(myQuestions);
         
    }
    generateQuestions()


//ADD EVENT LISTENER TO THE NEXT BUTTON
    btn.addEventListener('click',validation)


    //CREATE A FUNCTION FOR NEXT BUTTON VALIDATION
    function validation() {
        let radioCheck = document.querySelector('input[type = radio]:checked')
        //IF STATEMENT TO CHECK IF AN OPTION IS CHECKED
        if (!radioCheck) {
            alert('Please select an option')
        }
        // CODE TO MOVE TO THE NEXT QUESTION
        else{
            
            // DISPLAY SUBMIT BUTTON AT THE END OF THE QUIZ
            if(questions === ArrayOfQuestions.length -1){
                btn3.style.display = 'block'
                btn3.style.justifyContent = 'center'
                btn3.style.alignItems = 'center'
                btn.style.display = 'none'
                btn2.style.display = 'block'
               
            }
             // DISPLAY STUDENT SCORE AS AN ALERT
            if (radioCheck.value === ArrayOfQuestions[questions].correctAnswer) {
                score += 10
                alert(`you score ${score}`)
               
            }
            questions++
            generateQuestions()
                  
        
            
        }
                         
    }
    validation



// ADD EVENTLISTENER TO THE PREVIOUS BUTTON
btn2.addEventListener('click', validatePrevious)

    //CREATE A FUNCTION FOR PREVIOUS BUTTON
    function validatePrevious() {
            questions--
            generateQuestions()
                 
    }
    validatePrevious

// ADD EVENTLISTENER TO THE SUBMIT BUTTON
btn3.addEventListener('click', submitValidate)

    //CREATE A FUNCTION FOR SUBMIT
    function submitValidate() {
        question.style.display = 'none'
        options.style.display = 'none'
        button.style.display = 'none'
        btn.style.display = 'none'
        btn2.style.display = 'none'
        btn3.style.display = 'none'
       
        btn4.style.display = 'block'
        scoreHolder.innerHTML = `<h1>Your score is ${score}/${ArrayOfQuestions.length * 20}</h1>`
        scoreHolder.style.fontSize = '20px'
        scoreHolder.style.padding= '30px'
    }
    submitValidate 


// DECLARE TIME VARIABLES
let totalTime = 80;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(myTimer, 1000)


// CREATE A FUNCTION FOR MYTIMER
function myTimer(){
    counter++;
    min = Math.floor((totalTime - counter)/60)
    sec = totalTime - min * 60 - counter
    // console.log(sec);

    
// DISPLAY TIMER ON THE SCREEN
timeLeft.textContent = min + " : " + sec  
timeLeft.style.fontSize = '1.5rem'

//IF STATEMENT TO TERMINATE THE TIME AND DISPLAY RESULT
if(counter === totalTime){
    clearInterval(timer)
    // timeUp.innerHTML = `<h1>TIME'S UP!!!!</h1>`
    timeUp.style.display = 'block'
    question.style.display = 'none'
    options.style.display = 'none'
    button.style.display = 'none'
    btn.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'none'
    scoreHolder.innerHTML = `<h1>Your score is ${score}/${ArrayOfQuestions.length * 20}</h1>`
    scoreHolder.style.fontSize = '20px'
    scoreHolder.style.padding= '30px'
    scoreHolder.style.color = 'red'
    btn4.style.display = 'block'
}
}
