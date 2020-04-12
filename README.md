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
    * NOTE: Global install is no longer supported!  Must create projects with `npx create-react-app [name of app]`
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

### **Section 6: Understanding Lifecycle Methods**
**Completed:** 04/09/2020

**Related Project:** [Seasons](projects/seasons)

**Lessons Learned:** 
* Component Lifecycle:
    * Constructor
    * Render
        * RESULT: Render returns some JSX, visible in DOM
    * NOTE: Next three are called during distinct times
    * ComponentDidMount
        * Immediately called after component first renders to DOM
        * Common for initial data loading
    * ComponentDidUpdate
        * Automatically called any time component updates itself
    * CompoentWillUnmount
        * Commonly used for clean-up after component is taken down
* Constructor lifecycle method:
    * Good place to do one-time setup, set initial state
    * Possible to do data initialization/loading (but better to do this in componentDidMount)
* Render lifecycle method:
    * Renders JSX
* ComponentDidMount lifecycle method:
    * PERFECT location to do some initial data loading for your component, or to kick-off some outside process like API calls
    * ONLY gets invoked once
* ComponentDidUpdate lifecycle method:
    * Place to do data loading that needs to be done every time a component is updated 
* ComponentWillUnmount lifecycle method:
    * Done for cleanup, not as commonly used as it used to be
* Alternate state initialization - declaring state outside of constructor: `state = { lat: null, errorMessage: '' };`
    * Babel will build up constructor for you automatically and initialize state 
* Semantic.UI library provides quick, ease of use styling (E.g., icons, loading screen)
* Can set default props with `ComponentName.defaultProps = {}`
* Avoid, if possible, conditional return statements in render().  If each return needs some standardization, it is suboptimal to apply standards to each return statement.  Instead handle conditional returns in helper function.

### **Section 7: Handling User Input with Forms and Events**
**Completed:** 04/11/2020

**Related Project:** [Pics](projects/pics)
* NOTE: Pics project still in progress

**Lessons Learned:** 
* App challenges/tasks:
    * Get search term from the user
    * Make API call with search term
    * Render fetched image to the screen
* `onChange` event receives callback, and callback receives `event` object.  `event.target.value` contains user input from `input`. 
* Handy properties that respond to user input (wiring up callbacks or event handlers):
    * onClick - the user clicks on the target
    * onChange - any text change in `input` 
    * onSubmit - `form` submitted  
* There is a community convention on callback handlers:
    * on || handle[name of element assigned to event]\[event name\]
    * EXAMPLE:  `onInputChange`, or `handleInputChange`
* Controlled vs. Uncontrolled elements:
    * Controlled:
        * Critical part: When component re-renders, we take the value from state and assign it to value property of the input
        * Controlled elements are much preferred
        * As developers, we don't like to / should not store the single source of truth inside of our HTML elements.  We want to centralize all information inside of our React component on the state property and make sure that the React side of our application is what is driving all data flowing through our application. We should NOT store data inside of the DOM
        * Handy for setting default text in the input, and for enforcing rules on user input (E.g., ensuring that input text is capitalized with `e.target.value.toUpperCase()`) 

    * Uncontrolled:
        * In short, when data stored on the DOM, instead of inside React state.
* Flow of our re-factored, controlled SearchBar component:
    * User types in the input
    * Callback invoked
    * We call setState with new value
    * Component re-renders
    * Input is told what its value is (coming from the state)
* Default behavior of html `form` element: submit, and page refreshes (search term is gone!)
    * prevent with `e.preventDefault();`
* Understanding `this`:
    * What is `this` used for in class?
    * How is the value of `this` determined by a function?
    * An instance of our SearchBar component contains properties:
        * state
        * render
        * onFormSubmit
    * `this` is a reference back to the class instance itself (I.e., why we reference state by `this.state`)
    * Where our code is current broken is trying to invoke `this.onFormSubmit`
    * Look at where you call the method - `this` refers to what is left of the dot where function is called
    * `bind` a method to ensure that the correct value of `this` is accessible:
        * define the constructor, bind the function within constructor, then overwrite the existing one: E.g., `this.drive = this.drive.bind(this)`
        * A lot of legacy code is written this way
    * Newer / contemporary way to solve:
        * Arrow function!
        * Note that when `function` keyword is used, it leads to a broken value of `this`, it does not pass on context
        * Arrow functions bind value of `this` for all code inside of the function
        * Two ways to solve our `this` error with arrow functions:
            * 1) define method as arrow function:
            `onFormSubmit = (e) => {e.preventDefault(console.log(this.state.term)}`
            * 2) define anonymous arrow function as callback, with event as the argument passed in to method 
            `onSubmit={(event) => {this.onFormSubmit(event)}}`  

### **Section 8: Making API Requests with React**
**Completed:** 04/11/2020

**Related Project:** [Pics](projects/pics)
* NOTE: Pics project still in progress

**Lessons Learned:** 
* [Unsplash API documentation](unsplash.com/developers)
* Axios vs. Fetch for API requests:
    * Axios:
        * 3rd party package
        * Frequently used in React applications 
        * Contails a lot of built in nuts and bolts to make syntax easier
        * Handles requests in predictable fashion
    * Fetch: 
        * Singular function built into modern browsers
        * More basic, lower-level function
        * A lot of corner cases to consider
* Time flow of Pics app:
    * Component renders itself one time w/ no images
    * `onSearchSubmit` method called
    * Request made to Unsplash
    * ...wait...
    * Request complete
    * Set image data on state of App component
    * App component re-renders and shows images
* Getting data from Axios GET requesting - from within `.then()`, or with async/await
* async/await:
    * Place `async` keyword in front of method name / argument list in arrow function definition (E.g., `onSearchSubmit = async (term) => {`...)
    * Place `await` before async call, assign return to some variable
    * Easy way to write async code as if it is sync code
* Factor configuration outside of App component
* `axios.create` creates instance of axios client with defaulted properties
