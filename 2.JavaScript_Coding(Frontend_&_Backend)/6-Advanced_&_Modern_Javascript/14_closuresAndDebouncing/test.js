//closure is related to functions
//nested function
 //there has to be a dependency 
 
 function greet() { //this is parent function... there is a dependency between parent and child function bcz n is not present inside of this child function it's present inside parent function only and parent function knows that the child function needs the varriable which might get destroy when it's excute itself which is having line no.-14.. so in such cases it's create closures
   let n = "raj";
   //n is going to garbae
   return function () { //so here i want to return another function... this is basically a child function 
     console.log(n);
   }
 }

 let x = greet()
  x() //so it's returning whole return function 

  
  
  
  
  
  function greet() {
   let n = "raj";
   //n is going to garbae
   return function () {
   return function () {
    console.log(n);
  };
};
 }

 let j = greet();
 let y=j();
 y()


 //what is debouncing??

 //debouncing is basically live searching things like whenever we search something we type a or b and we see that a diye ki ki word hote pare ba ab lekhar sathe sathei seta related r ki word hote pare immediate show korai..