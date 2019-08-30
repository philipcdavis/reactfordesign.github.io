---
path: "/getting-started"
date: "2019-04-08"
title: "Getting started with React.js"
---

# Getting started with React.js

I've mentioned previously that the best way to learn react is to:

1. Scaffold a project and build something simple
2. Read the React docs all the way through

For designers with an understanding of web development, this advice is fine. But it assumes you are comfortable opening your terminal, navigating to a location, installing a global node module, and understanding some javascript.

If you are starting with little development and you would like to learn React there are a few prerequisites things that it helps to know.

*Note: This article assumes an OSX environment*

## Helpful Prerequisites
### 1. Terminal
You can use the terminal to:
1. Navigate your file system.
2. Create, update and delete files.
3. Install tools and launch applications

After you've added a nice theme, there are a few commands that I recommend learning. These will help you feel comfortable in the terminal.

| | | |
--- | --- | --- | ---
ls | cd | mv | touch
mkdir | rm | open |

It's also good to know how your file system is set up.
```
/ ← shorthand for your root directory
```

```
~ ← shorthand for your user directory
```

Once you are comfortable viewing and moving around the file system, creating and deleting files and folders, and launching applications, you can install node, and yarn. We'll need these tools as we build React apps.

You will use Yarn to add modules to your react project, and install React project scaffolding tools.

```
brew install yarn
```

This will install yarn, and node if it's not already installed.

### 2. HTML
React uses a templating language called JSX which looks similar to HTML but is actually JavaScript. In order to use it you should have some understanding of HTML.

Below are the Elements and Attributes I recommend familiarizing yourself with. Each item is hyperlinked to MDN documentation with more information. All the resources on MDN are a gold mine and I highly recommend referring to them as you get started with web development.

#### Elements
| | | |
--- | --- | --- | ---
[\<h1>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) | [\<p>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) | [\<a>](https://developer.mozilla.org/en/docs/Web/HTML/Element/a) | [\<input />](https://developer.mozilla.org/en/docs/Web/HTML/Element/input)
[\<div>](https://developer.mozilla.org/en/docs/Web/HTML/Element/div) | [\<script>](https://developer.mozilla.org/en/docs/Web/HTML/Element/script) | [\<body>](https://developer.mozilla.org/en/docs/Web/HTML/Element/body)  | [\<link />](https://developer.mozilla.org/en/docs/Web/HTML/Element/link)

#### Attributes
| | |
--- | --- | ---
[class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) | [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) | [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)

### 3. CSS
CSS is one of the ways you'll be designing in the browser. You've probably wanted your designs implemented looking the way they were designed. CSS is your friend, and you can learn the basics on MDN. Learning the CSS syntax, selectors, color properties, display, box-model, and basic positioning will provide a good foundation. You may decide you'd prefer to write styles in JavaScript, but you'll need a foundational understanding of CSS none the less.

#### Selectors
| |
--- | --- |
[\.class](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) | [\#id](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)
[Type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) | [Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes)

#### Properties
| | |
--- | --- | ---
[color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) | [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background) | [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
[padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) | [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) | [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
[width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) | [height](https://developer.mozilla.org/en/docs/Web/CSS/height) | [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
[opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) | [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) | [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

### 4. JavaScript
You don't need to be an expert, but having some understanding of JavaScript and familiarity with the modern syntax will go a long way.

#### Important Concepts
| | |
--- | --- | ---
[Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) | [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |  [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) | [Conditionals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) | [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

In addition, I recommend going through and reading some of the [tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials) MDN provides.

---

 As you learn React you will improve your understanding of all these technologies. Because the React API is pretty small most of the logic and tools you build will be plain JavaScript. If you use a CSS-in-JS library, there will be a lot of carry over from CSS. JSX is very close to the syntax of HTML. Once you understand the underlying technologies which React is built on it, it is a lot easier to build interfaces.


## Up and Running with a React App
When React was first introduced one of the biggest pain points was setting up the webpack configuration. Getting a project set up in a semi functional way took some time and understanding of how Webpack worked. Developer ergonomics have improved even while lots of the underpinning technologies have remained. Tools that allow you to scaffold a project made designing in React a realistic possibility for me.

Two tools I'd like to highlight are Create-react-app and NWB. These tools allow you run a command and have a scaffolded app up and running.

Tools like Create-React-App enabled me to quickly spin up prototypes. That in conjunction with design component libraries enabled me to prototype interfaces in the same medium that they would be interfaces.

If you've never used react before, I'd recommend installing create-react-app, scaffolding and app, poking around a bit to get comfortable with a few files, and then trying to build something very simple.

I have node.js and yarn installed on my machine.
Let's install Create-React-App.
```
yarn install create-react-app
```

And then create a new scaffolded project in a suitable directory (e.g. ~/Documents/Dev).
```
create-react-app first-react-project
```

Next, we'll go into the directory and install our node modules
```
cd first-react-project
yarn install
```

And then start a development server.

```
yarn start
```

Your default browser should open and you should see a splash page telling you everything is set up properly.

**IMG**

If we open up `App.js` in our project we can begin to poke around a bit. This is the code we're presented with.

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

React is all about components, so it's important to note that we can create components in other files and then import them into our project.

If we look at our file system you can see that Create-React app has created the web pack file for us. If you make a change you'll see the changes show up in your browser without having to refresh the page, which is super useful when you're working with styles.

Let's add a simple button component of your own.
```html
<button onClick(alert("you clicked me!"))>
	You can click me
</button>
```

Let's build a seperate file called `Button.jsx` in the `./components` folder.
We can copy over our App.js and rename it so that it is an empty button.


As you look over this App.js file you may have questions about the HTML-like JSX syntax, the class syntax, or something else. Once you've poked around, a bit it's time to dig into the React documentation.


## Using the Documentation
The React.js [resources](https://reactjs.org/docs/getting-started.html) provided on the website are pure gold. If you are looking to learn React and already know your fundamentals, I recommend reading through the [Main Concepts](https://reactjs.org/docs/hello-world.html) section of the docs.

It's a good idea to read the rest as well because you will have an idea of where to look when you get stuck.

<a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world"
  data-size="large">
Tweet</a>
