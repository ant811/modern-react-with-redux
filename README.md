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

### **Section 9: Building Lists of Records**
**Completed:** 04/11/2020

**Related Project:** [Pics](projects/pics)
* NOTE: Pics project still in progress

**Lessons Learned:** 
* Reason for *Warning: Each child in a list should have a unique "key" prop*:
     * Performance consideration
     * When re-rendering, React can skip over updating list items with keys that already exist
     * When list items do not have unique identifiers, React will re-render entire list
     * These unique keys optimize updating lists

### **Section 10: Using Ref's for DOM Access**
**Completed:** 04/12/2020

**Related Project:** [Pics](projects/pics)

**Lessons Learned:** 
* CSS Grid:
    * `grid-template-columns` - sets up column layout
    * `repeat(auto-fill...` dictates how many columns to insert
    * `...minmax(250px, 1fr));` - each column will be min 250px, 1fr means each column will be evenly sized
    * `grid-auto-rows` - native CSS grid that can almost standardize the size of each image in column (I.e., scrunching images down to similar sizes).  The issue now is with images overriding one another's space
    * `grid-row-end: span 3` for example, can allow longer images to take up certain allocated space without overriding neighbors.  This can't work to scale with CCS alone b/c each image may need different span values.  We'll need to write some React code to help determine span value for each image
* Goal of ImageCard component:
    * Let ImageCard render itself and its image
    * Reach into DOM and determine the height of the image
    * Set the image height on state to get the component to re-render
    * When re-rendering, assign a span value to `grid-row-end` to make sure that the image takes up necessary space
* Use React's ref system to reach into the DOM
    * Gives access to single DOM element
    * We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props
    * Similar to vanilla JavaScript `document.querySelector('[DOMelement]').[DOMelement property]`
* We need to ensure that we access the image height *after* it becomes available (I.e., callback on image load)
    * add an event listener that runs callback upon load: `this.imageRef.current.addEventListener('load', cb)`
* Updating state with confirmed span, then span value will be passed into div style upon re-render

### **Section 11: Let's Test Your React Mastery!**
**Completed:** 04/12/2020

**Related Project:** [Videos](projects/videos)

**Lessons Learned:** 
* Generate an access key for YouTube API:
    * Go to [console.developers.google.com/](console.developers.google.com/)
    * Create a new project
    * Click on 'Enable APIs and Services'
    * Search for 'YouTube Data' API
    * Click on 'Enable'
    * Click on 'Credentials'
    * Choose 'Web Browser JavaScript' and 'Public Data'
    * Copy API Key!
    * NOTE: Key is meant to be publically available.  For additional security, click on 'Restrict Key' to manage restrictions (I.e., local only, set IP address, etc.)
