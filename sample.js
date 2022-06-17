/**function Person(){

}

Person.firstname=function(){
  return firstname
}

Person.lastname=function(){
  return lastname
}

Person.fullname=function(){
  return this.firstname() + this.lastname()
}

var person = new Person();

console.log(person)**/


// input is an array of objects, each object has a firstName and secondName - an array with each object having fullName

/** function createFullName (input)
{
const result=input.map((name)=>{
	let fullName = {};
	fullName.name = name.firstName + ' ' + name.lastName 
	return fullName
})

console.log(result)
}

createFullName ([{firstName:'Askin',lastName:'John`'}])
**/

/**let employee={firstName:"Berlin",secondName:"V",frameWork:"node"}
if (employee.frameWork==='node') {
  employee.role = "frontEnd";
} else if (employee.frameWork==="Angular") {
  employee.role = "backEnd";
} else if(employee.frameWork==="flutter"){
  employee.role = "mobileApp";
}

console.log(employee)   **/


function employee(input)
{
if (employee.frameWork==='node')
{
   employee.role="backEnd";
}
else if (employee.frameWork==='Angular')
{
    employee.role="fontEnd";
}
else if (employee.frameWork==='flutter')
{
    employee.role="mobileApp";
}
employee([{firstName:"Berlin",secondName:"V",frameWork:"node"}])
