// DECLARATION OF VARIABLES
const errorMessage = document.getElementById('errorMessage')
const myForm = document.getElementById('myForm')
const inputEmail = document.getElementById('inputEmail')
const inputExamId = document.getElementById('inputExamId')
const loginButton = document.getElementById('btn')





//ADD EVENT LISTENER
myForm.addEventListener('click', validation)


//CREATE A FUNCTION FOR FORM VALIDATION
function validation(e) {
    //PREVENT DEFAULT SUBMIT ACTION
    e.preventDefault();
    console.log(e);
    //CREATE AN ARRAY OF ERROR 
    let message = []
    //SPECIFY A CONDITION FOR VALIDATION AND ERROR MESSAGE TO BE DISPLAYED
    if (inputEmail.value === '') {
        message.push("Please Input Your Email Address")
        inputEmail.style.color = 'red'
    } 
    
    if (inputExamId.value === '') {
        message.push("Please input your ExamID")

    } 
    if (!Number(inputExamId.value)) {
        message.push("Your ExamID must be digits")

    } 
    if (inputExamId.value.length < 8) {
        message.push(" ExamID must be at least 8 characters")
    } 
    
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