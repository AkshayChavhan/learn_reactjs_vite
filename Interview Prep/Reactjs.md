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

-----------------------------------------------------------------------------------------------------------------------------s

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

---

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

---

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

---

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

---

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


--------------------------------------------------------------------------------------------------------------------

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














