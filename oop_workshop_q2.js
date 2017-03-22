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
//displaying info
Person.prototype.displayAllInfo = function(){
  return this.gender + "," + this.age + "," + this.name
}
//using display info prototype from Person
Teacher.prototype = Object.create(Person.prototype)
Student.prototype = Object.create(Person.prototype)

// adding people to the school
School.prototype.addPerson = function(person){
  this.persons.push(person)
}
// teacher objects
var amanda = new Teacher("female", 32, "Amanda")
// student objects
var becky = new Student("female", 8, "Becky")
var timmy = new Student("male", 9, "Timmy")
var michael = new Student("male", 8, "Michael")

var school = new School()
//using object methods
school.addPerson(becky);
school.addPerson(amanda);

console.log(becky.displayAllInfo())
console.log(amanda.displayAllInfo())
