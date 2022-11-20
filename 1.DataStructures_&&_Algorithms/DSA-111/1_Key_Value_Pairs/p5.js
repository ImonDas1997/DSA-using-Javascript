// % - 1, * - 2, # - 3

map = {"%": 1, "*": 2, "#": 3}
str = '#%**%'
let total = 0
for(let el of str){
  total += map[el]
}
console.log(total)

//Frequency Mapping-