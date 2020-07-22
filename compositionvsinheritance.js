//Composition vs Inheritance

//try to use composition instead of inheritance to solve problems. 

//can use the special children prop to pass children elements directly to their output. 

function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1> className="Dialog-title">
            WelcomeDialog
            
            </h1>
            <p className="Dialog-message">
                Thank you for visiitng our spacecraft! 
            </p>
        </FancyBorder>
    );
}


//Cosider that in the above code FancyBorder is considered as the parent given that it's called on by WelcomeDialog() function. 

//An example where using {props.children} might be helpful is when let's say we've designed a FancyBorder() function and later we want to also create a WelcomeDialog() then using Containment (props.children) might be a lot simpler! 

//What is a Parent and Child in React? THE BELOW MAKES IT SIMPLE TO UNDERSTAND. 
    //Sending Data from Parent to Child
        class Parent extends React.Component {
            state = { data : "Hello World" } 
            render() {
                    
                    return (
                        <div>
                            <Child1/>            //no data to send             
                            <Child2 dataFromParent = {this.state.data} />
                        </div>
                    );
                }
            }

        class Child2 extends React.Component {
            render() {
                    
                    return (
                        <div>
                            The data from parent is:{this.props.dataFromParent}
                        </div>
                    );
                }
            }


    //Sending Data from  a Child to Parent:

    class Parent extends React.Component {
        state = { message: "" }
        callbackFunction = (childData) => {
              this.setState({message: childData})
        },
        render() {
                return (
                    <div>
                         <Child1 parentCallback = {this.callbackFunction}/>
                         <p> {this.state.message} </p>
                    </div>
                );
        }
    }

    class Child1 extends React.Component{
        sendData = () => {
                 this.props.parentCallback("Hey Popsie, How’s it going?");
            },
        render() { 
        //you can call function sendData whenever you'd like to send data from child component to Parent component.
            }
    };

//Recapping the above lesson, note than if components don't knw their children a head of time use the special children prop to pass children elements. 

//For the above functions WelcomeDialog() and FancyBorder(), JSX tags get passed into the FancyBorder component as a children prop. 

//Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output. 

//Note that the color is passed as a props whereas the other data is passed as props.children so all of the data from WelcomeDialog is passed to the parent Fancyborder().


function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  

//Visit this webpage to make sense of the code: https://codepen.io/gaearon/pen/gwZOJp?editors=0110 note that it has CSS which configures the colors, height and length. 

//Components are known to be special cases of other components: we might say that WelcomedDialog is a special case of Dialog in the below example. 


function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  
  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
  
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  );
  
//Composition also works well for classes: see below

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }
  
  class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

//The code above is relatively simple: no need to explain. 


//Inheritance is when a child class derives peopeties from it's a parent class whereas composition is when instead of inheriting properties from a base class, it describes a class that can reference one or more objects of another class as instances.

