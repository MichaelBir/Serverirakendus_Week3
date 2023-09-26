
//let newStudient = {
 //   firstname: 'Harry',
 //   age: 11,
 //   isWizard: true,
 //   friends: ['Aite', 'Maite', 'Vaite'],
 //   introduce: function(){
 //       console.log(`Greedings, my name is ${this.firstname}.`);
//    }
//}

// newStudient.firstname = "Marry";
// newStudient.age = 15;

// console.log(newStudient.firstname);
// console.log(newStudient.age);

// console.log(newStudient.friends);

// newStudient.friends.forEach(friend => {
//    console.log(friend);
// });

// console.log(`${newStudient.firstname} has got ${newStudient.friends.length} friends.`);

// newStudient.introduce ();

let friends = [
    { // friend 1 //
        firstname: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Maite', 'Vaite'],
        introduce: function(){
            console.log(`Greedings, my name is ${this.firstname}.`);}
    },

    { // friend 2 //
        firstname: 'Harry',
        age: 51,
        isWizard: true,
        friends: ['Ron', 'Maite', 'Vaite'],
        introduce: function(){
            console.log(`Greedings, my name is ${this.firstname}.`);}
    },

    { // friend 3 //
        firstname: 'Maite',
        age: 41,
        isWizard: true,
        friends: ['Ron', 'Harry', 'Vaite'],
        introduce: function(){
            console.log(`Greedings, my name is ${this.firstname}.`);}
    },

    { // friend 4 //
        firstname: 'Vaite',
        age: 21,
        isWizard: false,
        friends: ['Ron', 'Harry', 'Maite'],
        introduce: function(){
            console.log(`${this.firstname} say ho ho hoo.`);}
    }

]

//console.log(friends.length);

//console.log(friends[3]);

//friends[2].introduce();
//console.log(friends[2].friends);

//filter//
let students = friends.filter(friend => {
    if(friend.isWizard === true) {
        return friend;
    }
});

//console.log(students.length);
//console.log(students);

//map//
let studentsList = students.map(student => {
    //console.log(student.firstname);
    return student.firstname
})

//sort//
studentsList.sort((a, b) => {return a.localeCompare(b)});

console.log(studentsList);