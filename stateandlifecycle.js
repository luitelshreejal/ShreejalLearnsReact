

//Source: https://www.geeksforgeeks.org/reactjs-state-react/
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

      //    //Source: //https://www.youtube.com/watch?v=IYvD9oBCuJI
    
    //In React, the idea is that when state is modified, the cahnges will automattically affect all child components via props. 

    //So one needs to change the code to one thing - the state - and the UI will update.

    //Props vs state

    //Props: arguments to a function --> when you create a component inside of React and want to render it, you're going to pass it the props you want to give to it. 

    // initial count: 0, 

    // Consider two example: One has a title and subtitle to display, counter that counts something. 

    // Within the counter function, the current count is handled within the state so we would pass in the initial count through the props and configure (i.e. increment decrement) by using state. The reason being is that the value of the counter function changes periodically and we want to store that change (through state)

    // As one will presume, the current count is handled inside of the state hence we pass in the initial count through props and set the state to the props. 
    
    // This gives you an understanding that state is inside of the component whereas props is passed into the component. 

    // In order to display the title and subtitle, we will use props because what we need our function or component to take is the props. Component in this case consists of the title and subtitle so we pass through the props. Application is notified if the rpops alters
        
    // State: it is inside of the component whereas props pass into a component. 

    // When one changes the state inside of an application, it will re-render that particular section whereas props can't be changed from the inside. 

    // State is there for when one needs to re-render and update an application based on what the user has done so it, again, is stored in the state. Props are useful for the displaying of information inside of component. 
    
    // In the example of the counter function, the current count is handled inside of the state. We pass in the initial count through props and we set the state to the props. 
        
    // When one created a class, the things that are passed to the constructor are the things that are your props for a component in React. 

    // If one is handling a piece of information inside of a component and it only, then one should use state whereas if the info will be handled outside then, pass it in via props.   

    // If the information is static and not going to change, (i.e display section), then use props. 


    //State is private and fully controlled by the props. 


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
import { lightskyblue } from 'color-name';

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

//Clock, in the code below, doesn't set up its own timer and update itself every second.

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
  
//componentDidMount() method runs after the component output has been rendered to the DOM hence it's a good place to set up a timer. 

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
  

//the componentDidMount() saves the timerID on this.timerID

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  

//the componentWillUnmount() clears the timerID from the DOM to free up space on the application so that it can run faster. 
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
//the tick() method is ran every second after an instance of it is called from the componentDidMount() -- check componentDidMount() code. 
//this.setState() schedules updates to the component local state: I've defined this below the code check for reference. 
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




//For the above code, this is step by step on what happens:

//1. React calls the constructor of the Clock Component. 

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    //The above code creates an object which looks like the following:

      //{date; 060220}

//2. Render method is now called. This helps React understand what should be displayed on the screen. 

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }

//3. After the clock output is inserted to the DOM, React calls the componentDidMount()

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      //The above code: clock component asks for the browser to set up a timer to call the tick method once every second. 

//4. Now, the tick method is called every second. 

      tick() {
        this.setState({
          date: new Date()
        });
      }


//4.a. Clock component schedules a UI update by calling setState() method due to which React understand that a change has been made. Due to this, the render method is called again and it alters the UI. 

//The value of this.state.date alters. 

//5. If the Clock is removed from the DOM, React calls the componentWillUnmount() so the timer is stopped. 

//How to use setState() properly?

//1.

this.state.comment = 'Hello'; //This WILL NOT re-render a component. 

this.setState({comment: "Hello"}); //This will re-render a component. 

//this.state can ONLY be assigned in the constructor. 

//2.

//Consider that this.props and this.state are update asynchronously hence one shouldn't rely on their values for calculating the next state. 

//The below code will fail to the update the counter as the props is not stored. Refer to the beginning of this document if you don't know what i'm referring to. 

this.setState({
  counter: this.state.counter + this.props.increment,
});

//The above code requires a second form of setState() that accepts a function rather than an object. The object may fail to update the counter becaus this.props and this.state is updated asynchrously. The above code cointains this.state and this.props into one argument. 

//The function below will receive the previous state as the first argument and the props at the time the update is applied as the second argument.

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));


//3. State Updates are merged  

//When you call setState(), React merges the object you provide into the current state. 
    //https://medium.com/@imrobinkim/how-state-updates-are-merged-in-react-e07fc669fec2
    //Again, State allows for React components to modify their output in response to the user inputs. 
            //States shouldn't direclty be modified because the manual mutation can be overwritten by an asynchronoud function. 
            //hence setState() is used.

      class App extends React.Component {
        constructor(){
          super()
          this.state = {
            name: "Bob",
            isLoggedIn: false
          }
        }

        handleLogIn = () => {
          this.setState({isLoggedIn: true})
        } //a logging in action will trigger the setState to update isLoggedIn object. 


        //Consider that shallow mergining only merges things on the first level hence when using setState() on state objects with nested structures, we have to be careful Look below. 
      }

      class App extends React.Component {
        constructor(){
          super()
          this.state = {
            name: "Bob",
            isLoggedIn: false,
            address: {
              street: "123 Fulton Way",
              city: null
            }
          }
        }

        handleLogIn = () => {
          this.setState({
            address: {
              city: "New York City" //Hence one might try to update address.city in object like this. 
              //However below is what it does. 
              //name: "Bob",
              //isLoggedIn: false,
              //address: {
                // city: "New York City"
              // } //WE HAVE NOW LOST address.city. 
            }
          })
        } 

      }

      class App extends React.Component {
        constructor(){
          super()
          this.state = {
            name: "Bob",
            isLoggedIn: false,
            address: {
              street: "123 Fulton Way",
              city: null
            }
          }
        }

        handleLogIn = () => {
          this.setState({
            address: {
              ...this.state.address, //keep something a constant. 
              city: "New York City" 
              //Below is what setState() prodices (correct). 
              //name: "Bob",
              //isLoggedIn: false,
              //address: {
                //  street: "123 Fulton Way",
                //  city: "New York City"
              // } //WE HAVE NOW LOST address.city. 
            }
          })
        } 

      }






//State is called local or encapsulated because it's not accessible to any component other than the othe that owns and sets it. 


//4. The data flows downwards in unidirectional fashion. 


//The below example shows a component passsing it's state down as props to a child component given what was stated above. 

<FormattedDate date={this.state.date} />

//FormattedDate would be rceived in it's props parameter and wouldn't know if it came from the Clock's state, props or was typed by hand. It ONLY KNOWS THAT IT WAS PASSED AS A PROPS. 

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}


//Any state is owned by a specific component and any data or UI derived from that state can only affect components below them in the tree 


//The below example shows that all components are truly isolated. 

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



      


    
  