* [YouTube API Search docs](https://developers.google.com/youtube/v3/docs/search/list)
* In Semantic UI, official styling examples aren't limited to tag/element type, try experimenting using styles on whichever tags/elements you want to use!
* Make use of a callback (bound to parent) when communicating from child component to parent component
* Playing a video in `Iframe` tag:
    * Makes external request
    * Semantic UI className to embed video player in div: `className="ui embed"`
    * Pass `iframe` tag its source property`
* Adblockers produce the remaining console warmings, we can ignore those
* Semantic UI has its own handy grid system
    * Span of the browser page is 16 columns, can split up elements by column allocations
* Set default terms for better user experience
    * Default search term, loading notification is not helpful
    * Default video selected (the first element in the array), so when a new search is run, the former selected video is replaced with a relevant video


### **Section 12: On We Go...To Redux!**
**Completed:** 04/13/2020

**Related Project:** [CodePen Redux Example](https://codepen.io/sgrider/pres/oQjBvG)

**Lessons Learned:** 
* What is Redux?
    * State management
    * Makes creating *complex* applications easier
    * *Not* required to create a React app
    * Redux library was *not* explicitly designed to work with React
* Can be very challenging at the beginning, initial high level of difficultly
* Insurance Analogy of Redux Operations:
  | | | | | |
  | ------------- |-------------| -----| ----- | ------ |
  | Action Creator| Action | Dispatch | Reducers | State |
   | Person Dropping off Form | The Form | Form Receiver | Departments | Compiled Department Data |
* *Action Creator* is a function that will create & return a plain JavaScript object.  This plain object is known as an *Action*, which has `action` and `payload` properties. The purpose of an *Action* is to describe some changes that we want to make to the data inside of our application. *Dispatch* takes in Action, makes copies of that object, and passes them along.  *Reducers* are functions that are responsible for taking in an Action w/ data, processing Action, updating data when relevant, and returning data to be centralized in *State*, which is a central repository of data.  React applications can then reach into the Redux state and get access to all updated data. 
* Reducers should *always* return new array/object, should not modify a passed in data structure
* Only at small, distinct points will you need to reference Redux library, a lot of setting up is down w/ plain JavaScript
* A Redux *Store* is an assembly of all Action Creators and Reducers
* Store object contains references to all reducers, and dispatcher (to pass the action to all reducers)
* Store object contains `getState()` method to retrieve data
* *Only* way to modify state in Redux is by dispatching actions
* Redux helps ensures steady growth of complexity when an application grows

### **Section 13: Integrating React with Redux**
**Completed:** 04/14/2020

**Related Project:** [Songs](projects/songs)

**Lessons Learned:** 
* React-Redux - a separate library, allows both libraries to communicate
* Need to install both: `npm install --save redux react-redux`
* As we will be working with Redux, we will use less stateful React components
* *Provider* and *Connect* come from React-Redux
* Pass Redux Store into Provider, which is rendered at the very top of our application hierarchy.  
* Connect communicates with the Provider tag, NOT through props, but through React Context system (discussed later in the course).  It allows parent and child components to communicate regardless of components in between them.  Connect can pass down 1) data from Provider, and 2) Action Creators, as props into a React component. 
* Get data from Redux store into a component by configuring `connect()` w/ `mapStateToProps`
* Why is Action Creator passed into the `connect` method instead of called inside of component?
    * Redux is not magic!
    * Redux does not automatically detect action creators being called 
    * Redux does not automatically detect a function returning an object that is an 'action'
    * When importing an action creator, we are really just importing regular JavaScript functions
    * When have to send returned action into dispatch to update store.  The connect function does this heavy lifting
    * Redux code is heavy on setting up a boilerplate

### **Section 14: Async Actions with Redux Thunk**
**Completed:** 04/14/2020

**Related Project:** [Blog](projects/blog)
* NOTE: Blog project still in progress

**Lessons Learned:** 
* App goals - Absolutely understand:
    * Purpose of reducers
    * Making API requests with Redux
    * Purpose of `redux-thunk` (Redux middleware)
* Free source of fake data for testing apps! - `jsonplaceholder.typicode.com/`
* `redux-thunk` middleware to help us make network requests in a redux application
* Our `src/index.js` file is a very common Redux & React-Redux boilerplate setup
* | General Data Loading in Redux | 
  | ------------- |
  | 1) Component is rendered to screen     | 
  | 2) `componentDidMount` gets called    | 
  | 3) We call Action Creator from `componentDidMount` | 
  | 4) Action Creator runs API call |
  | 5) API responds with data |
  | 6) Action Creator returns an `action` with the fetched data on the `payload` property |
  | 7) Some reducer sees the action, returns the data from the `payload` |
  | 8) Because we generated some new state object, redux & react-redux cause our React app to re-render |
* IN GENERAL:
    * Components are responsible for fetching the data that they need by calling an action creator (usually from within lifecycle method)
    * Action Creators are responsible for making API requests (This is where redux-thunk comes into play)
    * We get fetched data into a component by generating new state in our redux store, then getting that into our component via mapStateToProps
* PostList.js component is class-based to make use of lifecycle methods like `componentDidMount`
* Using standard async/await operations inside of action creator breaks rule of Redux!  *ERROR: Actions must be plain objects.  Use customer middleware for async operations*
* What's wrong with our janky async/await `fetchPosts`()? 
    * Action creators must return plain JS object
        * Testing code @ [babel.io](https://babeljs.io/), we see that our transpiled ES2015 code is note actually returning plain JS object.  Initially, we are returning a *request object*
    * By the time our action gets to a reducer, we won't have fetched our data!
        * Removing async/await does NOT help, b/c then our action creator returns a promise object!
* We need to code an async action creator w/ middleware `redux-thunk`, which will take a bit of time before it gets dispatched
* Flow: Action Creator -> Action -> dispatch -> Middleware -> Reducers -> State
* Middlewares in Redux:
    * Function that gets called w/ every action we dispatch
    * Has the ability to STOP / MODIFY, or otherwise impact actions
    * Tons of open source middleware exists
    * Most popular deals with async action creators
    * We will use redux-thunk
* Rules change with redux-thunk - Action creators can return 1) plain JS action object, or 2) a function (which thunk will call for you)
* When Action Creator returns a function:
    * Thunk calls function w/ dispatch and getState functions
    * When the request is complete, dispatch action manually
* Source code of [redux-thunk](https://github.com/reduxjs/redux-thunk)

### **Section 15: Redux Store Design**
**Completed:** 04/14/2020

**Related Project:** [Blog](projects/blog)

**Lessons Learned:** 
* | Rules of Reducers | 
  | ------------- |
  | 1) Must return *any* value other than `undefined`    | 
  | 2) Produces `state`, or data to be used inside of your app, using *only* previous state and the action (reducers are pure)| 
  | 3) Must *not* reach out of itself to decide what value to return | 
  | 4) Must *not* mutate its input `state` argument |
* The first time reducer called, during initialization, it passed undefined as the first argument, and returns v1 of state.
* The next time reducer is called, it passes v1 of the state as the first argument and returns v2 of the state (and so on...)
* Final rule 4 is misleading and/or...wrong...?
    * Mainly need to worry about mutating an existing array or object
    * Since strings/numbers are immutable, when you 'change' a string/number, you are producing a new one, and not altering original
    * J/k!  You can totally mutate it!
    * It is easier to tell beginners 'Don't' mutate than to tell them when they can/can't
* There is a corner case where mutation will cause issues:
    * To be clear, in this course we will *NOT* be mutating the state
    * Reviewing redux source code, we see that combineReducers checks for equality between former state and new state.  If redux does not detect that newState is different than the former state, then there will be no new state, the app won't re-render, we won't see changes to the app!
* Lecture 178 has many examples of good vs. bad state updates regarding arrays and objects (I.e., map, filter, spread operators, all instead of operating in input array)  
* Common to use switch statements in reducers 
* NOTE Lecture 186 - Extract anything that is going to do some computation on our redux state, and the props coming into component, within the `mapStateToProps` function
* Memoize API for efficiency (memoize function from lodash library).  *HOWEVER* - not a good real-world example, as you could only query each user ONCE, regardless of whether data has changed.  
* Consolidate action creators into ONE that gets called, map over the result of getPosts with getUsers

### **Section 16: Navigation with React Router**
**Completed:** 04/15/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* Different pages on the screen are dictated by a URL ending 
* We are going to build authentication into our component
* *Stream* and *channel* will be used interchangeably when discussing our Twitch-like app
* Logging in will 1) expand user's capabilities to edit, create, delete streams, and 2) change landing page layout
* We will have several mini-projects inside of the project folder streams
* App challenges:
    * Need to be able to navigate around separate pages in our app (we will do this in react-router)
    * Need to allow a user to login and logout (Will use google O Auth)
    * Need to handle forms in redux 
    * Need to master CRUD operations in React/Redux (what to do with records: Create, Read, Update, Destroy)
    * Errors will likely occur!  Need good error handling system
* Install `react-router-dom`, not `react-router`(included with react-router-dom)
* React-Router only cares about URL after domain and port
* When validating paths, react-router will check to see if the URL ending 'contains' the route.  `exact` property helps enforce strictness.  E.g., routes `/` and `/pagetwo` will both spawn unless `exact` property is added.  Note that adding `exact` without specifying value is the same as `exact={true}`
* How to NOT navigate - HTML anchor tag updating URL
* When you click on anchor tag:
    * Browser makes a request to localhost:3000
    * Dev server responds with index.html
    * Browser receives index.html and *dumps* former HTM file, *including all React/Redux stored data*
    * index.html downloads and executes JS scripts
    * App starts up
* Instead, use the react-router `Link` component.  Note that Link tags will still show up as an anchor tag when inspecting rendered DOM
* What we want:
    * Click on the Link tag
    * React-Router prevents the browser from navigating to the new page and fetching new index.html
    * URL still changes
    * 'History' sees updated URL, takes URL and sends it to BrowserRouter
    * BrowserRouter communicates the URL to the Route component
    * NOTE: The idea of NOT making additional requests for a separate HTML document when clicking on a link is where the term *Single Page Application* comes from: ONLY loading ONE HTML document.  Users aren't really visiting different pages, we are just hiding and showing different components
* Lecture 205: Optional, helpful for use of React-Router when trying to deploy an application:
    * In addition to BrowserRouter, there are two other types of routers, the only difference is what part of the URL that they look at when deciding what content to show on the screen
    * BrowserRouter - looks at everything after top-level domain (TLD) or port
    * HashRouter - Uses everything after `#` in the path
    * MemoryRouter - Doesn't use URL to track navigation
    * BrowserRouter is the most difficult to deploy
    * Note what you are doing when making use of the Create-React-App development server - when content for route `/pagetwo` can't be identified, it just serves up index.html (whereas traditional server would just return 404 error if it can't find anything).  Important to note this, at this time in our application, all the routes are in client-side JS code (not defined server routes)
    * HashRouter tells the server to ignore everything after the hash, which will just instead serve up index.html
    * Components outside of BrowserRouter will always be shown (E.g., Header component in our app)
    * Note: Semantic UI styling in Header component comes from Menu section
    * HOWEVER - the issue arises when trying to use Links outside of a Router like we are trying to do with our persistent Header component.  We'll need to put the Header component within BrowserRouter

