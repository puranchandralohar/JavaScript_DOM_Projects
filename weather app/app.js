let form = document.querySelector(".searchCity");
let cityName = document.querySelector(".cityName");

form.addEventListener("submit", function (name) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=ac235c3667d1746545fc33e3778ec3f3`
  )
    .then((responce) => responce.json())
    .then((data) => {
    let result =`<div class='city'>
                    <h2>${data.name}</h2> 
                    <h1>${Math.floor(data["main"].temp - 273)}°c</h1>
                    </div>
                <div class='city'>
                    <h2>Humidity - ${data["main"].humidity}%</h2> 
                    <h2>Wind - ${data["wind"].speed}m/s</h2>
                </div>
                <div class='city'>
                    <h2>Visibility - ${(data.visibility)/1000}km</h2> 
                    <h1>${data["weather"][0].main}</h1>
                </div>`
      let show = document.querySelector(".result");
      show.innerHTML = result;
      console.log(data);
    })
    .catch((err) => alert("invalid city name"));
});
