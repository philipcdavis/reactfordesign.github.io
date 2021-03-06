---
date: "2020-10-01"
title: "A Designer’s Guide to JavaScript"
description: "You can learn the basics of JavaScript quickly. You don't need a engineering degree, or a front end bootcamp."
image: "https://react.design/social/javascript.png"
---

<style>
  @keyframes TerminalBackground {
    0%{background-position:0% 100%}
    25%{background-position:0% 75%}
    50%{background-position:0% 50%}
    75%{background-position:0% 25%}
    100%{background-position:0% 0%}
  }
</style>

<div style="
    position: relative;
    padding: 3px;
    background: linear-gradient(0deg, #6C0093, #FF0404, #FFAF09);
    background-size: 150% 150%;
    width: 120px;
    height: 100px;
    margin: 100px auto 60px auto;
    animation: TerminalBackground 2s infinite alternate;
    border-radius: 14px;
">
  <div style="
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    background: linear-gradient(0deg, #6C0093, #FF0404, #FFAF09);
    background-size: 150% 150%;
    animation: TerminalBackground 2s infinite alternate;
    border-radius: 14px;
    filter: blur(17px);
  ">
  </div>
  
  <div style="
    background: rgba(0, 0, 0, 0.80) linear-gradient(0deg, black, transparent);
    border-radius: 11px;
    opacity: 0.95;
    line-height: 0;
    position: absolute;
    bottom: 3px;
    top: 3px;
    right: 3px;
    left: 3px;
    fill: white;
    padding: 10px;
    fill: linear-gradient(0deg, #6C0093, #FF0404, #FFAF09);
  ">
    <div style="
      position: absolute;
      background: linear-gradient(0deg, #6C0093, #FF0404, #FFAF09);
      background-size: 150% 150%;
      animation: TerminalBackground 2s infinite alternate;
      clip-path: url(#clipping);
    ">
      <svg width="80px" viewBox="0 0 110 102">
        <defs>
          <clipPath id="clipping">
                  <path transform=scale(0.7) d="M2.33761863,0.011856469 L32.3172953,0.011856469 C33.4218648,0.011856469 34.3172953,0.907286969 34.3172953,2.01185647 C34.3172953,3.11642597 33.4218648,4.01185647 32.3172953,4.01185647 L2.33761863,4.01185647 C1.23304913,4.01185647 0.337618627,3.11642597 0.337618627,2.01185647 C0.337618627,0.907286969 1.23304913,0.011856469 2.33761863,0.011856469 Z M43.2335836,0.011856469 L73.2132603,0.011856469 C74.3178298,0.011856469 75.2132603,0.907286969 75.2132603,2.01185647 C75.2132603,3.11642597 74.3178298,4.01185647 73.2132603,4.01185647 L43.2335836,4.01185647 C42.1290141,4.01185647 41.2335836,3.11642597 41.2335836,2.01185647 C41.2335836,0.907286969 42.1290141,0.011856469 43.2335836,0.011856469 Z M2.33761863,10.8532618 L17.3662376,10.8532618 C18.4708071,10.8532618 19.3662376,11.7486923 19.3662376,12.8532618 C19.3662376,13.9578313 18.4708071,14.8532618 17.3662376,14.8532618 L2.33761863,14.8532618 C1.23304913,14.8532618 0.337618627,13.9578313 0.337618627,12.8532618 C0.337618627,11.7486923 1.23304913,10.8532618 2.33761863,10.8532618 Z M2.33761863,21.6946671 L33.6764824,21.6946671 C34.7810519,21.6946671 35.6764824,22.5900976 35.6764824,23.6946671 C35.6764824,24.7992366 34.7810519,25.6946671 33.6764824,25.6946671 L2.33761863,25.6946671 C1.23304913,25.6946671 0.337618627,24.7992366 0.337618627,23.6946671 C0.337618627,22.5900976 1.23304913,21.6946671 2.33761863,21.6946671 Z M2.33761863,32.5360725 L44.5499789,32.5360725 C45.6545484,32.5360725 46.5499789,33.431503 46.5499789,34.5360725 C46.5499789,35.640642 45.6545484,36.5360725 44.5499789,36.5360725 L2.33761863,36.5360725 C1.23304913,36.5360725 0.337618627,35.640642 0.337618627,34.5360725 C0.337618627,33.431503 1.23304913,32.5360725 2.33761863,32.5360725 Z M44.5711591,21.6946671 L62.3181522,21.6946671 C63.4227217,21.6946671 64.3181522,22.5900976 64.3181522,23.6946671 C64.3181522,24.7992366 63.4227217,25.6946671 62.3181522,25.6946671 L44.5711591,25.6946671 C43.4665896,25.6946671 42.5711591,24.7992366 42.5711591,23.6946671 C42.5711591,22.5900976 43.4665896,21.6946671 44.5711591,21.6946671 Z M2.33761863,97.809143 L24.1621729,97.809143 C25.2667424,97.809143 26.1621729,98.7045735 26.1621729,99.809143 C26.1621729,100.913712 25.2667424,101.809143 24.1621729,101.809143 L2.33761863,101.809143 C1.23304913,101.809143 0.337618627,100.913712 0.337618627,99.809143 C0.337618627,98.7045735 1.23304913,97.809143 2.33761863,97.809143 Z M35.0568496,97.809143 L52.8038427,97.809143 C53.9084122,97.809143 54.8038427,98.7045735 54.8038427,99.809143 C54.8038427,100.913712 53.9084122,101.809143 52.8038427,101.809143 L35.0568496,101.809143 C33.9522801,101.809143 33.0568496,100.913712 33.0568496,99.809143 C33.0568496,98.7045735 33.9522801,97.809143 35.0568496,97.809143 Z M55.4662673,32.5360725 L89.5235052,32.5360725 C90.6280747,32.5360725 91.5235052,33.431503 91.5235052,34.5360725 C91.5235052,35.640642 90.6280747,36.5360725 89.5235052,36.5360725 L55.4662673,36.5360725 C54.3616978,36.5360725 53.4662673,35.640642 53.4662673,34.5360725 C53.4662673,33.431503 54.3616978,32.5360725 55.4662673,32.5360725 Z M28.1621729,10.8532618 L43.1907919,10.8532618 C44.2953614,10.8532618 45.1907919,11.7486923 45.1907919,12.8532618 C45.1907919,13.9578313 44.2953614,14.8532618 43.1907919,14.8532618 L28.1621729,14.8532618 C27.0576034,14.8532618 26.1621729,13.9578313 26.1621729,12.8532618 C26.1621729,11.7486923 27.0576034,10.8532618 28.1621729,10.8532618 Z M53.9867272,10.8532618 L69.0153462,10.8532618 C70.1199157,10.8532618 71.0153462,11.7486923 71.0153462,12.8532618 C71.0153462,13.9578313 70.1199157,14.8532618 69.0153462,14.8532618 L53.9867272,14.8532618 C52.8821577,14.8532618 51.9867272,13.9578313 51.9867272,12.8532618 C51.9867272,11.7486923 52.8821577,10.8532618 53.9867272,10.8532618 Z M79.8112815,10.8532618 L107.072584,10.8532618 C108.177154,10.8532618 109.072584,11.7486923 109.072584,12.8532618 C109.072584,13.9578313 108.177154,14.8532618 107.072584,14.8532618 L79.8112815,14.8532618 C78.706712,14.8532618 77.8112815,13.9578313 77.8112815,12.8532618 C77.8112815,11.7486923 78.706712,10.8532618 79.8112815,10.8532618 Z M2.33761863,43.3774778 L29.5989212,43.3774778 C30.7034907,43.3774778 31.5989212,44.2729083 31.5989212,45.3774778 C31.5989212,46.4820473 30.7034907,47.3774778 29.5989212,47.3774778 L2.33761863,47.3774778 C1.23304913,47.3774778 0.337618627,46.4820473 0.337618627,45.3774778 C0.337618627,44.2729083 1.23304913,43.3774778 2.33761863,43.3774778 Z M2.33761863,54.2188832 L13.2886764,54.2188832 C14.3932459,54.2188832 15.2886764,55.1143137 15.2886764,56.2188832 C15.2886764,57.3234527 14.3932459,58.2188832 13.2886764,58.2188832 L2.33761863,58.2188832 C1.23304913,58.2188832 0.337618627,57.3234527 0.337618627,56.2188832 C0.337618627,55.1143137 1.23304913,54.2188832 2.33761863,54.2188832 Z M2.33761863,65.0602885 L33.6764824,65.0602885 C34.7810519,65.0602885 35.6764824,65.955719 35.6764824,67.0602885 C35.6764824,68.164858 34.7810519,69.0602885 33.6764824,69.0602885 L2.33761863,69.0602885 C1.23304913,69.0602885 0.337618627,68.164858 0.337618627,67.0602885 C0.337618627,65.955719 1.23304913,65.0602885 2.33761863,65.0602885 Z M2.33761863,75.9016938 L26.2009535,75.9016938 C27.305523,75.9016938 28.2009535,76.7971243 28.2009535,77.9016938 C28.2009535,79.0062633 27.305523,79.9016938 26.2009535,79.9016938 L2.33761863,79.9016938 C1.23304913,79.9016938 0.337618627,79.0062633 0.337618627,77.9016938 C0.337618627,76.7971243 1.23304913,75.9016938 2.33761863,75.9016938 Z M24.0846117,54.2188832 L35.0356695,54.2188832 C36.140239,54.2188832 37.0356695,55.1143137 37.0356695,56.2188832 C37.0356695,57.3234527 36.140239,58.2188832 35.0356695,58.2188832 L24.0846117,58.2188832 C22.9800422,58.2188832 22.0846117,57.3234527 22.0846117,56.2188832 C22.0846117,55.1143137 22.9800422,54.2188832 24.0846117,54.2188832 Z M45.8316048,54.2188832 L56.7826626,54.2188832 C57.8872321,54.2188832 58.7826626,55.1143137 58.7826626,56.2188832 C58.7826626,57.3234527 57.8872321,58.2188832 56.7826626,58.2188832 L45.8316048,58.2188832 C44.7270353,58.2188832 43.8316048,57.3234527 43.8316048,56.2188832 C43.8316048,55.1143137 44.7270353,54.2188832 45.8316048,54.2188832 Z M44.4724177,65.0602885 L78.5296557,65.0602885 C79.6342252,65.0602885 80.5296557,65.955719 80.5296557,67.0602885 C80.5296557,68.164858 79.6342252,69.0602885 78.5296557,69.0602885 L44.4724177,69.0602885 C43.3678482,69.0602885 42.4724177,68.164858 42.4724177,67.0602885 C42.4724177,65.955719 43.3678482,65.0602885 44.4724177,65.0602885 Z M36.6570921,75.9016938 L94.7084578,75.9016938 C95.8130273,75.9016938 96.7084578,76.7971243 96.7084578,77.9016938 C96.7084578,79.0062633 95.8130273,79.9016938 94.7084578,79.9016938 L36.6570921,79.9016938 C35.5525226,79.9016938 34.6570921,79.0062633 34.6570921,77.9016938 C34.6570921,76.7971243 35.5525226,75.9016938 36.6570921,75.9016938 Z M2.33761863,86.7430992 L12.2692861,86.7430992 C13.3738556,86.7430992 14.2692861,87.6385297 14.2692861,88.7430992 C14.2692861,89.8476687 13.3738556,90.7430992 12.2692861,90.7430992 L2.33761863,90.7430992 C1.23304913,90.7430992 0.337618627,89.8476687 0.337618627,88.7430992 C0.337618627,87.6385297 1.23304913,86.7430992 2.33761863,86.7430992 Z M23.0652214,86.7430992 L32.9968889,86.7430992 C34.1014584,86.7430992 34.9968889,87.6385297 34.9968889,88.7430992 C34.9968889,89.8476687 34.1014584,90.7430992 32.9968889,90.7430992 L23.0652214,90.7430992 C21.9606519,90.7430992 21.0652214,89.8476687 21.0652214,88.7430992 C21.0652214,87.6385297 21.9606519,86.7430992 23.0652214,86.7430992 Z M43.7928242,86.7430992 L53.7244917,86.7430992 C54.8290612,86.7430992 55.7244917,87.6385297 55.7244917,88.7430992 C55.7244917,89.8476687 54.8290612,90.7430992 53.7244917,90.7430992 L43.7928242,90.7430992 C42.6882547,90.7430992 41.7928242,89.8476687 41.7928242,88.7430992 C41.7928242,87.6385297 42.6882547,86.7430992 43.7928242,86.7430992 Z">
                  </path>
              
            </clipPath>
          </defs>
      </svg>
    </div>
  </div>
</div>

# A Designer's Guide to JavaScript
You can learn the basics of JavaScript quickly. You don't need a engineering degree, or a front end bootcamp.

Learning the basics of JavaScript is enough to get started with modern frameworks like React.js. Once you know the basics, you can do some truly amazing things.

You can quickly spin up interactive prototypes.  
You can use live data sets.  
You can create web, mobile, and desktop apps.  
You can define interfaces in high fidelity.  
You can write scripts to automate daily tasks.  
You can make plugins for design tools like Sketch and Figma.  
You can build with modern frameworks like React.js.

You can't learn JavaScript in a day, but you can learn it quickly. The best way to learn is to build. This guide is meant to give you enough information to start building. 

## Editor

<div class="img-lg">
  <img src="./assets/javascript/theme.png" />
</div>

Before we write any code, it's a good idea to get comfortable with your text editor. I'd recommend using a text editor like [VSCode](https://code.visualstudio.com/), or [Atom](https://atom.io/) as you write JavaScript. They're both free and support lots of plugins to make things easier. You can also find lots of nice themes. Here's a [theme](https://marketplace.visualstudio.com/items?itemName=Framer.framer-syntax) for VSCode that I like.

Learning keyboard shortcuts, and customizing the look of your editor will make for a much more enjoyable coding experience.

## Setup
JavaScript is a scripting language that for our intents and purposes, will be executed by the browser.

There are multiple ways to include javascript inside your webpage. The way we will use javascript will be by including `<script>` tags right before the closing `</body>` tag. 

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    
    <script>
        // Javascript will go here
        console.log("Hello friend!")
    </script>
  </body>
</html>
```


We’ll put our javascript inside here, but we could also reference an external file.
`console.log()` is a helpful tool for debugging. Here I'm writing "Hello Friend!" To the console. You an access the console in Chrome using the `CMD+Option+J` shortcut.

<div class="img-lg">
  <img src="./assets/javascript/console.png" />
</div>

There are 5 core concepts in JavaScript that are important to understand.

**1. Variables**  
**2. Data Structures**  
**3. Loops**  
**4. Conditionals**  
**5. Functions**


## Variables
Variables are containers that hold values. These values can take lots of different forms. If you wanted a variable to hold a number you could write it as `var num = 20;`. If I use `console.log(num)` it should show me the number twenty.

Variables can be referenced later. `var double = num * 2; // 40`

Variables can hold lots of different data types. I want to discuss a few different common ways to hold data. There are primitive data types like numbers, which we used earlier, There are strings, which are just a way to store text, and booleans which are values that are either true or false.

```js
var days = 40; // Number
var label = "Hello"; // String
var hidden = true; // Boolean
```


## Data Structures
In addition to primitive data types there are others that have more complex structures. Two of these important types are objects (sometimes called object literals) and arrays. 

Objects can be defined using curly braces. 
`var obj = {}`

What goes inside the curly braces are a collection of key value pairs. The key goes first, followed by a colon, and then the value. 

```js
var obj = {
  key: value
}
```


Keys are labels that help you find the data you want to store. Keys in a single object must be unique. Values can be any data type. Numbers, strings, arrays, and even other objects. 
Here's an example Object with multiple key value pairs in action:

```js
var profile = {
	name: 'Philip', 
	age: 25, 
	contact: {
		twitter: 'philipcdavis', 
		email: 'reactfordesigners@gmail.com'
	}
}
```


Name, age, contact, twitter, and email are all different keys in this object. The values are all different and many have different value types. Some are strings, some are numbers, and some are other objects.

This nested structure is common and you will see it a lot when working with data sets.

There are two ways to access a value inside an object. The first way is sometimes called dot notation: `profile.name`. The second way is by using brackets `profile['name']`. Bracket notion is useful when your key name is dynamic.

The other data type that’s important to know about is the Array. You define an array with square brackets. 

`var myArr = [];`

You can store any type of data inside these arrays and they don't need to all be the same type (though they usually are). An example array might look like this: 

```js
var teams = ['lakers', 'nuggets', 'rockets'];
```

Instead of using keys, arrays use a built in index to keep track of location. The index of arrays starts at 0. If we wanted to access the second value of this array (nuggets) we could do so by typing `teams[1];`

If your data was as simple as this, using objects and arrays might seem unnecessary. They start to shine when you have data sets that are larger. To work with more data, we'll probably want to use a loop

## Loops
Loops enable you to run a block of code multiple times. You can use a loop with objects and arrays to execute a block of code on each item in the structure. 

To loop through each value in an array you can use a for loop that executes a block. 

```js
for (var i=0; i<teams.length; i++) {
    // Block to be executed
}
```

What goes into the parenthesis determines how many times the block of code is executed. The first value is a counter variable. `i` is often used to refer to the fact that it's used as the index value of the array. We will start the counter at 0. 

The next value is called the conditional. Once the conditional is false, the loop will end. We can set the value to be `i < teams.length`. The `.length` is a helper value built into every array that will tell you how many items are in the array. Once the value of the counter is as great as the length of the array, we can stop looping. The last value `i++` is what we want to happen after our loop runs. We want our counter to increase in value by one every time the loop runs.

If we log a string, you can see that it will print out 4 times.
If we log the value i, you can see that it increments up. If you combine this incremented value i with our array, you can see how we can access each value in our array.

```js
for (var i=0;i<teams.length;i++) { 
	console.log(teams[i])
};
```

There are other types of loops but they all are doing something pretty similar, running a block of code multiple times. That’s the essential work of a loop.


## Conditionals

Next up on our list is conditionals. The most common type of conditional is the if/else statement. 

```js
if (conditional) {
	console.log('the conditional evaluated to true');
} else {
  console.log('the conditional evaluated to false');
}
```

If the `conditional` value in the parenthesis evaluates to true, the block inside the first set of curly brackets is run, otherwise the else block is run.

Let’s use it in combination with our loop to log only the first two items in our array. Because we don’t need the else here, we can remove it, and we’ll get the same result.

```js
for (var i = 0; i<teams.length; i++) {
	if (i < 2) {
	  console.log(teams[i]);
	}
}
```

You’ll use these conditionals to to control what gets executed when.


## Functions
Functions allow you to create reusable and modular code.

Another way to say it is that they are blocks of code than can be executed whenever they are needed. 

Here's what one looks like

```js
function add (a, b) {
	var total = a + b;
	return total;
} 
```

Here we have a simple function that takes two input values, adds them together, and then returns the total. We’ll use generic names for our input arguments. You can name these pretty much whatever you want, but they will be used within our block so if your function is complex, it’s good to have descriptive names. Because this is a pretty simple function we're using `a` and `b`. 

What we've created is a function declaration. In order to execute, or invoke our function we can call `add(2,50)`.
`console.log(add(2,50)) // 52`

`console.log` is itself a function. Functions can be stored in variables, objects, arrays, or even passed into other functions.

One other important thing to note about functions is how they affect variables inside them. If you define a variable within a function, the variable cannot be used outside the function. That's because javascript has a function based scope.

<hr />

Javascript is a really fun language to learn. If you feel comfortable with the material above you can do a lot! Most of JavaScript is just building on to these core concepts.

## Modern JavaScript
In 2015 a set of new syntax and features were introduced that made writing JavaScript easier. Many of the following updates are meant to help you write code faster and cleaner. If you're using modern frameworks like React you'll often see them in examples.


### Const / Let
This is just a new way to write variables. 

```js
const height = 30;
let height = 30;
```

`const` values cannot be reassigned after the initial assignment. This is usually the default way of creating variables. 

`let` values can be reassigned but are scoped to conditionals, the same way all variables are scoped to functions. If you declare one inside an if/else statement it won't be available outside the statement.

### Arrow Functions
This a shorthand for writing functions.
Instead of writing:

```js
const add = function(a,b){ return a + b }
```

You can use an arrow function which looks like this:
```js
const add = (a,b) => a + b
```

If your function takes a single parameter you can omit the parenthesis.

```js
const getStyle = a => a.style
```

### Template Literals
Previously is you wanted dynamic strings, you would insert values using the following syntax.

```js
const dynamicString = "Hello my name is" + firstName + ". Welcome!"
```

Using template literals, you can use the backtick for strings, and `${}` to insert variables.

```js
const dynamicString = `Hello my name is ${firstName}. Welcome!`
```

### Imports and Exports
Instead of using large javascript files, you'll often want to break your code into smaller modules and export anything that other modules need to access.

```js
// Colors.js
export const colors = {
	blue: "#EA3232",
	red: "#4062F3",
	yellow: "#FFAD05",
}
```

In a different file you can import these colors using the following syntax.

```js
import {colors} from './Color'
```

You can also define default exports using the default keyword.
```js
export default Button
```

This is useful when you are only exporting one function or variable from your file.

If you export using the default keyword you can import without using the curly braces.

```js
import Button from './Button'
```

Many libraries will allow you to import a default value as well as other values. Here's an example from the `styled-components` library.

```js
import styled, {keyframes, css} from 'styled-components'
```

### Destructuring
The syntax for accessing values inside of arrays and objects also got a few upgrades. Previously if you wanted to use values in an array as variables it would look like this. 

```js
// Old method
const coordinates = [394.39827, 389.2834];
const x = coordinates[0];
const y = coordinates[1];
```

Destructing was added as a cleaner way to do this. Here's what it looks like for an array, which gets you the same two `x` and `y` variables.

```js
// Destructuring
const coordinates = [394.39827, 389.2834];
const [x,y] = coordinates;
```


Objects work similar. You can use the same syntax with curly brackets instead of the square ones.

```js
const user = {name:"Philip Davis", twitter: "@philipcdavis"}
const {name, twitter} = user;
```

### Argument Defaults
Functions can now take argument defaults, which allow you to set values when arguments aren't passed in.

```js
const welcome = (name, location="Not Set") => { ... };
```

Here I'm setting the default location set to "Not Set". These can be very useful for empty states.

## const youGotThis = true;

JavaScript is an amazing language, and it can open up so many doors for designers. It's one of the reason I created [React for Design](https://react.design). If you have questions about JavaScript, or just want some guidance as you get started please [reach out](https://twitter.com/philipcdavis).
