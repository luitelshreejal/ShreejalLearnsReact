const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//returns [2, 4, 5, 8, 10] to the soncole.. 

//The above code leverages the map() function to take an array of numbers and double their values. 
    //map is supposed to create a new array thats altered. 


//Within react, transofrming arrays into a list of elements is nearly identical (consider that the element produces what one views on the DOM).

//Rendering Multiple Components:

//To build a collection of elements and include them in the JSX, one has to use curly braces. 

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);

RectDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById("root")
)

//<ul> tag displays bullet points whereas the <li> tag displays numbers. 


//The above code displays a bulletted list of numbers between 1 and 5. 

//Lists usually should be rendered inside of a component. 

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );

//The above code is designed to produce the same result as the previous (above - 2) code. 

//Notice that the list is rendered inside of a component (meaning that the Numberlist tag retriees the numbers array which is then mapped to listItems with the proper parameters set. )

//However, when the code above is rendered notice that a speical warning is delivered which states

        //A 'key' is a special string attribute one needs to include when creating the list of elements. 

//Hence in the below code we will assign a key to our list items inside numbers.map() and fix the missing key issue. 

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number * 2}
      </li> //The importance of the key is discussed below. 
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
    
  );


//Keys,,

//Keys help React identify which items have channged, are added or removed. 

//.toString() converts the number into a string (i.e.) 1 to "1" or 2 to "2". 

//Make your keys unique! 

//Keys give the element inside of the array providiing stable identity. 

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);


//The best way to picka  key is to use a string which unqiuely idenfiies a list item among its siblings. The id's can be used as keys. 


//If we don't have a stable id, one can use the item index as a key (last resort --> try to have a key that relates to the value in all cases).

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

//Given that the order of the items may cahnge, using indexes for keys can negatively impact performance anc cause issues with the componetn state. 

//Below is an example of an incorrect key usage. 

function ListItem(props) {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:
      <li key={value.toString()}>
        {value}
      </li>
    );
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Wrong! The key should have been specified here:
      <ListItem value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
// ----------------------------------------------
  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );

//How is the above code rendered?

//ReactDOM.render() calls on <NumberList passes [1,2,3,4,5] as props.
    //numbers stores the numbers as an array. 

    //Within listItes, it takes in the individual indices as a parameter and returns
    //the key and value for each of the index. 

    //It sends the key and value to ListItem function which displays props.value (as the parent component).

    //listItems stores the key and value (once again) which is returned by the return();

//The keys should be unique among siblings. 

function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );

