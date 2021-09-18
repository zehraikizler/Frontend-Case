const url = "http://ip-api.com/json/";

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const IP = document.querySelector("#text").value;
  fetch(url + IP).then((res) => {
    res.json().then((result) => {
      document.querySelector("#ip").innerHTML = "IP Adresi : " + IP;
      document.querySelector("#latitude").innerHTML = "Latitude : " + result.lat;
      document.querySelector("#longitude").innerHTML = "Longitude : " + result.lon;
      document.querySelector("#country").innerHTML = "Country : " + result.country;
    });
  });
});