### **Section 17: Handling Authentication in React**
**Completed:** 04/15/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* OAuth Authentication:
    * Use authentication w/ outside service provider (Facebook, Google, LinkedIn, etc.)
    * User authorizes our app to access their information
    * Outside provider tells us about the user
    * We are trusting the outside provider to correctly handle authentication of a user
    * OAuth can be used for 1) user identification in our app, and 2) our app making actions on behalf of the user (we won’t do #2 in this application)
    * A scope is permission for access to information.  We will only care about email scope
* We will work with OAuth for JS Browser Apps:
    * OAuth for servers:
        * Usually used when your app needs access to user data when they *are not* logged in
        * Difficult to set up, need a lot of info from the user
    * OAuth for JS Browser :
        * Usually used when your app needs access to user data when they are logged in
        * Easy to set up thanks to Google JS's library to automate the flow
* Google JS APIs not available to download via npm, need to add script to HTML Head element: `<script src="https://apis.google.com/js/api.js"></script>`
* Google's `gapi` library used to 1) interact with OAuth flow and 2) other types of Google services
* [gapi JavaScript Library docs](https://developers.google.com/identity/sign-in/web/reference)
* Our Redux architecture for this project won't follow normal conventions:
    * Our Google Auth component will communicate with API Gapi Auth2 instead of our action creators.
    * This is to isolate the Google Auth functionality to one component  
    * Typically, ONLY the Action Creators should be responsible for changing state

### **Section 18: Redux Dev Tools**
**Completed:** 04/15/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* Note that forms in Redux are tricky
* Redux dev tools for peaking inside store:[github.com/zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* VERY handle interface, shows current and former states and received actions, able to re-render app with former states
* Airbnb uses Redux, can use dev tools to see what states they manage
* You can initiate debug session with dev tools (which makes data persistent across page refreshes).  
* to initiate: `localhost:3000?debug_session=<some string>`
* Can create different sessions to serve as debugging checkpoints

### **Section 19: Handling Forms with Redux Form**
**Completed:** 04/16/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* Redux-Form can be tricky, but it comes with a lot of built-in functionality: reducers, action creators, mapStateToProps
* [Redux-Form docs](https://redux-form.com/), examples section most useful, Wizard Form is handy, this app will make use of Sync Validation form 
* Refactoring StreamCreate to a class-based component, as there will be many helper functions, and a class helps organize code (E.g., helpers as methods)
* The *function* `reduxForm` has same functionality as `connect` in `react-redux`
* The `<Field />` component can be ANY type of input: text field, checkbox, radio button, drop-down, anything that solicits input from the user.  BUT these components themselves do not know how to show text field, checkbox, etc., they individually are not responsible for getting something to show up on the screen
* Our validation function returns an empty object when input is valid (as per our rules) 
* Semantic UI by default hides error messages - we will add CCS to render messages to DOM

### **Section 20: REST-Based React Apps**
**Completed:** 04/17/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* Installing [json-server](https://www.npmjs.com/package/json-server) for mocking REST API requests.  We are using `json-server` because of its strict adherence to RESTful conventions
* REST conventions are 
    * standardized system for designing APIs
    * standardized systems for routes and request methods, used to operate on different record actions: GET one, GET all, POST (create), PUT/PATCH (update), DELETE
* Creating a static database to interact with `json-server`
* Lecture 245: Note that action creator `createStream` invokes `dispatch` and passes type and payload b/c it is NOT a plain object (see lecture questions for a link to the former lecture that covers this topic)
* For ease of updates and access, we will store data in the state in an object, and not an array
* Key interpolation: ES2015 syntax for key assignment.  E.g., `{state..., [action.payload.id]: action.payload }`
* lodash `mapKeys` method accepts array [from API] and returns object {our new state}
* Getting userId from inside action creator - When we return a function from an action creator, the function gets automatically called by `redux-thunk` with two arguments:
    * dispatch
    * getState
* Intentional navigation - the user clicks to a new page
* Programmatic navigation - code forcibly navigates the user
* How to handle programmatic navigation:
    * User submits a form
    * We make a request to backend API to create the stream
    * ...time passes...
    * API responds with success or error
    * We either show an error, or navigate them back to list of streams
* How to enact programmatic navigation in React-Router
    * Not always easy. 
    * BroswerRouter creates History object, which keeps track of the address in the address bar of the browser
    * History object can also change the address bar
    * Easy enough to trigger page change within a component, but we are trying to trigger page change within the *action-creator*, triggering page change within anything other than a react component is tricky
    * *Just* getting access to history object is a pain
    * So...we are going to create our own history object!
    * And...instead of using BroswerRoute, we are going to create a plain Router
    * `history` module was installed as a dependency of react-router-dom
* Passing along selected stream with:
    * Selection reducer?, or
    * URL-based selection? <-- this is preferred and more beneficial
* REMINDER:  mapStateToProps can accept two arguments (*Lecture 266*):
    * First is always state
    * OPTION: Second is `ownProps`, which is how we can access a component's props outside of the component definition
* Lecture 267: If we refresh the edit page, or directly visit the edit page, Redux state is empty! (Right now, the state only loads with all streams at StreamList component on route '/')
    * BIG RULE:  With React-Router, EVERY component needs to be designed to work in isolation (I.e., fetch its own data)
    * We can't assume that every component will have access to data that might have been previously loaded
* Lecture 269 - discussion about making re-usable components
    * Generalized StreamForm component
    * StreamForm will be used by both StreamCreate and StreamEdit
* Redux-form accepts optional parameter initialValues
* StreamEdit returns object with updated AND current values (i.e., return object also includes user id and id num of stream)
    * We ONLY want to see return object with values that have been changed
    * Fix with only passing in title and description as the initial value (using lodash `pick` method)
* PUT vs. PATCH RESTful requests:
    * PUT updates ALL properties (if the property is MIA, it gets removed UNLESS it is default property like our `id` property in our json-server fake db)
    * PATCH only updates some properties (those that are marked for update)

### **Section 21: Using React Portals**
**Completed:** 04/18/2020

**Related Project:** [Streams](projects/streams)
* NOTE: Streams project still in progress

**Lessons Learned:** 
* When a user navigates to the delete page, we are going to show a *modal* window to them.
    * A modal window prompts the user to take some action (I.e., 'Are you sure you want to delete this?')
    * Nothing else the user can do until they resolve the action
* Creating modals with React is surprisingly challenging
* Normally, all components are rested within div with child of `root`
* We will use portals to get around the requirement of having to nest within `root` div
* Modal is designed to 'sit on top of, obscure' elements/components behind it
* For an example, we will write modal example in vanilla HTML
* Our HTML modal will have two divs:
    * Outer div will be greyed out background
    * Inner div will be the content of modal
* Vanilla CSS rule `z-index` controls which element gets rendered on top of the other, assigned integer values
* We are creating a 'stacking context', using `position: relative`, and `z-index: 0`.  Stacking context creates a new way of comparing sibling elements, compare their z-index, and not a nested element's z-index, note that later elements 'win', in our case sidebar element with the same z-index of 0
* With portals, we don't have to stick with the normal component hierarchy, portals allow us to render some element, but not as a direct child
* Returning to React to build our modal, we will create new div in the HTML file that is a sibling to root
* Lecture 280: Fixing styling issues when passing JSX w/ Semantic UI stylings, two buttons wrapped in one div, as a prop to be rendered...I am not having these styling issues though...Using React fragment to fix the issue
* React fragment - like an invisible element, it can wrap sibling elements, but it doesn't produce any HTML itself
    * empty tag: `<> </>`, or 
    * fragment component `<React.Fragment> <React.Fragment/>`<-- this prevents linters from tagging an error, as some might interpret empty tags as invalid syntax

### **Section 22: Implementing Streaming Video**
**Completed:** 04/18/2020

**Related Project:** [Streams](projects/streams)

**Lessons Learned:** 
* Prevent StreamCreate @ '/streams/new ' & StreamShow @ '/streams/:id' from both rendering at the same time:
    * More React Router trickiness
    * Import component `Switch` from `react-router-dom`
* *NOTE: Basics of Streams project is complete.  RTMP NodeMediaServer set-up is optional.  I am committing this project at this point to have a reference point to a React-Redux & React-Router CRUD application boilerplate.  After committing, I continue with Lesson 22 and complete the RTMP NodeMediaServer portion*
* [RTMP GitHub documentation](https://github.com/illuspas/Node-Media-Server)
    * A node.js implementation of an RTMP server
    * We will use this to stream a video from OBS (open broadcaster)
    * Makes videos available for consumption on PORT 8000
    * Accepts traffic on PORT 1935
* [OBS Software docs](https://obsproject.com/)
* [Flash player docs](https://www.npmjs.com/package/flv.js)
    * old school, but perfect for the scope of our project
    * Akin to Axios, it reaches to a server to get content
* Lecture 296 - We only want to attempt to set up video plater after we know that the video stream has been fetched
* Cleanup with `componentwillUnmount`
    * We need to tell our video player server to stop streaming
    * Wind up any resources that our component may have created

### **Section 23: The Context System with React**
**Completed:** 04/18/2020

**Related Project:** [Translate](projects/translate)
* NOTE: Translate project still in progress

**Lessons Learned:** 
* Props system vs. context system
    * Props: Gets data from a parent component to a *direct* child component
    * Context: Gets data from a parent component to *any* nested child component
* With Context, do we still need Redux?
    * Yes - Context is just for communicating data, just about props
* Communicate via a Context Object
* The official React documentation is not always clear on how we get info into, and from, the Context object
* Two ways to pass data in Context:
    * default value --> Context Object --> this.context in child component
    * Provider component --> Context Object --> Consumer component in child component
* Different reasons why one might use one over the other
* Create default value by directly passing it into context call
* Component needs `contextType` to connect to context
    * MUST be called `contextType` else it won't work
    * defined with `static`:
        * `static contextType = [name of imported context]`
        * `static keyword` - adds the property to the class itself
        * Same as `Button.contextType = [name of imported context]`
* Default values can pass along, but these can't be changed.  We need Provider and Consumer components
* We are not bound to using React's state management system to update context (however, that is often the case)
* | Re-render flow: | 
  | ------------- |
  | 1) Application loads  | 
  | 2) We create a context object | 
  | 3) App component gets rendered, creates a `Provider` that wraps UserCreate component | 
  | 4) Provider updates the value of the context object to `this.state.language` |
  | 5) `Field` and `Button` reach into Context object and see the value from `this.state.language`  |
  | 6) `Field` and `Button` render appropriate text to browser | 
* 3 through 6 get repeated *anytime* a user clicks on flag and updates state
* HUGE 'gotcha', not well explained in official React Context docs:
   * Step 3) App component gets rendered, creates a `Provider` that wraps UserCreate component
   * Each separate use of `LanuageContext.Provider` creates a new, separate 'pipe' of information
* Consumer component:
   * Like Provider, automatically created for us when we create a new context object
   * Child within Consumer is always a function, which always gets called with whatever the value is in the Context (value shows up as the first argument)
* Why would we use Consumer component to access Context instead of using this.context?
    * Getting info out of multiple context objects inside of a single component
    * this.context is limiting to one context per component
    * Both Context Providers wrapped around UserCreate (doesn't matter which is inner/outer)

### **Section 24: Replacing Redux with Context**
**Completed:** 04/19/2020

**Related Project:** [Translate](projects/translate)

**Lessons Learned:** 
* Redux Vs. Context
* Context is *not* strictly speaking an equivalent or replacement for Redux
* | Redux | Context |
  | ------------- | ------------- |
  | Distributes data to various components |  Distributes data to various components |
  | Centralizes data in a data store |  |
  | Provides a mechanism for changing data in the store | |
* If you want to use Context in place of Redux:
    * (Not an issue with Context) We need to be able to get data to any component in our hierarchy
    * (Can be an issue with Context) We need to be able to separate our view logic from business logic (I.e., avoid components that both return JSX component and manage state)
    * (Can be an issue with Context) We need to be able to split up business logic (I.e., not have a single file with thousands of lines of code)
* Refactor to LanguageContext.js:
    * Creates language context (not new)
    * Houses state and setState callback
    * Note that we need to export LanguageStore AND Context
* Reasons to continue to use Redux:
    * Excellent documentation
    * Well-known design patterns
    * Tremendous amount of open source libraries 
* However, with Context:
    * No need for an extra library (main big benefit)
    * Challenges: Hard to build a 'store' component with cross-cutting concerns (E.g., consider how action creators can easily access Redux store, our faux Context store would need a lot more supporting code to handle the same level of complexity)
