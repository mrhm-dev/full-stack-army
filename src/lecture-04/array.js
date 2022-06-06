// const name1 = "Rayhan"
// const name2 = "Maruf"
// const name3 = "Alvi"
// const name4 = "Ayman"
// const name5 = "Rizvy"

// name1.sendEmail()
// name2.sendEmail()
// name3.sendEmail()

let students = ["Rayhan", "Maruf", "Alvi", "Ayman", "Rizvy", "Lisan", "Sakib"]

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])
// console.log(students[4])

for(let i = 0; i < students.length; i++){
    console.log(i + 1 + " " + students[i].toLowerCase())
}


// Array used for Plural
// Object used for Singular


const nums = [1, 2, 3, 4, 5]
const bools = [true, false, false, true]
const nulls = [null, null, null, null]
const us = [undefined, undefined, undefined]

// 2D Array
const arrayOfArray = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]

const mixed = [true, null, 'Stack Learner', 100, [1, 2, 3]]

// CRUD
// store attributes using array

// const student1 = ['Maruf', 'Sarker', 'maruf@example.com', 27, true]
// sendEmail(student1[2])

// function sendEmail(email){
//     console.log('Sending Email to ', email)
// }


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

console.log(allStudents)

for(let i = 0; i < allStudents.length; i++){
    console.log(allStudents[i].firstName + " " + allStudents[i].lastName)
    sendEmail(allStudents[i].email)
}

function sendEmail(email){
    console.log('Sending Email to ', email)
}
