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
//****diff bw foreach and map */
//since foreach dowsnot return array format value we we have to handle that situation in that way---->
// forEach wont return you anything, 
//it will return undefined 
// map will return array,for exmple  no additional charges 
//forEach there is additional charges 
let foreachDoesnotReturnArr = [30, 20, 4, 2, 1, 6]
let box= [] 
foreachDoesnotReturnArr.forEach(function (el) 
{  
  box.push(el**2) //----> just pushing inside a empty arr and we are handling the situation
  console.log(box)
})


// difference between forEach and map --> map will return array, where forEach will return undefined 


//-----------------------------------------------------------------------------
//if u write condition in the map you willl get boolean value as retun...empl below..
let nums = [1, 2, 4, 21, 4, 23] 
 let outPut = nums.map(function (el)
  { 
    return el%2==0
  })  
   console.log(outPut) // o/p->[ false, true, true, false, true, false ]
   
//--------------------------------------------------------------------------------
//but we can prevent that situation using filter
let n = [1, 2, 4, 21, 4, 23] 
 let output = nums.filter(function (el)
  { 
    return el%2==0
  })  
   console.log(output)//o/p==>[ 2, 4, 4 ]

// filter will return all elements which satis 
// filter will return all true elements 
// filter is also returning array 
// array.filter (function (el,i,array))
///**another exmple of  map and filter  ---------------->
 
let n1 = ["abc","abcd","abcde","abcdef"]
let o = n1.map(function (el)
  { 
    return el.length%2==0
  })  
   console.log(o) // o/p->[ false, true, false, true ]
   //using filter
   let n2 = ["abc","abcd","abcde","abcdef"]
let oo = n2.filter(function (el)
  { 
    return el.length%2==0
  })  
   console.log(oo)/// o/p->[ 'abcd', 'abcdef' ]
   

//--------------------------------------------------------------------------------
// reduce  new concept
// nums.reduce (function (acc,el,i,array)) one new parameter name is accumulator always 1st parameter

let num2 = [3, 26, 32, 321, 1]; 
//without initial value it will take 1st array el as initial value
 let result = num2.reduce (function (acc, el, i, arr) 
 { 
  return acc+el
}) 
console.log(result)
 // first call -> acc=3 acc+el=3+26=29, acc = 29 storing it in acc
 // 2nd call -> acc=29, acc+el 29+32=61 acc=61 
 // 3rd call -> acc=61, acc+el=61+321=382 acc=382 
 //4th call -> acc=382, acc+el=382+1=383|, acc=383 Ţthis final value




//with any initual value

let num3 = [3, 26, 32, 321, 1]; 
 let result1 = num3.reduce (function (acc, el, i, arr) 
{ 
  return acc+el
},10) // here10 is initial value
console.log(result1)
// initial value as second paramter inside reduce 
// reduce (function () {},initail_value)
//-------------------------------------------------------------------
// forEach, map, filter, reduce -> input-array 

                  // input  method   output (return value) 
                  // array  forEach  undefined
                  // array   map   array
                  // array  filter  array 
                  // array  reduce  single value 

                  // forEach().map()  -- not possible
                  // map().forEach() - possible 
                  // map().filter() - possible
                  // reduce().map() - not possible 

//---------------------------------------------------------------------