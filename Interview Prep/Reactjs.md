INDEX/Term (to read speecific part search below topics directly.)

> React
> DOM
> Stateless Components (Functional Components)
> Stateful Components (Class Components)
> What are faetures of REACT
> `this` KEYWORD
> ARROW FUNCTIONS
> BIND ,CALL ,APPLY
> HIGHER ORDER COMP HOC
> create-react-app
> REACT HOOKS
> Functional Component in Life Cycle using UseEffect
      >>> componentDidMount
      >>> componentDidUpdate
      >>> componentWillUnmount
      >>> componentDidCatch
> Class based Life Cycle with execution sequence
> REDUX
> REACT LIFE CYCLE
> CONTROLLED && UNCONTROLLED COMPO IN REACT
> MODEL VIEW CONTROLLER (MVC)
> PURE COMPONENTS
> createElement()
> Babel
> Tree Shaking
> ONE-WAY (Unidirectional)data binding
> React faster than angular ?
> Props VS State
> Server-side rendering
> REF (reference) in Reactjs
> npm (Node Package Manager) VS npx
> Synthetic Events
> Event pooling
> Event Bubbling vs Event Propagation
> Event Delegation





/////////////////////////////////////////////  START  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



## React

Overview:
Open-source JavaScript library by Facebook
Built for UI and single-page applications

Key Features:
Component-based architecture
JSX syntax for HTML-like code in JavaScript
Unidirectional data flow (parent to child)
Introduction of states and lifecycle via Hooks (React 16.8)

---

## DOM

The Virtual DOM (Document Object Model) is a concept used in web development to improve the performance and efficiency of updating the user interface. It is primarily associated with frontend libraries and frameworks like React.

Here's a high-level explanation of how the Virtual DOM works:

> Real DOM:
> The DOM represents the structure of a document as a tree of objects.
> Every time there is a change in the state of an application, the entire DOM tree is re-rendered to reflect the updated state.
> This process can be computationally expensive, especially for complex web applications.
> When you open a web page in your browser, what you see and interact with is the result of the real DOM.
> We can see it on Inspect Browser -> Elemennt
> or can console
> console.log(document.documentElement); // Log the entire HTML document
> console.log(document.body); // Log the body element

> Virtual DOM:
> When a React component is initially rendered or when there is a change in the state or props, a virtual representation of the DOM is created. This is known as the Virtual DOM.
> Instead of updating the real DOM directly, a virtual representation of the DOM is created and maintained in memory.
> This virtual representation is a lightweight copy of the real DOM.
> Changes are first applied to the virtual DOM, and then the framework calculates the minimum set of changes needed to update the real DOM.

> Reconciliation:
> When the state of the application changes, a new virtual DOM tree is created.
> The new virtual DOM tree is then compared with the previous one through a process called "reconciliation."
> The differences (or "diffs") between the old and new virtual DOMs are identified.

> Minimizing Updates to Real DOM:
> Only the specific differences identified during the reconciliation process are applied to the real DOM.
> This minimizes the amount of manipulation required on the actual webpage, making the process more efficient.

> Performance Benefits:
> By selectively updating only the parts of the DOM that have changed, the Virtual DOM helps to optimize rendering and improve the overall performance of web applications.

- In Browser you can see REAL DOM
- The Virtual DOM is an abstraction used by certain frontend libraries and frameworks

-----------------------------------------------------------------------------------------------------------------------------

## Stateless Components (Functional Components):

Dont manage own states
receive data from props
used where perpose is UI only

exxample:-

> > > Start

// Stateless component (functional component)
const Greeting = (props) => {
return <p>Hello, {props.name}!</p>;
};

> > > End

## Stateful Components (Class Components):

defined in ES6 classes that extends "React.Component"
manage and update state using setState method
used mostly for dynamic data and response to user like component
have COMPONENT LIFE CYCLE at different component existance

exxample:-

> > > Start

