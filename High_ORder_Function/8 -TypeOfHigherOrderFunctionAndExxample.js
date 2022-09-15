//type of higher order order function....
// forEach
// Map
// filter
// reduce

// forEach, map, filter, reduce ->  all for arrays // cant be for strings

//@@@forEach --->1st
//array.forEach(function (el, index, array))***********main structire
let names = ["Imon", "raghuveer", "John", "Prabal"]//-->itsd for element
names.forEach(function(el, index, array)//--->actual calling dorEach function 
{
  console.log(el) //printing all array values 
  //output is ->
  //Imon
  // raghuveer
  // John
  // Prabal
})

let names1 = ["Imon", "raghuveer", "John", "Prabal"]
names.forEach(function(el, index, array)//-->its for index
{
  console.log(index) //printing all array index 
  //output is ->
  // 0
  // 1
  // 2
  // 3
})
let names2 = ["Imon", "raghuveer", "John", "Prabal"]
names.forEach(function(el, index, array) //-->its for array
{
  console.log(array) //printing all array  
  //output is ->
  // [ 'Imon', 'raghuveer', 'John', 'Prabal' ]
  // [ 'Imon', 'raghuveer', 'John', 'Prabal' ]
  // [ 'Imon', 'raghuveer', 'John', 'Prabal' ]
  // [ 'Imon', 'raghuveer', 'John', 'Prabal' ]
})
//@@@foreach wonmt return ypu anything if you do that it will be undefined.
 let nums2 = [3, 2, 4, 2, 1, 6]
let res = nums2.forEach(function (el) 
     { 
       let x = (el ** 2) 
         return x ;
     }) 
  console.log(res) //-->it will give you undefined result

//-----------------------------------------------------------------------

//@@@ Map will always return array
 let nums3 = [3, 2, 4, 2, 1, 6]
let res2 = nums3.map(function (el) 
     { 
       let x = (el ** 2) 
         return x ;
     }) 
  console.log(res2) //output is -->[ 9, 4, 16, 4, 1, 36 ]

//-----------------------------------------------------------------------