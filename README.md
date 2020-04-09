# modern-react-with-redux

> This JavaScript course was created by [Stephen Grider](https://github.com/StephenGrider) for Udemy.  
> Sign up at [Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/).

<h1 align="center">
  <img src="https://udemy-images.udemy.com/course/750x422/705264_caa9_3.jpg" style="max-width:100%" alt="modernReactRedux" />
</h1>

Greetings!  

This repository tracks my progress and lessons learned on the Udemy course Modern React with Redux by Stephen Grider.

## **Section Logs**

### **Section 1: Let's Dive in!**
**Completed:** 04/07/2020

**Lessons Learned:** 
* React's purpose:
    * Show content to users, and
    * Handle user interaction
* JSX:
    * Dialect of JavaScript
    * Syntactic sugar for HTML
* create-react-app:
    * Includes many built-in libraries
    * Easy set up for projects
    * Includes babel, webpack, dev server
    * NOTE: Global install is no longer supported!  Must create projects with `npx create-react-app [name of app]]`
* babel:
    * Takes any version of JavaScript and returns ES5 version of code, which can be safely executed by all browsers (not all browsers support newer versions of JavaScript
    * In short, it ensures that any version of JavaScript is backwards compatible
    * Converts JSX syntax, allows HTML-looking code in our JavaScript files
* React components are a class or function (NOTE: This changed to function-based as default with hooks, covered later in course)

### **Section 2: Building Content with JSX**
**Completed:** 04/08/2020

**Related Project:** [JSX](projects/jsx)

**Lessons Learned:** 
* JSX:
    * Browsers do not understand JSX
    * Babel converts JSX to vanilla JavaScript, so browsers can interpret
    * EXAMPLE:
        * Babel converts JSX written as: `const App = () => {return (<div>Hi there!</div>)}`
        * To: `const App = () => {return  React.createElement("div", null, "Hi there!");};`
* JSX vs. HTML:
    * Styling and class have different syntax
    * JSX can reference JS variables 
    * JSX requires curly braces for: 
        * JavaScript variable, and 
        * JavaScript object
* Note common React bug: 
    * "Objects are not valid as a React child"
    * Cannot show JavaScript object inside React component as text
* Many other differences between JSX and HTML (I.e., React requires `htmlFor` instead of `for` attribute).  Sometimes console warning can help point these out

### **Section 3: Communicating with Props**
**Completed:** 04/09/2020

**Related Project:** [Components](projects/components)

**Lessons Learned:** 
* Three tenants of components:
    * Nesting - component can be shown inside another
    * Re-usability - make components that can be easily reused
    * Configuration - should be able to customize component templates as necessary
* Handy CSS library - [Semantic.UI](https://semantic-ui.com/), open source CSS stylesheet link `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">`
* Another handy library to generate content for projects - [Faker.js](https://github.com/marak/Faker.js/)
    * Good for initializing data during an app's development when real data is not yet available 
* Creating reusable and configurable component:
    * Identify duplicate JSX
    * Think of description for the block
    * Create new file to house component, named after descriptor
    * Make new component configurable with props
* Props:
    * System for passing data from parent to child component
    * Customize/configure child component
* When passing component as prop into another component (I.e., rendering a component between open and closing tags of parent component), it shows up under children property of props object 
