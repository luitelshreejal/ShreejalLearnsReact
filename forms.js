//Given that form elements naturally keep some internal state, they work a bit differently in React.js

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

//The element above acceptsa  single name in HTML. 

//The form above has the default behaviror of browsing to a new page when the user submits the form. 


//In most cases, it's convinent to have a JS function that handles the submission of the form and has access to the data that the user entered into the form. 

//The standard way to achieve the above result is through controlled components. 

//Within HTML, form elements such as <input>, <texarea>, <select> maintain their own state and update it based on user input. 

//The mutable state is kept in the state property of the component and only updated with the setState()

//If we want to log the name when it's submitted, we can write the form as a controlled component like below:

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );


  //onSubmit attribute fires when a form is submitted. 

  //When the form is submitted, then call on the handleSubmit() method which input the entire form as a props. 
    //Send an alert saying "A name was submitted" + this.state.value.

    //Within the input, the current value should be this.state.value.
    //The onchange event occurs when the value of an element has been changed. 
    //the onChange attribute helps deliver the changes and creates a new State with the object value: event.target.value
    
    //event.target.value is built-in and whenever we ned to change the state, we can use that. 
    //https://forum.freecodecamp.org/t/how-works-event-target-value/230553
    //The value attribute is set on our form hence the displayed value will always be this.state.value when refreshed. 

    //Consider that handleChange runs on every keystroke to updat the React state so the displayed value wil update as the user types (SUPER FUCKING COOL).

    //The input's value is always driven by the React.state.

// The textarea Tag

//The textarea element defines its text by its children. WITHIN HTML

//The <textarea> uses a value attribute instead in React.js

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  //The difference for the above code is that it uses a textarea to display the code properly. 



  //Given that this.state.value is initalized with the constructor, there is text area with text in it. 


  //The select tag creates a drop-down list which we can select from (only 1). 


  class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  //As seen within the render(), there are four values to choose from: Grapefruit, lime, coconut and mango. 

  //The current value displayed is coconut in the display down menue. 

  //onChange changes the this.state value immediately. 

  //handleSubmit() alerts the screen with the info. 




  //Consider that the <input> tag in HTML allows the user to choose one or more files from their device storage to be uploaded to a server or manipulated by JS via the File Api.


  //Whenever the File API is accessed, it is an uncontrolled component in React. 

//So how do we handle multiple input?


class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.name === 'isGoing' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  <label>
  Is going:
  <input
    name="isGoing"
    type="checkbox"
    checked={this.state.isGoing}
    onChange={this.handleInputChange} />
</label>

//Every time the value is changed for the above then, setState() renders it automatically through the onChange attribute. 

//The onChange attribute calls the handleInputChange funciton

const value = target.name === 'isGoing' ? target.checked : target.value;

// when the target is checked it's considered true (isGoing) and when unchecked

