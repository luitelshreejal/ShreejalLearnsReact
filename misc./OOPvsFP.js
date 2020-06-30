      //What is a local state in terms of cooking a meal @ home?
      //https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/


      //Consider that the state describes the status of the entire program or an individual object. 
      

      //The below example shows OOP (Object Oriented Programming)
      // In the below example, as it's shown, if the global state is configured then there will be changes on the local level. Read the documentation for the initial and after value. 

      //Initial Value:

      // GlobalLevel: stoveTemp: 500;

      // LocalLeve: boilstatus = "";

      // //After Value:

      // GlobalLevel: stoveTemp = 500;

      // LocalLevl: boilstatus = "boiling";

      let stoveTemp = 500;

      function Pot(){
        this.boilstatus = "";
        this.startBoiling = function() {
          if (stoveTemp > 400) {
            this.boilstatus = "boiling";
          }
        }
      }

      let pastaPot = new Pot();
      pastaPot.startBoiling() //==> stoveTemp > 400;
      console.log(pastaPot) //==> returns boilstatus: "boiling"


      //When the pastaPot is created via the Pot prototype, it has an empty boilstatus but then a state change occurs. 

      //After running pastaPot.startBoiling() the boilStatus jumps to boiling given that the stoveTemp will be configured to above 400.
      
      function Pasta (){  
        this.cookedStatus = false;  
        this.addToPot = function (boilStatus){    
          if(boilStatus == "boiling")      this.cookedStatus = true;  }
      }
      let myMeal = new Pasta();
      myMeal.addToPot(pastaPot.boilStatus);
      console.log(myMeal.cookedStatus);// true


      //Having created an instance of Pasta which is identified as myMeal, the state from the pastaPot object determines if cookedStatus. 


      //Iniitally,,,
      //In the above code, at the global level stands, stoveTemp = 500;
      //In the above code, at the local level stands, boilstatus to be boiling and cookedStatus is false. 

      //After creating the instantiaton and running pastaPot.boilStatus through addToPot, it reconfigures. 

      //Global level: stoveTemp = 500;
      //In the above code, at the local level stands, boilstatus to be boiling and cookedStatus is **now** true. 


      //The below example shows functional Programming. 

      const stoveTemp = 500;

      const cookPasta = (temp) => {
          if (temp > 400){
              return "cooked";
          }
      }
      console.log(cookPasta(stoveTemp)); //'cooked'

      const serveMeal = (pasta) => {
          if (pasta == "cooked"){
              return 'Dinner is ready.';
          }
      }

      console.log(serveMeal(cookPasta(stoveTemp)));

      //The functions communicate amongst one another in Functional Programming whereas the node of the prootype communitcate to parents. 

      //FP discourages state changes whereas OOP can in certain instance embrace it. 





      //**General Rule of Thump */

      //If the global state is configured then that means cahnges on the local level occur. 

      //The state cahnges that occur configure the local level. 

      