class Counter extends React.Component {
constructor(props) {
super(props);
this.state = {
count: 0
};
}

incrementCount = () => {
this.setState({ count: this.state.count + 1 });
};

render() {
return (

<div>
<p>Count: {this.state.count}</p>
<button onClick={this.incrementCount}>Increment</button>
</div>
);
}
}

> > > End

Note:-
The useState and other hooks enable functional components to manage state and have more advanced behavior, blurring the distinction between stateless and stateful components to some extent.

---------------------------------------------------------------------------------------------------------------------------

## What are faetures of REACT :

-Declarative Syntax

for example:-

> > > Start
> > > // Declarative syntax in React ( expecting greetings)
> > > const Greeting = (props) => {
> > > return <p>Hello, {props.name}!</p>;
> > > };
> > > End

-Component-Based Architecture:
-Virtual DOM:
-React JSX:
-Unidirectional Data Flow:
-React Hooks:
-Reusable Components:
-React Router:
-One-Way Data Binding:
React uses one-way data binding, where changes in the parent component trigger updates in child components.

---------------------------------------------------------------------------------------------------------------------------

## `this` KEYWORD { both class-based and functional components } :

<!-- CLASS BASED COMPONENTS -->

In class methods and the constructor, this refers to the instance of the class. Here's an example:

> > > Start

class MyClassComponent extends React.Component {
constructor() {
super();
this.state = {
count: 0,
};
}

handleClick() {
// 'this' refers to the instance of MyClassComponent
this.setState({ count: this.state.count + 1 });
}

render() {
return (

<div>
<p>Count: {this.state.count}</p>
<button onClick={this.handleClick.bind(this)}>Increment</button>
</div>
);
}
}

> > > End

In the example above, we use .bind(this) when passing this.handleClick as the event handler to ensure that this inside handleClick refers to the instance of MyClassComponent.

> > > Start

const ObjForEachMethod = {
name: "Akshay",
age: 25,
city: "Delhi",
hobbies: ["Painting", "Sketching", "Coding", "SInging"],
showHobbies: function () {
this.hobbies.forEach(function () {
console.log(this) //window
})
return this //object
}
}

const ObjForEachArrowMethod = {
name: "Akshay",
age: 25,
city: "Delhi",
hobbies: ["Painting", "Sketching", "Coding", "SInging"],
showHobbies: () => {
console.log(this) //window
this.hobbies.forEach(function () {
console.log(this) //ERROR
})
return this //object
}
}

function getFullNameReguarFunction(){
return this; //window
}

const getFullNameArrowFunction = () => {
return this; // window
}

> > > End

------------------------------------------------------------------------------------------------------------------------

<!-- FUNCTIONAL COMPONENTS -->

- Arrow functions don't have their own this. Instead, they inherit this from the surrounding scope.
  This behavior is particularly useful in React when working with event handlers and callback functions.

> > > Start

import React, { useState } from 'react';

const MyFunctionalComponent = () => {
const [count, setCount] = useState(0);

const handleClick = () => {
// 'this' is not used here, and it automatically refers to the surrounding scope
setCount(count + 1);
};

return (

<div>
<p>Count: {count}</p>
<button onClick={handleClick}>Increment</button>
</div>
);
};

> > > End

-----------------------------------------------------------------------------------------------------------------------

## ARROW FUNCTIONS :

- Code shorter ,concise and readable than traditional function
- Lexical scoping of this: Dont have their own this context;
  they inherit this from the surrounding scope.
  This behavior is particularly useful in React when working with event handlers and callback functions,
  avoiding the need for explicit binding or using functions like bind in class components.

> > > Start

class MyComponent extends React.Component {
handleClick = () => {

    // 'this' is automatically bound to the instance of MyComponent
    console.log('Button clicked');

};

render() {
return <button onClick={this.handleClick}>Click me</button>;
}
}

> > > End

-Easier use with higher-order functions: such as those provided by React hooks like useEffect or useCallback.

> > > Start

useEffect(() => {
// Effect logic
}, [dependency]);

> > > End

-Implicit return for single line expression

> > > Start

const Greeting = ({ name }) => <p>Hello, {name}!</p>;

