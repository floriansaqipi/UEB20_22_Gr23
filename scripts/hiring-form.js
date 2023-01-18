class RegexValidator{
    constructor(string, regex){
        this.string = string;
        this.regex = regex;
    }
    validate() {
        return this.string.match(this.regex);
    }
}

class Employee{
    constructor(firstName, lastName, birthday, email, adress,country, cv){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.adress = adress;
        this.country = country;
        this.cv = cv;
    }
    print(){
        console.log('User: ');
        console.log('First Name: ' + this.firstName);
        console.log('Last Name: ' + this.last);
        console.log('Birthday: ' + this.birthday);
        console.log('Email: ' + this.email);
        console.log('Adress: ' + this.adress);
        console.log('Country: ' + this.country);
        console.log('CV: ' + this.cv);
    }
}


const failedValidationStyling = (input) => {
    input.classList.add('error-style');
    input.nextElementSibling.style.display = 'block';
}

const passedValidationStyling = (input) => {
    input.classList.remove('error-style');
    input.nextElementSibling.style.display = 'none';
}

let stateName; let stateLastName; let stateBirthday; let stateEmail;
let stateAdress; let stateCountry; let stateCv;

const validateFirstName = () => {
    const nameInput = document.getElementsByClassName('name-input')[0];
    const name = nameInput.value;
    const regexVal = new RegexValidator(name,/^[a-zA-Z ]+$/);
    if(name === ''){
        failedValidationStyling(nameInput)
        throw 'first name can not be empty';
    }else if(name.length <= 4){
        failedValidationStyling(nameInput)
        throw 'first name can not be shorter than 4 characters';
    } else if(!regexVal.validate()){
        failedValidationStyling(nameInput);
        throw 'first name must be alphanumeric';
    }
    passedValidationStyling(nameInput);
    stateName = name;
}

const validateLastName = () => {
    const lastNameInput = document.getElementById('last-name-form');
    const lastName = lastNameInput.value;
    const regexVal = new RegexValidator(lastName,/^[a-zA-Z ]+$/);
    if(lastName === ''){
        failedValidationStyling(lastNameInput);
        throw 'last name can not be empty';
    }else if(lastName.length <= 4){
        failedValidationStyling(lastNameInput);
        throw 'last name can not be shorter than 4 characters';
    } else if(!regexVal.validate(lastName)){
        failedValidationStyling(lastNameInput);
        throw 'last name must be alphanumeric';
    }
    passedValidationStyling(lastNameInput);
    stateLastName = lastName;
}

const isUnderAge = (birthday) =>{
    const date  = new Date(birthday);
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const validateDate = () => {
    const dateInput = document.getElementById('date-form');
    const date = dateInput.value;
    if(date == ''){
        failedValidationStyling(dateInput);
        throw 'Date cant be empty'
    }else if(isUnderAge(date) < 18){
        failedValidationStyling(dateInput);
        throw 'You must be older than 18';
    };
    passedValidationStyling(dateInput);
    stateBirthday = date;
}

const validateEmail = () => {
    const emailInput = document.getElementById('email-form')
    const email = emailInput.value;
    const regexVal = new RegexValidator(email,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(email == ''){
        failedValidationStyling(emailInput);
        throw 'email can not be empty';
    } else if (!regexVal.validate(email)){
        failedValidationStyling(emailInput);
        throw 'email is not valid';
    }
    passedValidationStyling(emailInput);
    stateEmail = email;
}

const validateAdress = () => {
    const adressInput = document.getElementById('adress-form');
    const adress = adressInput.value;
    if(adress == ''){
        failedValidationStyling(adressInput);
        throw 'adress can not be empty';
    }else if(adress.length <= 10){
        failedValidationStyling(adressInput);
        throw 'adress should be longer than 10 characters';
    }
    passedValidationStyling(adressInput);
    stateAdress = adress;
}

const validateCountry = () => {
    const countryInput = document.getElementById('country-form');
    const country = countryInput.value;
    console.log(country);
    if(country == undefined || country == ''){
        failedValidationStyling(countryInput);
        throw 'country can not be empty';
    }else if(country.length <= 3){
        failedValidationStyling(countryInput);
        throw 'country should be longer than 3';
    }
    passedValidationStyling(countryInput);
    stateCountry = country;
}

const validateCV = () => {
    const cvInput = document.getElementById('cv-form');
    const file = cvInput.value;
    if(file == undefined || file == ''){
        failedValidationStyling(cvInput);
        throw 'file can not be empty';
    }
    passedValidationStyling(cvInput);
    stateCv = file;
}


let isValid = true;

const validate = () => {
    try{
        validateFirstName() ;
    }catch (exp) {
        isValid=false;
        console.error(exp);
    }
    try{
        validateLastName();
    }catch (exp) {
        isValid=false;
        console.error(exp);
    }
    try{
        validateDate();
    } catch(exp) {
        isValid=false;
        console.error(exp);
    }
    try {
        validateEmail()
    } catch(exp) {
        isValid=false;
        console.error(exp);
    }
    try{
        validateAdress();
    }catch(exp){
        isValid=false;
        console.error(exp);
    }
    try{
        validateCountry();
    }catch(exp){
        isValid=false;
        console.error(exp);
    }
    try{
        validateCV();
    }catch(exp){
        isValid=false;
        console.error(exp);
    }
    generateRes()
}



function generateRes() {
    if(isValid == true){
        const employee = new Employee(stateName,stateLastName,stateBirthday,stateEmail,stateAdress,stateCountry,stateCv);
        employee.print();
        //TODO success stuff
    }else {
        //to do warning failure
    }
}


