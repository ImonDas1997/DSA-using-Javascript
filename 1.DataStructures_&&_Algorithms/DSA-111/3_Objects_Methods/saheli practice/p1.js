let obj = {
  name: "Chunnu",
  mobile: 646453213,
  marks: [40, 75, 50, 80, 65],
  total: function () {
    let sum = 0;
    for (let el of this.marks) {
      sum += el;
    }
    return sum;
  },
  percentage: function () {
    let number_of_marks = this.marks.length * 100;
    let total_marks = this.total();
    let percent = (total_marks / number_of_marks) * 100;
    return percent;
  },
};
let ans = obj.percentage();

console.log(ans);

// create an object method to find total marks of chunnu.

// create an object method to 1find the percentage of marks chunnu got
