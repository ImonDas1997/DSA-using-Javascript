// Description

// In an exam conducted by the University of Masai, there were 6 different subjects, but the total marks obtained by the students were calculated on the best of 5 subjects. Write a program to find out the total marks(best of 5), a subject where the student got the lowest marks, and the subject in which the student got the highest marks.

// Given an object which contains a keymarkswhich holds an array of 6 integers that represent marks obtained in the exam and another keysubjectswhich holds an array of 6 strings that represent subjects implement object methods to:

// Calculate Best of FivebestOfFive: function(){}

// Subject Which was not considered in Best of FivebadSubject: function(){}

// Find the Subject with Highest MarksbestSubject: function(){}

// Input
// The first line of the input contains 6 space-separated integers, denoting marks obtained in each subject
// The second line of the input contains 6 space-separated strings, denoting respective subjects

// Output
// Complete the three functions, andprintthe required value.

// Please note you have to print the value for each method.

//sample input--->
// 92 67 88 25 30 45
// Maths Chemistry History English Biology Physics

// output-->
// 322
// English
// Maths

// hint--->
// The students best five marks were: 92 + 67 + 88 +30 + 45 =322

// The student scored the lowest marks in English. So the output isEnglish

// The student scored the highest marks in Maths. So the output isMaths


  marks=[92,67,88,25,30,45]
  subjects=["Maths","Chemistry","History","English","Biology","Physics"]

  function bestOfFive  () {
    // Part 1 : Write Code Here
    let sum = 0;
    let min = Infinity;
    for (i = 0; i <marks.length; i++) {
      sum += this.marks[i];
      if (this.marks[i] < min) {
        min = this.marks[i];
      }
    }

    console.log(sum - min);

    // Console.log the output : total of best of five
  }

   function badSubject() {
    // Part 2 : Write Code Here

    let sum1 = 0;
    let min = Infinity;
    for (i = 0; i < marks.length; i++) {
      if (marks[i] < min) {
        min = marks[i];
        sum1 = subjects[i];
      }
    }
    console.log(sum1);
    // Console.log the result : subject name with lowest marks
  }

   function bestSubject() {
    // Part 3 : Write Code Here
    let sum1 = "";
    let max = -Infinity;
    for (i = 0; i < marks.length; i++) {
      if (marks[i] > max) {
        max = marks[i];
        sum1 = subjects[i];
      }
    }

    console.log(sum1);
    // Console.log the output : subject name with highest marks
  }

