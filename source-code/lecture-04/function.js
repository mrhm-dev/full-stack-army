const student1 = {
    firstName: 'Maruf',
    lastName: 'Sarker',
    email: 'maruf@example.com',
    age: 27,
    attend: true
}
const student2 = {
    firstName: 'Asif',
    lastName: 'Sarker',
    email: 'asif@example.com',
    age: 27,
    attend: true
}
const student3 = {
    firstName: 'Lisan',
    lastName: 'Sarker',
    email: 'lisan@example.com',
    age: 27,
    attend: true
}

const allStudents = [student1, student2, student3]

allStudents.forEach(item => {
    console.log('Fullname: ' + item.firstName + " " + item.lastName)
})


// function with error handling
function nameOfTheFunction(name){
    if(!name){
        console.log('Please provide your name');
    }else{
        console.log("Hello", name)
    }
}

nameOfTheFunction("Maruf")
nameOfTheFunction("Sakib")
nameOfTheFunction()


// generate random number
const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(generateRandomNumber(5, 10))