> > > End

-------------------------------------------------------------------------------------------------------------------------------

## BIND ,CALL ,APPLY


Call is a function that helps you change the context of the invoking function.
In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

Apply is very similar to the call function. The only difference is that in apply 
you can pass an array as an argument list.

Bind is a function that helps you create another function that you can execute 
later with the new context of this that is provided.

below are examples to understand it all

const god = {
position : "God",
name : "Krishna",
work : function(wills){
return `Hey I am God ${this.name} and I am ${this.position} , I made ${this.thing}.
                my will is ${wills}`
}
}

const person1 = {
    name : "Akshay",
    lastname : "Chavhan",
    fullname : function(){
        return `${this.name} ${this.lastname}`
    }
}

const person2 = {
    name : "Gotu",
    lastname : "Rathod",
    fullname : function(){
        return `${this.name} ${this.lastname}`
    }
}

const person3 = {
    name : "Raamesh",
    lastname : "Desai"
}

const godwork = {
name:"Shankarji",
position : "Destroyer",
thing : "Everything is possible in my hands"
}

// console.log(person1.fullname()); //Akshay Chavhan
// console.log(person2.fullname()) // Gotu Rathod

// call method
// console.log(person1.fullname.call(person3)) //Raamesh Desai
console.log(god.work.call(godwork , "BE VEGAN")) //Hey I am God Shankarji and I am Destroyer , I made Everything is possible in my hands.
// my will is BE VEGAN
// apply
// console.log(person1.fullname.call(person3)) //Raamesh Desai
console.log(god.work.apply(godwork , ["BE VEGAN"])) //Hey I am God Shankarji and I am Destroyer , I made Everything is possible in my hands.
// my will is BE VEGAN

const result = god.work.bind(godwork);
console.log(result("Akshay")); //Hey I am God Shankarji and I am Destroyer , I made Everything is possible in my hands.
// my will is Akshay



HERE FEW MORE:- 

Syntax for call
>>>
func.call(thisObj, args1, args2, ...)

Where,

func is a function that needs to be invoked with a different this object
thisObj is an object or a value that needs to be replaced with the this keyword present inside the function func
args1, args2 are arguments that are passed to the invoking function with the changed this object.


Note that if you invoke a function without any thisObj argument, then JavaScript considers this property to be a
global object.



-------------------------------------------------------------------------------------------------------------------------------

## HIGHER ORDER COMP HOC

Higher-order components (HOCs) are a powerful feature of the React library.
They allow you to reuse component logic across multiple components.

In React, a higher-order component is a function that takes a component as an
argument and returns a new component that wraps the original component.

>>> 

import React from 'react';

// Higher-Order Component (HOC)
const withUpperCase = (WrappedComponent) => {
  return function WithUpperCaseComponent({ text, ...restProps }) {
    const uppercasedText = text.toUpperCase();

    return <WrappedComponent text={uppercasedText} {...restProps} />;
  };
};

// Functional Component that uses the HOC
const DisplayText = ({ text }) => (
  <div>
    <p>Original Text: {text}</p>
  </div>
);

// Applying the HOC to the functional component
const DisplayTextWithUpperCase = withUpperCase(DisplayText);

// Usage in the App
const App = () => {
  return (
    <div>
      <DisplayTextWithUpperCase text="Hello, World!" />
    </div>
  );
};

export default App;


--------------------------------------------------------------------------------------------------------------------

## create-react-app

CLI command to create a new React.js application with a predefined and optimized project structure.
It abstracts away the configuration and setup of build tools and development dependencies.

----------------------------------------------------------------------------------------------------------------------

## REACT HOOKS

- React Hooks are functions that let you use state and other React features in functional components.
- allow functional components to manage state, lifecycle methods, context, and more, which were previously only possible in class components. 

- Here are some of the most commonly used React Hooks:
1> useState
2> useEffect
3> useContext
4> useReducer
5> useCallback
6> useMemo
7> 

1> useState :-
- useState allows functional components to manage state.
- It comes with two values: the current state and a function to update that state

