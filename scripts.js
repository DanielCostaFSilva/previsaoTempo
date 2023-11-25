const key = "8c88e5763ece1d8e87328ed0ecc13439";

function onClickButton() {
  const city = document.querySelector(".input-city").value;

  getCityApi(city);
}

async function getCityApi(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  viewData(data);
}

function viewData(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".weather").innerHTML =
    Math.floor(data.main.temp) + "ºC";
  document.querySelector(".text-forecast").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Umidade: " + data.main.humidity + "%";
  document.querySelector(
    ".img-forecast"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
