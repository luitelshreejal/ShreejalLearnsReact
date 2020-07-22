//Imagine a JSON API which looks like this:

// https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png

//Essentially, the JSON API is returning some data which looks like this below:

[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


//The first step in order to create the picture aforementioned is to break the UI into a component hierarchy. 

//The single responsibility principle suggests that ideally a component shoul do one thing. If it grows then one can decompose it into smaller subcomponents. 

//Separate the UI into components so that each component matches one piece of your data model. 

//https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png

//Notice in the aforementioned pictre that the FilterableProductTable (orange) contains the entirety of the JSON table. 

//The searchbar (blue) receives the user input. 

//ProductTable (green) displays and filters the data collection based on user input. 

//ProductCategoryRow (turquoise) displays a heading for each category. 

//ProductRow (red) displays a row for each product. 

//Notice that the ProductTable which contains the Price and Name isn't its own component. This is only in the example but you can alter it if you desire. 

//The second step is to organize this into a hierarchy like below:;


    //BIG PARENT: FilterableProductTable (ReactDOM.render())

        // CHILD: SearchBar
        //ProductTable
            //ProductCategoryRow
            //ProductRow

//The third step is to build a static version in React. In order to build this static version of the app, one needs to build components that reuse other components and pass data as props. 

//To make the UI interactive, one needs to be able to trigger changes to the underlying data model through state.

//Think of all pieces in data of the application:

//The original list of products
// The search text the user has entered
// The value of the checkbox
// The filtered list of products

//For each piece of data ask three questions:

//1. Is it passed in from a parent via props --> Prob not a state.

//2. Does it remain unchanged over time? --> Prob not a state. 

//3. Can you compute it based on any other state or props in your component? -- Prob not a state. 

//Note the below:

    //1. The original list of products is passed in as a props hence it's not a state, 

    //2. The search text and checkbox seem to be state since they change over time and can't be computed from anything. 

    //3. The filtered list of products isn't state because it can be computed by combning the original list of products with the search text adn value of the checkbox. 


//The fourth step is to identify where the state should live.

//Given that we have identified what the minimal amount of states to use, we now need to identify which component mutates or owns this state. 

//React is all about 1-way data flow down the component hierarchy so it may not be immediately clear which component should own what state.

//For each piece of state in your application:

    //1. Identify every component that renders something based on that state. 

    //2. Find a common owner component (a single component above all the components that need the state in the hierarchy).

    //3. Either the common owner or another component higher up in the hierarchy should own the state. 

    //4. If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component. 

//Put the strategy in usE!!!

//ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and checked state (these are the only ones rendereing something based on that state).

//Common owner component is FilterableProductTable. 

//Conceptually makes sense for the filter text and checked value to live in FilterableProductTable.

//First we add an instance property like below to FilterableProductTable's constructor:

this.state = {filterText: "", inStockOnly: false}


//Now we will pass filterText and inStockOnly to ProductTable and SearchBar as a prop. 

//Finally we will use the props to filter the rows in ProductTable and set the values of the form fields in SearchBar. 

//The fifth step is to add inverse data flow which flows the ohter way. The form components deep in the hiearchy need to update the state in FilterableProductTable.

//We canuse callbacks to SearchBar that will fire whenever the state should be update: we can use onChange event on the inputs to be notified of it. The setState() will updat ehte app. 