const [state, setState] = useState(initialState);



2> useEffect: -
- useEffect is used for handling side effects in functional components (e.g., data fetching, subscriptions, manual DOM manipulations).
- useEffect is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.


useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);



basic eg

1. Basic Usage:
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect: fetch data
    fetchData().then(result => setData(result));

    // Cleanup function (optional)
    return () => {
      // Cleanup code (e.g., cancel subscriptions)
    };
  }, []); // Empty dependency array means the effect runs once on mount

  return <div>{data}</div>;
}

2. Using Dependencies:

useEffect(() => {
    // Side effect: fetch user data based on userId
    fetchUserData(userId).then(result => setUserData(result));

    // Cleanup function (optional)
    return () => {
      // Cleanup code (e.g., cancel subscriptions)
    };
  }, [userId]); // Run the effect whenever userId changes


3. Cleanup and Unmounting:

  useEffect(() => {
    // Side effect: subscribe to some external resource
    const subscription = subscribeToResource(value);

    // Cleanup function (will run when the component unmounts or when value changes)
    return () => {
      // Cleanup code (e.g., unsubscribe from the resource)
      subscription.unsubscribe();
    };
  }, [value]);


Key Points:-->

* Dependencies
If you pass a list of dependencies, the effect will re-run whenever any of the dependencies change.
If the dependency list is empty, the effect runs once after the initial render.

* Cleanup:
The optional cleanup function returned from useEffect is executed when the component unmounts or when the dependencies change.

* Async Effects:
useEffect itself cannot be async, but you can define an async function inside it and invoke it immediately.

useEffect(() => {
  const fetchData = async () => {
    const result = await fetchData();
    setData(result);
  };

  fetchData();
}, []);


--------------------------------------------------------------------------------------------------------------------

## Functional Component in Life Cycle using UseEffect :- 

In functional components, you can use the useEffect hook to replicate the behavior of various lifecycle methods found in class components. 

1> componentDidMount :
- componentDidMount is invoked after the component has been added to the DOM. You can achieve the same effect using useEffect
with an empty dependency array.

import React, { useEffect } from 'react';

