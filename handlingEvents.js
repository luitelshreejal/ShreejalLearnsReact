//Handling events with React elements are similar to handling events on DOM elements. 
//Differences;
    //React elements are named using camelCase instead of lowercase. 
    //With JSX one passes a function as the event handler rather than a string. 

import { navajowhite } from "color-name";

//Below is what the HTML looks like:

<button onclick="activateLasers()">
  Activate Lasers
</button>

//Below is what React looks like. 

<button onClick={activateLasers}>
  Activate Lasers
</button>

//The init of a function is slighly difference than that of HTML.

//Further, one can't return false to prevent default behavior in React. 

    //What is preventDefault?
    //Calling preventDefault() cancels the event meaning that any default action normally taken by the implementation as a result of the event will not occur. 

    //For instance, let's say that you have a checkbox and when the user clicks the checkbox, you don't want to let the user click it. One can use preventDefault to stop this. 

    //Another example is basically saying; let's say we want to stop users from entering in characters that are lowercase we can use the charCodeAt method to identify what those letters are and preventDefault on the form. 

//By returning false, here is what that looks like:

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

//The below is how it would be done in react. 

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }

// "e" in the above example is known as a synthetic event: 
//consider that we didn't call on onClick directly but instead of onClick, we passed in "e" which is synthetic. 
//https://www.quora.com/What-are-synthetic-events-in-React

//In react one doesn't need to call addEventListener to add listeners to a DOM element to create. 

    //What is an addEventListener?

    //addEventListener takes in upto 3 parameters (3rd is optional)
    //for example once an event is clicked, you might want to do something with the click hence the addEventListner() method will look like the one below:
    // const el = document.getElementById("outside");
    // el.addEventListener("click", function(), optional (ie boolean value));

// Instead of adding listeners, we just provide a listner when the element is initially rendered. 

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

  //The above code produces a button with on and off properties. 

  //Digesting difficult parts about the code:

        //this.handleClick = this.handleClick.bind(this);

    //What does .bind() do?

        //Consider the code below. https://www.javascripttutorial.net/javascript-bind/

        let person = {
            name: 'John Doe',
            getName: function() {
                console.log(this.name);
            }
        };
        
        setTimeout(person.getName, 1000); //This will produce the output as undefined. 

        //The reason that it receives undefined is because person.getName is separate from the person object. 
        //Below is the proper way to call the above code. 
        setTimeout(function () {
            person.getName();
        }, 1000);

        //The above code is wrapped in an anonymous function (function without a name)
        //In the global object, the name is undefined before.

        //The above code retrieves the person from the outer scope and thenc calls the method getName();

        //A simpler convention might be the code below:

        let f = person.getName.bind(person);
        setTimeout(f, 1000);

        //The above code binds person.getName method into the person object.

        //Another application might be to borrow methods from a different object. 

        let runner = {
            name: 'Runner',
            run: function(speed) {
                console.log(this.name + ' runs at ' + speed + ' mph.');
            }
        };

        let flyer = {
            name: 'Flyer',
            fly: function(speed) {
                console.log(this.name + ' flies at ' + speed + ' mph.');
            }
        };
        let run = runner.run.bind(flyer, 20);
        run();

        //It calls the bind() method of the runner.run() method and pass in the flyer object as the first argument and 20 as the second argument. run becomes a function and it's invoked. 

    //Now let's go back to our original problem! //We were looking for the purpose of passing in (this) to the bind right?
    
    







