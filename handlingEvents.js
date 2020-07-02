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

        //In React, you will notice that the bind function is similar. 

    //Now let's go back to our original problem! //We were looking for the purpose of passing in (this) to the bind right?

            //Consider the example below where this.handleClick is removed from the constructor function. 
            //https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
            class Foo extends React.Component{
              constructor( props ){
                super( props );
              }
                
              handleClick(event){
                console.log(this); // 'this' is undefined
              }
                
              render(){
                return (
                  <button type="button" onClick={this.handleClick}>
                    Click Me
                  </button>
                );
              }
            }
            
            ReactDOM.render(
              <Foo />,
              document.getElementById("app")
            );

            //If the above code is ran, then "undefined" will be printed to the console value: it's because of the way THIS binding works. 
            
            //Default Binding. 

            function display(){
              console.log(this); // 'this' will point to the global object
             }
             
             display(); 

             //The above is considered as a plain function call hence the this value is undefined in strict mode whereas this can point to the global object in non-strict mode. 

             var obj = {
              name: 'Saurabh',
              display: function(){
                console.log(this.name); // 'this' points to obj
               }
             };
             
             obj.display(); // Saurabh 

             var name = "uh oh! global";
              var outerDisplay = obj.display;
              outerDisplay(); // uh oh! global

            //In the above example (default binding), a context object is not specified henc eit points to the global object or undefined if in strict mode.



            //The goal of a bind function is for the context object to point to the global object. The context object in our previous example is 'this' keyword. 

            var obj = {
              name: "Hello",
              display: function() {
                console.log(this.name);
              }
            };

            obj.display() //Prints "Hello" as the value is set to the global object. 

            var name = "uh oh";
            var outerDisplay = obj.display;

            outerDisplay(); // Prints "uh oh"
            //However, instead of pointing to the local object, we want to point to the global object ("Hello")

            setTimeout(obj.display, 1000) //Prints "uh oh" ever 1 second. 

            var name = "uh oh";

            obj.display = obj.display.bind(obj);
            var outerDisplay = obj.display;
            outerDisplay();

            //results in the printing of "hello" as now the bind allows for it to set to the global object -- not the prototypes. 

            //Similarly,,

            class Foo {
              constructor(name){
                this.name = name;

              }
              display() {
                console.log("this.name")
              }
            }

            var foo = new Foo("hello");

            foo.display()// //Prints "Hello"

            var display = foo.display() 

            display() //Type error: 'this' keyword is undefined. 

            class Foo {
              constructor(name){
              this.display = this.display.bind(this);
              } 
              display() {
                console.log(this.name);
              }
            }

            var foo = new Foo("Hello");
            foo.display();
            var display = foo.display;
            display(); //Prints Hello

            //In the above example the global object is pointed at. 









    
    