function FunctionalComponent() {
  useEffect(() => {
    // Effect code here
    console.log('Component mounted');

    // Cleanup (optional)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>Functional Component Content</div>;
}


2> componentDidUpdate :

- componentDidUpdate is called after the component's updates are flushed to the DOM. You can replicate this using useEffect with a dependency array containing the variables you want to watch for changes.

import React, { useState, useEffect } from 'react';

function FunctionalComponent({ propValue }) {
  const [state, setState] = useState('');

  useEffect(() => {
    // Effect code here
    console.log('Component updated');

    // Cleanup (optional)
    return () => {
      console.log('Component will unmount');
    };
  }, [propValue, state]); // Watch propValue and state for changes

  return (
    <div>
      <p>Prop Value: {propValue}</p>
      <p>State Value: {state}</p>
    </div>
  );
}


3> componentWillUnmount :

- componentWillUnmount is called just before the component is removed from the DOM. In a functional component, you can achieve the same by returning a cleanup function from useEffect.

import React, { useEffect } from 'react';

function FunctionalComponent() {
  useEffect(() => {
    // Effect code here
    console.log('Component mounted');

    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>Functional Component Content</div>;
}


4> componentDidCatch (Error Boundary):

- componentDidCatch is used for error boundaries. In functional components, you can use a combination of useEffect and useState to implement a simple error boundary.

import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effect code here
    const handleError = (error) => {
      setError(error);
    };

    window.addEventListener('error', handleError);

    // Cleanup (optional)
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return children;
}


--------------------------------------------------------------------------------------------------------------------

## Class based Life Cycle with execution sequence

Note: Starting from React 16.3, some lifecycle methods like componentWillMount and componentWillUpdate are deprecated

import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is constructed');
    this.state = { data: 'Initial data' };
  }

  componentWillMount() {
    console.log('componentWillMount: Component will mount soon');
  }

  componentDidMount() {
    console.log('componentDidMount: Component did mount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate: Component will update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component did update');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  render() {
    console.log('Render: Component is rendering');
    return <div>{this.state.data}</div>;
  }
}

export default LifecycleExample;


Now, let's examine the sequence of console logs:

+ This is the initial mount sequence (console logs).
Constructor: Component is constructed
componentWillMount: Component will mount soon
Render: Component is rendering
componentDidMount: Component did mount

+  if there are updates (e.g., state changes or props changes), the update sequence will be triggered (console logs):
componentWillUpdate: Component will update
Render: Component is rendering
componentDidUpdate: Component did update

+ if the component is unmounted (console logs)
componentWillUnmount: Component will unmount

-------------------------------------------------------------------------------------------------------------------

## REDUX

Maintain and update data
uni-directional flow of data(parent -> child comp)
central store that holds the entire state 
Each component can access the stored state
There are three core components in Redux — actions, store, and reducers
Actions is way to send data to store 
Actions takes type and payload
Actions are executes using Dispatch


Reducers are pure functions that take the current state of an application, perform an action, and return a new state

It is highly recommended to keep only one store 
You can access the stored state, update and register or unregister listeners via helper methods. 

Main Component of redux:
Action :- Object that describes the call
Reducer :- State change storage unit
Store :- State and Object tree storage
View :- Display data provided by store


--------------------------------------------------------------------------------------------------------------------

# REACT LIFE CYCLE


<!-- Mounting Phase: -->

This phase occurs when an instance of a component is being created and inserted into the DOM.
Key lifecycle methods in the mounting phase:
constructor(): The constructor is called before a component is mounted. It is used for initializing state and binding event handlers.
render(): The render method is responsible for returning the JSX that represents the component's UI.
componentDidMount(): This method is invoked immediately after a component is mounted to the DOM. It is often used for making API calls, setting up subscriptions, or performing other initialization tasks.


<!-- Updating Phase: -->

This phase occurs when a component is being re-rendered as a result of changes to either its props or state.
Key lifecycle methods in the updating phase:
render(): The render method is called again to reflect the updated state or props.
componentDidUpdate(prevProps, prevState): This method is invoked after the component is re-rendered. It provides access to the previous props and state, allowing for actions based on the comparison of current and previous values.


<!-- Unmounting Phase: -->

This phase occurs when a component is being removed from the DOM.
Key lifecycle method in the unmounting phase:
componentWillUnmount(): This method is invoked just before a component is unmounted and destroyed. It is used for cleanup tasks such as cancelling network requests or clearing up subscriptions.


Note:- useEffect hook in functional components can be used to achieve similar effects as componentDidMount,
componentDidUpdate, and componentWillUnmount

--------------------------------------------------------------------------------------------------------------------

## CONTROLLED && UNCONTROLLED COMPO IN REACT

Controlled and uncontrolled components refer to how React components manage and interact with their
state, particularly in relation to form elements like input fields, checkboxes, and radio buttons.


<!-- CONTROLLED COMPO -->

React state is used to control the values of form elements
state is the single source of truth for the value of the form element,
and any changes to the input value are handled through React state and controlled by React.


>>> For example

import React, { useState } from 'react';

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>
    </div>
  );
};


<!-- UNCONTROLLED COMPONENTS -->

React state does not control the values of form elements
the values are directly managed by the DOM
Uncontrolled components are often used when you want to integrate React with non-React code or libraries


>>> For example
inputRef is used to directly reference the DOM input element. The value is not controlled by React state


import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Value</button>
    </div>
  );
};


--------------------------------------------------------------------------------------------------------------------

## MODEL VIEW CONTROLLER (MVC) :- 

MVC is a way of thinking to structure your web application.

1.View - Client

Displays visualization of the data to the user. Only connected to the controller.

2.Controller - Server

Processes server-side logic and acts as a middleware between View and Model, i.e. controlling the flow of data.

3.Model - Database

Processing data from or to the database. Only connected to the controller.



--------------------------------------------------------------------------------------------------------------------

