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

### **Section 4: Structuring Apps with Class-Based Components**
**Completed:** 04/09/2020

**Related Project:** [Seasons](projects/seasons)
* NOTE: Seasons project still in progress

**Lessons Learned:** 
* Class based components used to: 
    * Manage feedback from the user, or systems within app
    * Update & re-render components 
* Class components:
    * Help organize code
    * Are stateful
    * Understand lifecycle events 
    * REMINDER: Hooks will be covered later in course
* [Mozilla's Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to get user's current location 
* Workaround / manually set location under console menu -> Sensors -> Geolocation override drop down -> select default location
* Reset Geolocation preferences to test users who deny location confirmation - i icon left of browser address -> Location -> Dropdown: Ask, Allow, or Deny
* Timeline of stateless function based Seasons App (demonstrating need for stateful Class based components to handle results of async operation):
    * JS loaded by browser
    * App component rendered
    * We call geolocation (async operation!!!)
    * App returns JSX, gets rendered as HTML
    * We get results of geolocation (AFTER everything has been rendered!!!)
* With stateful Class based component, we want to re-render component with result from geolocation call
* Rules of Class based component:
    * Must be JavaScript class
    * Must extend subclass React.Components 
    * Must define a render method that returns JSX

### **Section 5: State in React Components**
**Completed:** 04/09/2020

**Related Project:** [Seasons](projects/seasons)
* NOTE: Seasons project still in progress

**Lessons Learned:** 
* Rules of state:
    * Only usable in class based components (expect when managed with hooks, covered later in course)
    * It is a JavaScript object, contains relevant data
    * Updating state can trigger components to re-render
    * State must be initialized when component is created
    * Can only be updated with setState() function
* constructor() function in Class is particular to JavaScript, not specifically React.  In JS class, the constructor method is always the first function called when an instance of class is created. 
* super() function in constructor function is referencing the parent's constructor function (in our case, React.Component), since we are re-defining constructor function, we still want to bring over functionality, which is done via super()
* Our Seasons App walkthrough:
    * JS loaded by browser
    * Instance of App component is created
    * App component's 'constructor' function is called 
    * State object is created and assigned to this.state property
    * We call geolocation service
    * React calls the component's render method
    * App returns JSX, gets rendered to page as HTML
    * We get geolocation results
    * We update our state object with this.state
    * React sees that state of a component has been updated
    * React calls render method again
    * Render method returns updated JSX
    * React takes JSX and updates content in DOM
* Conditional rendering - returning different JSX depending on state/props of components
