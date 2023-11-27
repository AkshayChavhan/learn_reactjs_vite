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

>>> Start

// Stateless component (functional component)
const Greeting = (props) => {
return <p>Hello, {props.name}!</p>;
};

>>> End

## Stateful Components (Class Components):

defined in ES6 classes that extends "React.Component"
manage and update state using setState method
used mostly for dynamic data and response to user like component
have COMPONENT LIFE CYCLE at different component existance

exxample:-

>>> Start

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

>>> End

Note:-
The useState and other hooks enable functional components to manage state and have more advanced behavior, blurring the distinction between stateless and stateful components to some extent.

---

## What are faetures of REACT :

-Declarative Syntax

for example:-

>>> Start
>>> // Declarative syntax in React ( expecting greetings)
>>> const Greeting = (props) => {
>>> return <p>Hello, {props.name}!</p>;
>>> };
>>> End

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

>>> Start

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

>>> End

In the example above, we use .bind(this) when passing this.handleClick as the event handler to ensure that this inside handleClick refers to the instance of MyClassComponent.


>>> Start

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
                console.log(this)                               //window
                this.hobbies.forEach(function () {
                    console.log(this)                           //ERROR
                })
                return this                                    //object
            }
        }


        function getFullNameReguarFunction(){
            return this;   //window
        }

        const getFullNameArrowFunction = () => {
            return this;   // window
        }

>>> End

-----------------------------------------------------------------------------------------------------------------------



<!-- FUNCTIONAL COMPONENTS -->

- Arrow functions don't have their own this. Instead, they inherit this from the surrounding scope.
  This behavior is particularly useful in React when working with event handlers and callback functions.

>>> Start

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

>>> End

-----------------------------------------------------------------------------------------------------------------------

## ARROW FUNCTIONS :

- Code shorter ,concise and readable than traditional function
- Lexical scoping of this: Dont have their own this context;
  they inherit this from the surrounding scope.
  This behavior is particularly useful in React when working with event handlers and callback functions,
  avoiding the need for explicit binding or using functions like bind in class components.

>>> Start
>>> class MyComponent extends React.Component {
>>> handleClick = () => {

    // 'this' is automatically bound to the instance of MyComponent
    console.log('Button clicked');

};

render() {
return <button onClick={this.handleClick}>Click me</button>;
}
}

>>> End

-Easier use with higher-order functions: such as those provided by React hooks like useEffect or useCallback.

>>> Start
>>> useEffect(() => {
>>> // Effect logic
>>> }, [dependency]);
>>> End

-Implicit return for single line expression

>>> Start
>>> const Greeting = ({ name }) => <p>Hello, {name}!</p>;
>>> End

-----------------------------------------------------------------------------------------------------------------------