## PURE COMPONENTS :- 

Pure Component is a class component inherits from React.PureComponent.
The primary difference between a regular component and a pure component lies in how they handle updates and re-rendering.
Pure Component is that it performs a shallow comparison of its current and previous state and props to determine if it should re-render. If there are no changes in the state or props, a pure component will not re-render, leading to potential performance optimizations.


<!-- Shallow Prop and State Comparison: -->
Pure Components automatically implement a "shouldComponentUpdate" method that performs a shallow comparison of 
the current and previous props and state.
If the props and state objects have the same references (i.e., they are deeply equal), the component assumes 
that there are no changes and skips the render process.

<!-- Automatic Optimization: -->
Because of the automatic shallow comparison, pure components can help optimize performance by avoiding unnecessary 
re-renders when there are no actual changes in the data.

<!-- No Manual shouldComponentUpdate Needed: -->
With regular components, developers often need to manually implement the shouldComponentUpdate method to
optimize rendering. Pure Components simplify this process by handling it automatically.


>>>Here's an example of a simple Pure Component:

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return <div>{this.props.message}</div>;
  }
}

--------------------------------------------------------------------------------------------------------------------

## createElement() :- 

-To create React elements
-It is the function that gets invoked when JSX is transpiled by tools like Babel.

>>> Syntax
React.createElement(type, props, ...children);

const element = React.createElement('div', { className: 'container' }, 'Hello, React!');

above element is equaivalent to below jsx

const element = <div className="container">Hello, React!</div>;

--------------------------------------------------------------------------------------------------------------------

## Babel :- 

Its a popular JS compiler used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible 
version of JavaScript that can be run in older browsers or environments.

It is often referred to as a "transpiler" because it transforms code from one version of JavaScript 
to another without actually executing it.


--------------------------------------------------------------------------------------------------------------------

## Tree Shaking :- 

Tree shaking is a technique in JavaScript module bundlers (such as Webpack) for eliminating or "shaking off" 
unused code from the final bundle. The goal of tree shaking is to reduce the size of the JavaScript 
bundle that is sent to the client by removing dead code or code paths that are never executed.
This can significantly improve the performance of web applications by minimizing the amount of code that 
needs to be downloaded and parsed.

Here are the key points about tree shaking:

<!-- Unused Code Elimination: -->
<!-- ES6 Module Syntax: -->
<!-- Dynamic Imports: -->


--------------------------------------------------------------------------------------------------------------------


<!-- REACT FIBER -->

React Fiber is an internal reconciliation algorithm used by React to perform the virtual DOM diffing and update the actual DOM efficiently. It was introduced to address performance bottlenecks and make React more responsive, especially in cases of large and complex component trees.

- Reconciliation: React Fiber is an internal architecture of React that allows concurrent rendering and incremental updates.

- Incremental Rendering: React Fiber allows the rendering work to be split into chunks, making it incremental. This means that React can pause and resume work, allowing for better responsiveness and a more fluid user experience.

- Priority and Scheduling: React Fiber introduces the concept of priority and scheduling. Different types of updates (e.g., user interactions, animations, data fetching) can be assigned different priorities. This allows React to prioritize more important updates, ensuring a smoother user experience.

- Time Slicing: It is feature of React Fiber that allows the rendering work to be spread across multiple frames, preventing the main thread from being blocked for extended periods. This contributes to better performance and a more responsive UI.

- Concurrency Model: React Fiber introduces a concurrency model that enables parallel processing of multiple tasks. This is particularly useful in handling asynchronous operations and improving the efficiency of rendering in a multi-core environment.


--------------------------------------------------------------------------------------------------------------------


## ONE-WAY (Unidirectional)data binding

- promotes simplicity and predictability in how data is passed and managed within a React application

Some reasons why React encourages unidirectional data flow:

1> Predictable Data Flow:
- data changes are more predictable and easier to understand
- flows from parent components to child components, making it clear where data originates and how it is consumed.

2> Debugging and Traceability:
Easier to trace the source of data changes and understand the state of the application
 makes debugging and maintaining the codebase easy

