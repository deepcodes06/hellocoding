"use strict";

// This keyword is a global space

console.log(this); // globalObject - window, global

// This inside a function

function x() {
    // The value depends on strict and non-strict mode
    console.log(this);    
}

// this inside a non strict mode - (this substitution)

// if the value of this keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in strict mode

// this keyword value depends on how the function is called (window)

x(); // the value will be undefined or null
window.x(); // the value would be window

// this inside a object's method

const student = {
   name: "Deep",
    printName: function () {
        console.log(this.name);
    },
};
student.printName();

const student2 = {
    name: "Priyanka",
};

// call apply bind methods (sharing methods)

student.printName.call(student2); // value if this = student2

// this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    },
};
obj.x(); // enclosed lexical context

// this inside nested arrow function

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        };
        y();
    },
};
obj2.x(); 