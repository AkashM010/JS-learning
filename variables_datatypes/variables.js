// let --> Block-scoped; can be reassigned but cannot be redeclared in the same scope.

// const --> Block-scoped; cannot be reassigned or redeclared in the same scope.

// var --> Function-scoped; can be redeclared and reassigned.

// var (Function-scoped)
var age = 30;
age = 31; // Reassignment allowed
var age = 32; // Redeclaration allowed
if (true) {
    var age = 33; // Redeclaration allowed
    console.log("Var inside if block: ", age); // Output: 33
}
console.log("Var outside if block: ", age); // Output: 33

// let (Block-scoped)
let Name = "John";
Name = "Doe"; // Reassignment allowed
// let Name  = "Smith"; // Error: Redeclarion not allowed
if (true) {
  let Name = "Alice"; // Allowed: Block-scoped
  console.log("Let inside if block: ", Name); // Output: Alice
}
console.log("Let outside if block: ", Name); // Output: Doe

//const (Block-scoped)
const city = "Kolkata";
// city = "Hyderabad" // Error: Reassignment not allowed
// const city = "Mumbai" // Error: Redeclaration not allowed
if (true) {
  const city = "Pune"; // Allowed: Block-scoped
  console.log("Const inside if block: ", city); // Output: Pune
}
console.log("Const outside if block: ", city); // Output: Kolkata