3> Component Isolation:
- Unidirectional data flow supports this component-based architecture

4> Performance Optimization:
- Rerendering component ,reconsillation process work well with unidirectional data flow

5> State Management Libraries:
-Popular state management library also provides unidirection data flow

--------------------------------------------------------------------------------------------------------------------


## React faster than angular ?

React is known for its virtual DOM (Document Object Model) approach, which allows it to efficiently update and render only the parts of the UI that have changed. This can lead to better performance in certain scenarios, especially when dealing with dynamic and frequently updated interfaces.

Angular, on the other hand, uses a two-way data binding system and a change detection mechanism to keep the UI and the application state in sync. While this can lead to simplicity in some cases, it might be less performant in very large and complex applications compared to React's virtual DOM.


------------------------------------------------------------------------------------------------------------------------------


## Props VS State

- props (short for properties) and state are used to manage and control the behavior of components

<!-- Props -->

- Immutable :- A child component receives props from its parent, and it cannot modify them.
- Function Parameters:- Props are passed down to a component as function parameters. 
- Read-Only:-Components receiving props can read and use the data but cannot modify it
- Top-Down Data Flow:- unidirectional (top-down) manner.

<!-- State -->

- Mutable:- unlike props, state is mutable. Components can have internal state that can be modified using setState.
- Async Updates:- Updates to the state may be asynchronous, so you should not rely on the immediate state value after calling setState. Instead, use the callback function in setState if the next state depends on the current state.



------------------------------------------------------------------------------------------------------------------------------


## Server-side rendering (SSR) Vs client-side rendering (CSR)

- Server-side rendering (SSR) and client-side rendering (CSR) are two different approaches to rendering web pages in web
development
- They refer to when and where the rendering of HTML, CSS, and JavaScript takes place in the web application's architecture.


<!-- Server-Side Rendering (SSR): -->

-Rendering on the Server:
In SSR, the server generates the HTML content for a page and sends the fully rendered page to the client.

-Benefits:
Faster initial page load: Since the server sends fully rendered HTML to the client

-Improved SEO: Search engines can crawl and index the content more easily because it is present in the initial HTML sent by the server.

-Challenges:
Increased server load: Server resources are used to render pages for each request, potentially increasing server load.
Slower subsequent page loads: If the application relies heavily on client-side JavaScript for interactivity, subsequent page navigation may be slower.

Libraries/Frameworks:
Server-side rendering can be achieved using frameworks like Next.js for React or Nuxt.js for Vue.js.



<!-- Client-Side Rendering (CSR): -->

- Rendering on the Client:
In CSR, the server sends a minimal HTML page to the client,. The browser then executes the JavaScript, fetches data, and dynamically renders the content on the client side

- Benefits:
Improved interactivity: Client-side rendering allows for dynamic updates and interactive features without requiring full page reloads.
Lighter initial server load: The server's primary role is to serve static files, resulting in reduced server load.

- Challenges:
Slower initial page load: The user needs to wait for JavaScript to download, execute, and fetch data before rendering the content, leading to a potentially slower initial page load.
SEO challenges: Search engines may face difficulties crawling and indexing dynamic content rendered on the client side


------------------------------------------------------------------------------------------------------------------------------

## REF (reference) in Reactjs :- 

- Refs are a way to get a direct reference to a DOM element , allowing you to interact with it imperatively.

import { useRef, useEffect } from 'react';

function MyComponent() {
  const myInputRef = useRef();

  useEffect(() => {
    myInputRef.current.focus();
  }, []);

  return <input ref={myInputRef} />;
}


------------------------------------------------------------------------------------------------------------------------------

## npm (Node Package Manager) VS npx :- 

- npm is the default package manager for Node.js
- npm is used to install, manage, and distribute JavaScript packages

- npx is a package runner tool
- main use cases is to run a package that is not globally installed without having to install it first.



------------------------------------------------------------------------------------------------------------------------------

## Synthetic Events

