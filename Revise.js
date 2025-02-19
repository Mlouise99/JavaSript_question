//a
function countRoles(users) {
    let roleCount = { admin: 0, instructor: 0, student: 0 };

    for (let user of users) {
        if (user.role === "admin") {
            roleCount.admin++;
        } else if (user.role === "instructor") {
            roleCount.instructor++;
        } else if (user.role === "student") {
            roleCount.student++;
        }
    }
    
    return roleCount;
}

// Example usage
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "student" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "instructor" },
    { name: "Eve", role: "student" },
    { name: "Frank", role: "student" },
    { name: "Grace", role: "student" },
    { name: "Helen", role: "student" }
];

console.log(countRoles(users)); 
// Output: { admin: 2, instructor: 1, student: 5 }
//b
function findAdmins(users) {
    return users.filter(user => user.role === "admin").map(user => user.name);
}

console.log(findAdmins(users)); 
// Output: ["Alice", "Charlie"]
//c
function findAdmins(users) {
    const admins = users.filter(user => user.role === "admin").map(user => user.name);
    return admins.length > 0 ? admins : "No admins found";
}

// Example with no admins
const usersWithoutAdmins = [
    { name: "Bob", role: "student" },
    { name: "David", role: "instructor" }
];

console.log(findAdmins(usersWithoutAdmins)); 
// Output: "No admins found"
//d
function generateWelcomeMessages(users) {
    return users.map(user => `Welcome, ${user.name}! You are an ${user.role}.`);
}

console.log(generateWelcomeMessages(users)); 
/* Output:
[
  "Welcome, Alice! You are an admin.",
  "Welcome, Bob! You are an student.",
  "Welcome, Charlie! You are an admin.",
  "Welcome, David! You are an instructor.",
  "Welcome, Eve! You are an student.",
  "Welcome, Frank! You are an student.",
  "Welcome, Grace! You are an student.",
  "Welcome, Helen! You are an student."
]
*/

Advantages of Using map and filter Over Traditional Loops
Easier to Read and Understand

map() and filter() make the code shorter and easier to read compared to for loops.
Example:
javascript
Copy
const admins = users.filter(user => user.role === "admin").map(user => user.name);
This is much simpler than writing a long for loop.
Less Code, Fewer Errors

With map() and filter(), you don't need to manually create new arrays or write extra conditions.
This reduces the chances of making mistakes.
Faster and More Efficient

JavaScript is optimized for built-in array methods, so they run faster than manually looping through an array.
Creates New Arrays Without Changing the Original

map() and filter() do not modify the original array; instead, they create a new one.
This helps prevent accidental changes to the data.
Works Best for Data Processing

When working with lists of data, array methods make it easier to find, modify, or filter specific information.
function division(number1, number2){
    if (number2 !==0){
        return number1/number2;
    }
    else{ return'can not be divided by 0'}

}
console.log('the divided number is:', division(40,2));

//product three numbers

function product(a,b,c){
    return a*b*c;
}
console.log('the product of three number is:',  product(2,2,2));
//maximum number

function maxArrynumber(array)
{
    return Math.max(...array);
}
console.log('maximum array number is:',maxArrynumber([2,7,9,80]));
function arraySum(arr){
    return arr.reduce((total, current) => total + current, 0);
}
console.log('sum of arry:', arraySum ([1,3,10,60,78]));

function averageArray(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
}
console.log("Average Array:", averageArray([1, 2, 3, 4, 5]));

//combine two array
function combineArrays(arr1,arr2)
{
    return[...arr1,...arr2];
    
}
const arrange = ['a','g','m'];
    const arrangeto = ['b','c'];
console.log('combine two arrays:', combineArrays(arrange,arrangeto));
//
function displayEvenNumbers(){
    for(let i=2; i <=100 ; i +=2)
    {
        console.log(i);
        
    }
}
console.log('the even number is between 1 qnd 100:');

displayEvenNumbers();

//object
const person = {
    name: "Louise",
    age: 25,
    isStudent: false,
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(person.name); // Output: Louise
console.log(person.greet()); // Output: Hello, Louise
