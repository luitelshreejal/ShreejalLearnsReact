function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      );
    }
  }
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  
  //Consider that the fieldset element is used to group related elements in a particular form where it draws a box around a certain element. 

  //The legend element names the fieldset element. 

//Run the code above on Codepen.io

// https://codepen.io/gaearon/pen/ZXeOBm?editors=0010

//Notice that the return cases of the function BoilingVerdict immediately reflects on the page. 

//How does the code above work?

//The original state of the temperature is set to nothing in the beginning. 

//Within input the value is reflected from the temperature state and handleChange sets the temperature value to whatever is the new value (e.target.value)

//Then, BoilingVerdict function is called on where it turns the temperature into a floating point number. 

//The function BoilingVerdict reflects the changes made. 

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Calculator extends React.Component {
    render() {
      return (
        <div>
          <TemperatureInput scale="c" />
          <TemperatureInput scale="f" />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  

  //Consider that in the above code, there are 2 inputs but when I enter the temperature in one of them, the otherone doesn't update. 

  //We can't display BoilingVerdict from Calculator. 

  //How does the code above work?

    //First the class Calculator passes scale to class TemperatureInput. Notice that scaleNames is an object with 2 values: c and f. 

    //The legend prints scaleNames[c] which is rendered as Celsius and scaleNames[f] which is rendered as Fairhenheit. 
    //The temperature is set to an empty string hence that displayed. The temperature is changed now afte entering given the handleChange()

//Now let's write two functions that convert fahrenheit to celsius and back. 

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

//The above functions convert numbers. Now, lets write another function that takes a string temperature and a converter function as arguments and returns a string. This will be used to calculate the value of one input based on the other input. 

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

//In the above function the parameter convert is a function that calls either toCelsius or toFahrenheit. 

const output = convert(input);

//This function renders the output to be the toCelsuis or toFahrenheit of the input variable.

//rounded rounds the number appropriately and it is renturned as a string. 

//Looking back to our goal, we want our 2 inputs to be in sync with each other. When the Celsius input is updatted, the Fahrenheit input should reflect the converted temperature immediately. 

//Right now, both class TemperatureInputs (Fahereinheit and Celsius) keep their values in the local state. 

//In order to share state, we need to move it up to the closest common ancestors of the components that need it hence it's called lifting state up. 

//We will be moving TemperatueInput's local state to Calculator instead. 
    

//If the Calculator owns the shared state it becomes "source of truth" for the current temperaute in both inputs: it can allow for both of them to have values which are consistent with each other. 

    //1. First lets replace this.state.tempetaure with this.props.temperature for it will be passed as a props from class Calculator. 

    //Consider that props are read-only for they can't be altered by the function itself. 

      //Before to alter the TemperatureInput, we could just call this.setState(), however, now the temperature is coming from the parent as the props and the Temperatureinput has no control over it. 

      //In order to solve this problem, we can make the component controlled.
      
      
        //For a component to be controlled, it essentially means that the this.state is the source of truth. Look at the example below:
      
        /*
        class NameForm extends React.Component {
          constructor(props) {
            super(props); */
            this.state = {value: ''};
        /*
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        */
          handleChange(event) {
            this.setState({value: event.target.value});
          }
        /*
          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
          }
        
          render() {
            return (
              <form onSubmit={this.handleSubmit}>
                <label>
          */        Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
            /*    </label>
                <input type="submit" value="Submit" />
              </form>
            );
          }
        } */

        //Notice in the highlighted parts of the code above, that the state of the value is updated on each keystroke directly without a middleman involved: we call it the source of truth. 
        /* 
        class NameForm extends React.Component {
          constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
          */
            this.input = React.createRef();
          /*}
        
          handleSubmit(event) {
            alert('A name was submitted: ' + this.input.current.value);
            event.preventDefault();
          }
        
          render() {
            return (
              <form onSubmit={this.handleSubmit}>
                <label>
         */           Name:
        */          <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            );
        */  }
        }
        
        //Notice above in the highlighted partsof the code that we don't directly change the state but the input can seeminly be represented as the middleman hence it's uncontroled.

      //Going back to the original question. 

      //Remeber that both TemperatureInput components keep their values in the local state originally. 

      //Now we want to update the 2 inputs so they're in sync with each other. When the celsius value is updated, the Fahrenheit input should be reflected and vice versa. 

      const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
      
      function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
      function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }
      
      function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
      
      function BoilingVerdict(props) {
        if (props.celsius >= 100) {
          return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
      }
      
      class TemperatureInput extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(e) {
          this.props.onTemperatureChange(e.target.value);
        }
      
        render() {
          const temperature = this.props.temperature;
          const scale = this.props.scale;
          return (
            <fieldset>
              <legend>Enter temperature in {scaleNames[scale]}:</legend>
              <input value={temperature}
                     onChange={this.handleChange} />
            </fieldset>
          );
        }
      }
      
      class Calculator extends React.Component {
        constructor(props) {
          super(props);
          this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
          this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
          this.state = {temperature: '', scale: 'c'};
        }
      
        handleCelsiusChange(temperature) {
          this.setState({scale: 'c', temperature});
        }
      
        handleFahrenheitChange(temperature) {
          this.setState({scale: 'f', temperature});
        }
      
        render() {
          const scale = this.state.scale;
          const temperature = this.state.temperature;
          const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
          const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      
          return (
            <div>
              <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
              <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
              <BoilingVerdict
                celsius={parseFloat(celsius)} />
            </div>
          );
        }
      }
      
      ReactDOM.render(
        <Calculator />,
        document.getElementById('root')
      );

      
      //For the above code, here is how it works:

        //1. The render function is called:
          //the scale variable retrieves the 'c'. 
          //the variable temperature retreives the current temperature that will be entered by the user so it will change over time. 
          //the variable celsisus is a conditional rternary operator that asks the below questions:
            //for the scale which is equal to "f", tryConvert() is marked as true and temperatue is marked as fals.e 
            //The reason that one is marked as true or false is to see if fahrenheit box is being inputted in or not. 
            
            const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
            //How does the conditional ternary work?

              if (scale === "c"){
                fahrenheit = tryConvert(temperature, toFahrenheit);
              } //turns the inputted value into fahrenheit value through a function. 


            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
          
            handleCelsiusChange(temperature) {
              this.setState({scale: 'c', temperature});
            } //Changes the Celsius value respectively. 
            



      //Documentation's description of the code

      //1. React calls the function sepcified as onChange on the dom <input> --> handleChange() method is called in the TemperatureInput component. 

      //2. The handleChange method now calls the this.props.onTemperatueChange() with the new desired value. 

      //3. During the first iteration, it is made clear that the Calculator's onTemperatueChange is equivalent to the Calculator's handleCelsiushange method (for the Celsiuis) and the onTemperature Change is the Calculator's handlefahrenheitChange method respectively. Both of these methods are called depending on which one is altered. 

      //4. Within the 2 aforementioned methods, the Calculator asks React to re-render itself by calling the this.setState() with the new input value and the current scale of the iput we just edited. This alters the state of the Fahrenheit in the class Caluculator. 

      //5. In the Calculator component's redner method, it displays what the ui should look like. The temperaure conversion happens. 

      //6. After React calls the render methods of the individual TemperatureInput component with their props speciifed by the calculaotr, it learns what the UI should look like.

      //5. BoilingVerdict is called as the Celsiuis is passed as the props and the React DOM is now update.d 




//Overall Lessons from this specific example:

          //1. There is only one source of truth for any data which changes in the React application. The state is first added to the component that needs it for rendering. Instead of having two separate states which sync the data, one should rely on the top-down  data flow. 
          
          //2. Notice that instead of storing both celsiusValue and fahrenheitValue, we only store the last edited temperature and its scale. MEANING THAT IN THE CODE ABOVE NOTICE THAT WE DONT HAVE A HANDLECHANGE FUNCTION FOR BOTH CELSIUIS AND FARHENHEIT, WE ONLY HAVE IT FOR ONE: FAHREHEIT. The other one can easily be calculated from them in the render() method. 