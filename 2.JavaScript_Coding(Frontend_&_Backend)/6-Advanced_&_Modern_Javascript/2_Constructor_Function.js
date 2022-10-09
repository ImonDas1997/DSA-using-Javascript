console.log(this);//we just get emplty object

// 1.'this' will always point to an object.
//  2. It points to the owner object. either a global object or a custom object that you created.
//   3. It can point to different owner objects through few methods that we are going to learn. ( call, apply, bind)


//constructor

// let obj = {
//   name: 'pablo',

//   sayhello: function () {
//     console.log(this);
//   },
// };

//obj2
//obj3
//call, apply, bind

//constructor    
//-er    means--> he /she does something like tiktoker
//constructing something
//constructing objects

//who is constructing?

//painter abhishek

//constructor function
//--------------------------------------------------------------------
//function which will create objects are called constructor function--->

//Normal Function--->

// function nikeProduct(n, p) {
//   let obj = {};
//   obj.name = n;
//   obj.price = p;

//   return obj;
// }

// let p1 = nikeProduct('football', 3000);
// console.log('p1:', p1);

//Constructor Function --->****

// let data = [];

// function createProduct() {
//   let name = document.getElementById('name').value;
//   let price = document.getElementById('price').value;

//   let p1 = new nikeProduct(name, price);

//   data.push(p1);
//   console.log('data:', data);
// }

// function nikeProduct(n, p) {
//   this.name = n;
//   this.price = p;
// }
// let p2 = new nikeProduct('football', 3000);
// console.log('p2:', p2);


//return value - undefined

//new -> returning the value ( object )****
//this -> intialize ****

//call, apply, bind

//its related to functions.
let bedroom = {
    name: 'bedroom',
    purpose: 'sleep',
  };
  
  let lr = {
    name: 'lr',
    purpose: 'tv',
  };
  
  let kitchen = {
    name: 'kitchen',
    purpose: 'cook',
  
    cookFood(food, drink) {
      console.log(`Serving ${food} & ${drink} in ${this.name}  `);
    },
  };
  
  kitchen.cookFood.call(lr, 'maggie', 'coke');
  
  // let reguser = {
  
  //     role: 'user'
  // }
  
  // let admin = {
  
  //     role: 'admin',
  
  //     onedaySpotifyPass() {
  
  //     }
  // }
  
  // admin.onedaySpotifyPass.call(reguser)
  
  // let name = 'pablo'
  
  // let msg = ` ${name} says hi`
  
  //this -> kitchen
  
  //this -> bedroom
  
  //make 'this' point to a different object
  
  //.call
  
  //
  
  // kitchen.cookFood('maggie');
  
  //allows us to change the value of this
  
  
  //cconstructor function always creates objects
  //this & new keywords.
  //CAB
  //you can rent out a method of one object onto another
  //changing the value of this. 