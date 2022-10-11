function Student(n, c, u, i, b) {
  this.name = n;
  this.course = c;
  this.unit = u;
  this.image = i;
  this.batch = `Ft-Web${b}`;
}

function storeData(el) {
  el.preventDefault();
  let form = document.getElementById("students_data");
  let name = form.name.value;
  let course = form.course.value;
  let unit = form.unit.value;
  let image = form.image.value;
  let batch = form.batch.value;

  let list = new Student(name, course, unit, image, batch);

  let data = JSON.parse(localStorage.getItem("students")) || [];

  data.push(list);

  localStorage.setItem("students", JSON.stringify(data));

  console.log(list);
}
function calculate() {
  let data = JSON.parse(localStorage.getItem("students")) || [];
  let obj = {};

  for (let i = 0; i < data.length; i++) {
    if (!obj[data[i].batch]) {
      obj[data[i].batch] = 0;
    }
  }
  for (let i = 0; i < data.length; i++) {
    obj[data[i].batch]++;
  }
  console.log(obj);
}
calculate();
