// Upload JSON
const form = document.querySelector("#upload");
const file = document.querySelector("#file");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!file.value.length) return;

  let reader = new FileReader();

  reader.readAsText(file.files[0]);
  reader.onload = () => {
    let str = reader.result;
    // console.log(str.Cars);
    let json = JSON.parse(str);

    let cars = json.Cars;
    console.log(cars);

    cars.forEach((car) => {
      let name = car.Driver.Name;
      console.log(name);
    });
  };

  // let json = JSON.parse(e.target.result);
});

// function logFile(event) {
//   let str = event.target.result;
//   let json = JSON.parse(str);
//   console.log(`string, ${str}`);
//   console.log(`json, ${json}`);
// }
