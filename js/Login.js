// DECLARATION OF VARIABLES
const errorMessage = document.getElementById('errorMessage')
const errorMessage1 = document.getElementById('errorMessage1')
const myForm = document.getElementById('myForm')
const inputEmail = document.getElementById('inputEmail')
const inputExamId = document.getElementById('inputExamId')
const loginButton = document.getElementById('btn')

//ADD EVENT LISTENER
myForm.addEventListener('click', validation)

Num = [0,1,2,3,4,5,6,7,8,9]
//CREATE A FUNCTION FOR FORM VALIDATION
function validation(e) {
    //PREVENT DEFAULT SUBMIT ACTION
    e.preventDefault();
    // console.log('are,you,working');
    //CREATE AN ARRAY OF ERROR 
    let message = []
    //SPECIFY A CONDITION AND ERROR MESSAGE TO BE DISPLAYED
    if (inputEmail.value === '') {
        message.push("Please Input Your Email Address")
    } 
    
    if (inputExamId.value === '') {
        message.push("Please input your ExamID")
    } 
    if (inputExamId.value.length < 8) {
        message.push("must be at least 8 characters")
    } 
    // if (inputExamId.value != Number) {
    //     message.push("ExamID must be numbers")
    // }
    if (message.length > 0) {
        errorMessage.innerText = message.join(', ')
        // errorMessage1.innerText = message.join(',')
        
    }
    else{
            nextpage()
    }


}
// CREATE A FUNTION TO LOGIN
function nextpage() {
    window.location = 'questions.html'
}