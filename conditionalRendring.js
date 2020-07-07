//Consider the 2 components below:

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

//Consider the Greeting() function below

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );

//Conditional rendering, as it sounds, displays a particular component when a certain condition is true/ false. 

//Variables can also be used to store particular componnets. 

//Storing variables to store elements can help someone conditionally render a part of the component while the rest of the output doesn't change. 

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
}
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn; //pased as false in the constructor (1st initallization)
    let button; 

    if (isLoggedIn) {  //if false --> Hence passsed in as a props to the function LogOutButton which ultimately displays the Logout (given that the user is logged in)
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else { //if true --> passed in the first initalization. Hence passed in as a props to the function LoginButton (given that the user is logged in)
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div> //in the first intialization true is passed into the Greeting function as a prop.
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn; 
  if (isLoggedIn) { //if the user is logged in, then return Welcom Back
    return <UserGreeting />;
  } //if the user is logged out, then return Please sign up. 
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}> 
      Login
    </button> //props is true in the first initialization. so when it's true, the Login Button is displayed. 
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

//How does the code above work?

//Start off with the render() function. isLoggedIn displays the current state which, in the first initalization, is false as shown in the Constructo function. 

//Then, we declare a variable called button. 

//The if statement serves to distinguish two different conditions: true or false. 

//If the statment is true (the user is logged in), then the button will set the state to true. 

    //Setting the state to true, it will be passed in as a props to the function LoginButton (props.onClick = this.handleLoginClick.onClick) which displays the Login button. 

    //Setting the state to false (the user is not logged in) it will be passed in as a props to the function LogoutButton (props.onClick = this.handleLogoutClick) which will display the Logout button. 

//The return () shows the current status. 

  //If the user is LoggedIn (true), then it will return <UserGreeting /> which shows WelcomeBack. 

  //If the user isn't LoggedIn (false), then it will return <GuestGreeting /> which shows Please sign up. 


//Asked the above question as to why it doesn't work on StackOverflow. 

//Incline If with Logical && Operator. 

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
      <h2>
      You have {unreadMessages.length} to unread messages.
      </h2>
    }
    
    
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re;Re: React'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

    //To embed expressions in JSX, we declare a variabl and then use it inside JSX by wrapping it in curly braces:

    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;

    ReactDOM.render(
      element,
      document.getElementById('root')
    );


//Consider that && express always returns a boolean value. 

      const a = 3;
      const b = -2;

      console.log(a > 0 && b < 0);
      // expected output: false

//True and expression alwayrs evaluates to the expression and false && expression evaluates to false. 

//If the first condition is true, the element right after && will appear in the output. 

//Inline If-Else with Conditional Operator

//One can use the JS Conditional operation condition ? true : false to render elements. 

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

//In the above, currently is marked as true and not is marked as false. 

//Once can also enter larger expressions although the code looks funky. 

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}


//How to prevent components from rendering?

//A component might be rendered by another component and sometimes, one might want a component to hide itself. 

function WarningBanner(props) {
  if (!props.warn) { // if false return null (not anythign)
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div> //if it's true then return "Warning!"
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning //showWarning once Hide is clicked is false hence nothing shows.
    }));
  }

  render() { 
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div> //"Hide" is evaluated as true and "Show" is evaluated as false. 
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);