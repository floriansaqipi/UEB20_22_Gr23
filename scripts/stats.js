const employees = [
    { id: 1, name: 'Rigoberto Whitney', position: 'Product Manager', salary: 1400.00},
    { id: 2, name: 'Keagan Hardin', position: 'UI/UX Designer', salary: 1000.00},
    { id: 3, name: 'Hannah Winters',position: 'Frontend Developer', salary: 1100.00 },
    { id: 4, name: 'Tyrese Ferrell', position: 'Backend Developer', salary: 1400.00},
    { id: 5, name: 'Eric Howard', position: 'Backend Developer',  salary: 1200.00},
    { id: 6, name: 'Paige Elliott', position: 'Frontend Developer', salary: 1100.00},
    { id: 7, name: 'Chace Bullock',position: 'Product Manager',   salary: 1400.00},
    { id: 8, name: 'Scott Reeves', position: 'UI/UX Designer',  salary: 1000.00},
    { id: 9, name: 'Anton Wall', position: 'Frontend Developer' , salary: 1100.00},
    { id: 10, name: 'Sherlyn Galvan',position: 'Frontend Developer', salary: 1100.00},
    { id: 11, name: 'Brayden Herman' ,position: 'Backend Developer', salary: 1200.00},
    { id: 12, name: 'Nikhil Duarte', position: 'Backend Developer', salary: 1200.00},
]

let stateEmployees = [...employees];

class PercentageAdder {
    constructor(value, percentage){
        this.value = value;
        this.percentage = percentage;
    }
    calculatePercentage(){
        return Math.ceil(this.value + (this.value*this.percentage/100));
    }
}


const audioBtns2 = document.querySelectorAll('.employee_voice-note2');

const audio1 = new Audio("./audio/1.mp3");
const audio2 = new Audio("./audio/2.mp3");


$('.employee_voice-note1').each((i,obj)=> {
    $(obj).on("click",()=>{
        audio1.play()
    })
})

audioBtns2.forEach(audioBtn => {
    audioBtn.addEventListener('click', ()=>{
        audio2.play();
    })
})

$('.calc-toggler-container').click(()=>{
    $(".form-container").slideToggle("slow");
    if($('.calc-toggler-container').html().trim() == '⇊'){
        $('.calc-toggler-container').html('&#8648;'); 
    }else {
        $('.calc-toggler-container').html('⇊');
    }
})

//-------------VALIDATION-------------------

const failedValidationStyling = (input) => {
    $(input).addClass('error-style');
    $(input).next().css('display','block');
}

const passedValidationStyling = (input) => {
    $(input).removeClass('error-style');
    $(input).next().css('display','none');
}

let salIncPerc; let totalSalInc;

const validateSalIncPercentage = () => {
    const input = $('#salary-inc-form');
    const val = input.val()
    if(val <= 0 || val >= 51){
        failedValidationStyling(input); 
        throw 'percentage should be bigger than 0 and less than 51';
    }
    passedValidationStyling(input);
    salIncPerc = val;
}

const validateTotalSalPercentage = () => {
    const input = $('#total-sal-form');
    const val = input.val()
    if(val <= 0 || val >= 51){
        failedValidationStyling(input); 
        throw 'percentage should be bigger than 0 and less than 51';
    }
    passedValidationStyling(input);
    totalSalInc = val;

}

let isValidSalInc = true;
let isValidTotSal = true;

const validateSalaryInc = () =>{
    isValidSalInc=true;
    try{
        validateSalIncPercentage() ;
    }catch (exp) {
        isValidSalInc=false;
        console.error(exp);
    }
    generateSalInc();
}

const validateTotalSal = () =>{
    isValidTotSal=true;
    try{
        validateTotalSalPercentage() ;
    }catch (exp) {
        isValidTotSal=false;
        console.error(exp);
    }
    generateTotSal();
}


//-------------ALERT CHANGES-------------------

const giveSalary = () =>{ 
    const temp = stateEmployees.map(employee => {
        return {...employee, salary : new PercentageAdder(employee.salary,salIncPerc).calculatePercentage()};
    });
    stateEmployees = temp;
}

const updateTable = () => {
    $('.salary-col').each((i,obj)=>{
        $(obj).html(`${stateEmployees[i].salary.toFixed(2)}`);
    })
}

const salIncAlert = () => {
    $('.salary-inc-alert').fadeIn('slow').animate({top: '50px'},'slow').fadeOut(3000);
}

const totalSalAlert = (sum) => {
    $('.total-inc-alert').html(`Total cost of waige raise for the month ${sum} €`);
    $('.total-inc-alert').fadeIn('slow').animate({top: '50px'},'slow').fadeOut(3000);
}

const calculateTotalSal = () =>{
    const sum =  stateEmployees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
    return new PercentageAdder(sum,totalSalInc).calculatePercentage();
}



function generateSalInc(){
    if(isValidSalInc == true){
        giveSalary();
        updateTable();
        salIncAlert();
    }
}

function generateTotSal(){
    if(isValidTotSal){
        totalSalAlert(calculateTotalSal());
    }
}