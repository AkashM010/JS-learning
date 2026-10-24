// Chapter 1 - Q1
let str = "Akash";
let dig = 10;
console.log(str + dig);

//Chapter 1 - Q2
console.log(typeof (str + dig));

//Chapter 1 - Q3
const account = {
    name: "Akash",
    age: 30,
    activeStatus: true
}

// account = 1; // cannot change any value friom te object as the object is declared as const

// Chapter 1 - Q4
console.log(`Before changing the object ${JSON.stringify(account)}`)
// console.log(account)
// account["age"] = 31;
account.age = 31;
console.log(`After changing the object ${JSON.stringify(account)}`)

account.gender = "M"
console.log(account);

/*
    Here we are able to change even though the object is const
    Because const locks the variable into memory and not the contents of the object
    We can change the content but we cannot make the object point to differnet object
*/

// Chapter 1 - Q5
const dict = {
    yakka: "work, especially hard work", 
    appreciate: "to be grateful or thankful for"
}

console.log(dict.yakka);