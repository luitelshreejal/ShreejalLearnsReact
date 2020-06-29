//The primary difference between functional and class components is the availability of State. 

//What is state?

//State is defined as an instance of a React component class.

//The set of observable properties within the React Component Class controls the behavior of the component provided that it's an object. 

//The State of a component is an object that holds some information that may change over the lifetime of a component. 

    //Consider that to render a simple React Element to the root known, one must write the following in the index.js file

    import React from 'react'; 
    import ReactDOM from 'react-dom'; 
    
    const myElement = <h1>Welcome to GeeksforGeeks !</h1>; 
    
    ReactDOM.render(myElement, document.getElementById("root")); 

    //Consider the code below is used to update the children as the React Elements are immutable

    //In order to build the clock below, we use the render method update the value over time so it's called on x > 1. 

    //The time is updated in each call every 1000ms. 

    import React from 'react'; 
    import ReactDOM from 'react-dom'; 
    
    function showTime() { 
    const myElement = ( 
        <div> 
            <h1>Welcome to GeeksforGeeks!</h1> 
            <h2>{new Date().toLocaleTimeString()}</h2> 
        </div> 
    ); 
    
    ReactDOM.render( 
        myElement,  
        document.getElementById("root") 
    );                     
    } 
    
    setInterval(showTime, 1000);

    //React is considered to be highly efficient in regards to DOM update. 

    //It uses a virtual DOM and efficent differentating algorithm.

        //For instance, within the code above, every second that we call the render method and the virtual DOM gets updated, the differentating algorithm checks for the differences in Browser DOM and Virtual DOM; it updates only what is requied such as in the given example the time is the only thing that will be changed. 

        //React updates ONLY what is necessary. 
    //Note that the render() method more than once is never done but rather a stateful component is called. 

    //In the above example, we can use state within the React Framework to achieve a bettwe result. 

//Difference between Props and React:

//Consider that props is also an object that holds information to control the behavior of a particular component. 

//The difference lies in the fact that:

//1. Props are immutable whereas State is an observable object which holds data that can be changed. 

//2. States are able to be used only in Class Components whereas Props can be used also in functions. 

//3. Props are set by the parent component and State s updated by event handlers. 

// The state of a component should exist throughout the liefetime hence we require an inital state: for that we require a constructor which consists of state. 


class MyClass extends React.Component 
{ 
    constructor(props) 
    { 
        super(props); 
        this.state = { attribute : "value" }; 
    } 
} 

//States should never be updated explicitly (i.e Set Interval)--> React uses an observable object which views which changes are made. 

//In the code below, if we update the state of the component, it wil not re-render itself because React State will not be able to detect the change it has made. 

this.state.attribute = "new-value";


//Hence React has it's own setState() method which takes in a single parameter and expects and object that contains the set of values to be updated. 

this.setState({attribute: "new-value"});

//Consider that React uses asynchronous state updates hence it may update multiple setState() updates ina  single go. 

this.setState({counter: this.state.count + this.props.diff});

//The appropriate way of writing the code above is like this:

this.setState((prevState, props) => ({
    counter: prevState.count + props.diff
}));


//Let's say that we want to turn the below function into a class. 

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

//How do we achieve our objective?

//We define a subclass (name) and then it will be inherited from React.Component. 

class Clock extends React.Component {

}

//Then we add a render method. 

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  //The rest is objvious. 

//The above code allows for render method to be called on each time an update happens.

//If we render <Clock /> into the same DOM, then only a single instance of the Clock class will be used but it will/ can be updated. 

//https://blog.logrocket.com/component-state-local-state-redux-store-and-loaders/

//Local state allows one to instantiate a plain JS object (props or state) for a component and hold info that might affect its rendering. 

//Consider a flower shop with an internal tracking system that measures how many roses a store has at a given time frame. This will work properly if there is only 1 store that has access to the code but if there is another store that opens a second branch, then it won't work {find out why it doesn't work @Shreeja}

import React from 'react';

Class FlowerShop extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      roses: 100
    }
    this.buyRose = this.buyRose.bind(this);
  }
  
  buyRose() {
    this.setState({
      roses: this.state.roses + 1
    })
  }
  
  render() {
    return (
      <div>
        <button
          onClick={ this.buyRose }>
          Buy Rose
        </button>
        { this.state.roses }
      </div>
    )
  }
  
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

// Within applications, it is important to free up resources taken by applications once destroyed. 

//Mounting is when a subclass is rendered to the DOM for the first time. 

//Unmounting is when one clears the timer if the DOM produced by the subclass is removed. 

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


//componentDidMount() and componentWillUnmount() are called lifecycle methods. 

//componentDidMount runs afer the component output has been rendered to the DOM. 

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }


//componetWillUnmount tears down the timer. 

componentWillUnmount() {
clearInterval(this.timerID);
}

//The below code allows for the clock to tick every second. 

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  