- In React, synthetic events are a cross-browser wrapper around the native browser events.
- They are instances of the SyntheticEvent interface, provided by React to normalize the differences between native browser events and ensure consistent behavior across different browsers.

The main advantages of using synthetic events in React are:

- Cross-browser Compatibility:
Synthetic events provide a consistent interface for handling events, regardless of the browser

- Event Pooling:
React uses a technique called event pooling to improve performance. When an event is handled, the corresponding SyntheticEvent object is reused and properties are nullified after the event callback has been invoked. This reduces memory usage and improves garbage collection.

- Normalized Properties:
Synthetic events have normalized properties, meaning that properties like target and currentTarget are consistent across different types of events. 

- you won't need to worry about the differences between native events and synthetic events in React. React abstracts away these details



------------------------------------------------------------------------------------------------------------------------------

## Event pooling


Event pooling is a technique used internally by React to improve performance and memory usage when handling events in the DOM. When an event occurs, React creates a synthetic event object (an instance of SyntheticEvent) to represent that event. However, instead of creating a new object for each event, React follows a process known as event pooling.

The key idea behind event pooling is to reuse a small pool of event objects for different events. After an event handler is executed, React resets the properties of the event object, making it ready for reuse in subsequent events. This approach helps reduce memory allocation and deallocation overhead associated with creating and destroying many objects in rapid succession

Here's a simplified overview of how event pooling works:

Event Creation:
When an event occurs (e.g., a button click), React creates a synthetic event object and populates it with information about the event.

Event Handling:
The event object is passed to the corresponding event handler registered in the React application.

Reset and Return to Pool:
After the event handler is executed, React resets the properties of the event object to their initial values.
The reset event object is then returned to the pool for potential reuse in another event.

Reuse in Subsequent Events:
If another event occurs, React can reuse an event object from the pool instead of creating a new one, reducing the number of objects allocated.
This approach helps in scenarios where many events are happening in quick succession, such as user interactions. By reusing event objects, React minimizes the impact on memory and garbage collection, improving overall performance.




------------------------------------------------------------------------------------------------------------------------------


## Event Bubbling vs Event Propagation:

- Event bubbling and event propagation are concepts related to the way events are handled in the Document Object Model
(DOM) of web pages, including React applications. Understanding these concepts is crucial for effective event handling in React.


<!-- Event Bubbling -->

- Event bubbling refers to the natural order in which events are propagated through the DOM hierarchy. 
- When an event occurs on a nested element, the event is first captured at the innermost target element, then it bubbles up through its ancestors.
- For example, consider the following HTML structure:

<div id="parent">
  <button id="child">Click me</button>
</div>

- If a click event occurs on the button, the event first goes through the button's event handlers and then bubbles up to the div element, triggering its event handlers.


<!-- Event Propagation: -->

- Event propagation refers to the mechanism by which events are propagated through the DOM hierarchy during the 
capture and bubbling phases. There are two main phases in event propagation:

1> Capture Phase:
- Event travels down from the root of the DOM tree to the target element.
- This phase allows capturing events on ancestors before they reach the target.

2> Bubbling Phase:
- Event travels up from the target element to the root of the DOM tree.
- This phase allows handling events on ancestors after they have been processed on the target.

--------------------------------------------------------------------------------------------------------------------


## Event Delegation :-

- Delegated event handling using bubbling is a common pattern in large applications. Instead of attaching event handlers to numerous individual elements, you attach a single event handler to a common ancestor and use event bubbling to determine the target.


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Delegation Example</title>
</head>
<body>

  <ul id="parentList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <!-- More dynamically generated or added items -->
  </ul>

  <script>
    // Event delegation in JavaScript
    const parentList = document.getElementById('parentList');

    // Event handler for all list items
    const handleItemClick = (event) => {
      const target = event.target;
      if (target.tagName === 'LI') {
        console.log('Clicked on:', target.textContent);
      }
    };

    // Attach a single event listener to the parent
    parentList.addEventListener('click', handleItemClick);
  </script>

</body>
</html>



--------------------------------------------------------------------------------------------------------------------





