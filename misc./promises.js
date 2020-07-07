//Consider that JS is single threaded hence two bits of script can't run at the same time: one has to run before the other. 

//Humans tend to be multithreaded: one can type with multiple fingers, drive and hold a convo @ the same time. 

//Blocking functions for humans is sneezing - all current activity must be suspeneded for sneeze. 

//Consider the code below

var img1 = document.querySelector('.img-1');

img1.addEventListener('load', function() { //a resource and it's dependence have finished loading
  // woo yey image loaded executed when image is loaded
});

img1.addEventListener('error', function() {
  // argh everything's broken: executed when it's broken. 
});

//Retrieve the image add a couple of listeners and JS can stop executing until one of those listeners is called. 

//However, it is possible that the resource was loaded or an error was found before our code started listening for them hence we need to use the "complete" property of images. 

var img1 = document.querySelector('.img-1');

function loaded() {
  // woo yey image loaded
}

if (img1.complete) {
  loaded();
}
else {
  img1.addEventListener('load', loaded);
}

img1.addEventListener('error', function() {
  // argh everything's broken
});


//.complete returns whether or not the browser is finished loading an image. 

//The above doesn't catch images which were errored before we got a change to listen for them and the DOM doesn't allow an option for them. 

//Multiple events can happen on the same object and the above is great for that.

//Promises are a bit like event listeners except:

    //1. promise can only succeed or fail once. Can't succeed or fail twice neither can it switch from success to failiure. 

    //2. if a promise has succeded and you later add a success/ failiure callback, the correct callback will be called even though the event took place earlier. 

//Promises are useful for aynchronous success/ failiure because one is less interest in the exact time something became available but moreso, the reaction to the outcome. 

//Promises can be the following:

    //fulfilled: action related to the promise succeeded. 

    //rejected: action relatign to the promise failed. 

    //pending: hasn't fulfilled or rejected yet. 

    //settled: has fulfilled or rejected. 



//To create a promise, the below is done:

var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (/* everything turned out fine */) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

//The promise constructor takes in an argument, callback with two parameters and resolve and reject. 

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });

  //https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/

//3 States of a Promise object:

//Pending

//Resolve

//Rejected. 

//Promise (Pending) --> Two routes (1- .then(), 2- .catch()) --> Pending Promise. 

//.then() assumes that the promise is resolved and .catch() assummes that it's rejected. 

//For instance when requesting data from the server by using a Promise, it will be pending until the data is received. 

//Once the data is received then the Promise is resolve but if we don't get the information, Promise will be rejected. 

//If multiple requests are made, then after the first Promise is resolved (or rejected) a new process will start to which we can attach it directly by a method called chaining. 

//The difference between a callback and promise is that the Promise can store the callback (or it's simply attached).

//We attach a callback to a Promise rather than pass it. 


    //What is chaining?

    //Callbacks have been used for asynchronous operations, however, Promises can be a better option. 

    firstRequest(function(response) {  
        secondRequest(response, function(nextResponse) {    
            thirdRequest(nextResponse, function(finalResponse) {     
                console.log('Final response: ' + finalResponse);    
            }, failureCallback);  
        }, failureCallback);
    }, failureCallback);

    //Promises can attach Callbacks rather than pass them. 

    firstRequest() //chained one after another. 
    .then(function(response) {
        return secondRequest(response);
    }).then(function(nextResponse) {  
        return thirdRequest(nextResponse);
    }).then(function(finalResponse) {  
        console.log('Final response: ' + finalResponse);
    }).catch(failureCallback);

    //To create a Promise object, we use a constructor:

    const myPromise = new Promise();


    //Two parameters are taken: resolve and reject. 

    const myPromise = new Promise((resolve, reject) => {  
        let condition;  
        
        if(condition is met) {    
            resolve('Promise is resolved successfully.');  
        } else {    
            reject('Promise is rejected');  
        }
    });

    //.then() is used for resolved Promises. 

    myPromise.then((message) => {  
        console.log(message);
    }); //Displays the message on the console.

    myPromise.then((message) => { 
        console.log(message);
    }).catch((message) => { 
        console.log(message);
    });// if promise fails then "Promise is rejected" displays. 
 







