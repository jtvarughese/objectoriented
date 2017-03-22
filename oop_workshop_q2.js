// Question 2
// Person constructor
function Person(gender, age, name) {
  this.gender = gender
  this.age = age
  this.name = name
}
// Teacher constructor using Person call
function Teacher(gender, age, name){
  Person.call(this, gender, age, name)
}
// Student constructor using Person call
function Student(gender, age, name){
  Person.call(this, gender, age, name)
}
// creating the school
function School() {
  this.persons = []
}
// teacher objects
var Amanda = new Teacher("female", 32, "Amanda")
// student objects
var Becky = new Student("female", 8, "Becky")
var Timmy = new Student("male", 9, "Timmy")
var Michael = new Student("male", 8, "Michael")

//displaying info
Person.prototype.displayAllInfo = function(){
  return this.gender + "," + this.age + "," + this.name
}
//using display info prototype from Person
Teacher.prototype = Object.create(Person.prototype)
Student.prototype = Object.create(Person.prototype)

// var school = new School()

// adding people to the school
School.prototype.addPerson = function(person){
  this.persons.push(person)
}
//using object methods
school.addPerson(Becky);
school.addPerson(Amanda);

console.log(Becky.displayAllInfo())
console.log(Amanda.displayAllInfo())
