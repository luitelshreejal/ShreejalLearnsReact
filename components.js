// 
// Resources; https://www.geeksforgeeks.org/reactjs-components/
//
// Components: the UI broken down into multiple individual pieces and we can work on them individually. 
// 
// Components return a piece of JSX code which should be rendered on the screen. 
// 
// 2 types of components: Functional and Class.

//functions may or may not receive data as parameters (discussed in later secions)

function Democomponent()
{
    return <h1>Welcome Message!</h1>;
}

//Consider that the functional components are not aware of the other components in the program whereas the class componets can work together. 

//**Data** can be passed from one component to another. 

//the subclass name is Democomponet and it originates (parent class) from React.Componet. 
class Democomponent extends React.Component
{
    render(){
          return <h1>Welcome Message!</h1>;
    }
}

// 
// The name of a component should walways start with a capital letter.. 

// This is a functional component that returns "Hello World! "
function Welcome() 
{ 
        return <h1>Hello World!</h1> 
} 
   
ReactDOM.render( 
    <Welcome />,  
    document.getElementById("root") 
); 


//Components accept arbitrary inputs which are called props and trturn the React elements which desribe the properties that should display on the screen. 

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

const element = <Welcome name = "Sara" />

ReactDOM.render(
    element,
    document.getElementById('root')
);

// In the above lines of code, ReactDom.render() calls <Welcome name = "Sara"

// React then passes element as an object {name: Sara} to Welcome as props. 

// React DOm updates the DOM to match <h1> Hello, Sara</h1>

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
function Comment(props) {
    return (
        <div className="Comment">
        <div className="UserInfo">
            <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            />
            <div className="UserInfo-name">
            {props.author.name}
            </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
        </div>
    );
}


//In the above lines of code, there are 5 divs which are initalized: Comment, UserInfo, UserInfo-name, Comment-text and Comment-date. 

//Comment hosts all of the divs. 

//UserInfo hosts the the image, UserInfo-name. 

//Comment-Date hosts the div that calls on formatName()

//Comment-text hosts the text input of the div. 

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Avatar(props){
    return (
        <img className="Avatar"
            src="props.user.avatar"
            alt="props.user.name"
        />
    );
}

function UserInfoName(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <UserInfo user={props.user.name} />
        </div>
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">{props.user.name}</div>
    )
}

function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
  
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
  

//Consider that Props are read-only hence it must never modify it's own props. 

//Props are knowin as pure because theyir inputs are immutable.

function sum(a, b) {
    return a + b;
}

//The function above is an example. 

function withdraw(account, amount) {
    account.total -= amount;
}

//The function above is impure because it can be changed. 

// States in React
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
