// OpenWeatherMap API.
const api = "0960f662feb4ebe011dc4c801449094f";

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

document.body.style.backgroundSize = "cover";
document.body.style.webkitBackgroundSize = "cover";
document.body.style.mozBackgroundSize = "cover";
document.body.style.oBackgroundSize = "cover";




// gets current location of the user 
window.addEventListener('load', () => {
    let long;
    let lat;

   
    


    
    // Accesing Geolocation of User
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Storing Longitude and Latitude in variables
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

         
            

            // Using fetch to get data
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    const { temp } = data.main;
                    const place = data.name;
                    const { description, icon } = data.weather[0];
                    const { sunrise, sunset } = data.sys;

                
                    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    const fahrenheit = (temp * 9) / 5 + 32;

                    // Converting Epoch(Unix) time to GMT
                    const sunriseGMT = new Date(sunrise * 1000);
                    const sunsetGMT = new Date(sunset * 1000);

                    loc.textContent = `${place}`;
                    desc.textContent = `${description}`;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
                    sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                    sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;

                    console.log(desc.textContent);

                    if(desc.textContent.includes("clouds")){
                        console.log("Clouds");
                        document.body.style.background = "url('wallpaper.jpg')";
                        document.getElementById("circle").innerHTML = "☁️"

                    }
        
                    else if(desc.textContent.includes("rain") || desc.textContent.includes("drizzle")){
                        console.log("rain");
                        document.body.style.background = "url('rainWallpaper.jpg')"; 
                        document.getElementById("circle").innerHTML = "🌧️";
                        
                    }
                    else if(desc.textContent.includes("clear")){
                        console.log("clear");
                        document.body.style.background = "url('sunny.jpg')";
                        document.getElementById("circle").innerHTML = "☀️";

                    }
        
                    else if(desc.textContent.includes("mist") || desc.textContent.includes("fog") ){
                        console.log("mist");
        
                        document.body.style.background = "url('mist.jpg')";
                        document.getElementById("circle").innerHTML = "🌫️";

                    }
        
                    else if(desc.textContent.includes("snow")){
                        console.log("snow");
                        document.body.style.background = "url('snow.jpg')";
                        document.getElementById("circle").innerHTML = "❄️";
                    }
                  
                    else if(desc.textContent.includes("thunderstorm")){
                        console.log("thunderstorm");
                        document.body.style.background = "url('thunder.jpg')";
                        document.getElementById("circle").innerHTML = "🌩️";



                    }
                    else{
                        document.body.style.background = "url('clound.jpg')";
        
                    }
                  

                });

    

        });
    }
});


// search bar 
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', () => {
  const searchBar = document.getElementById('search-bar');
  const query = searchBar.value;
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api}&units=metric`;
  
  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

           // console.log(data);
            // console.log(data.weather);
            const { temp } = data.main;
            const place = data.name;
            const { description, icon } = data.weather[0];
            const { sunrise, sunset } = data.sys;

            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const fahrenheit = (temp * 9) / 5 + 32;

            // Converting Epoch(Unix) time to GMT
            const sunriseGMT = new Date(sunrise * 1000);
            const sunsetGMT = new Date(sunset * 1000);

            loc.textContent = `${place}`;
            desc.textContent = `${description}`;
            tempC.textContent = `${temp.toFixed(2)} °C`;
            tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
            sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
            sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;

            console.log(desc.textContent);

            if(desc.textContent.includes("clouds")){
                console.log("Clouds");
                document.body.style.background = "url('wallpaper.jpg')";
                document.getElementById("circle").innerHTML = "☁️"

            }

            else if(desc.textContent.includes("rain") || desc.textContent.includes("drizzle")){
                console.log("rain");
                document.body.style.background = "url('rainWallpaper.jpg')"; 
                document.getElementById("circle").innerHTML = "🌧️";
                
            }
            else if(desc.textContent.includes("clear")){
                console.log("clear");
                document.body.style.background = "url('sunny.jpg')";

                document.getElementById("circle").style.backgroundColor = "transparent";
                document.getElementById("circle").innerHTML = "☀️";

            }

            else if(desc.textContent.includes("mist") || desc.textContent.includes("fog") ){
                console.log("mist");

                document.body.style.background = "url('mist.jpg')";
                document.getElementById("circle").innerHTML = "🌫️";

            }

            else if(desc.textContent.includes("snow")){
                console.log("snow");
                document.body.style.background = "url('snow.jpg')";
                document.getElementById("circle").innerHTML = "❄️";
            }
          
            else if(desc.textContent.includes("thunderstorm")){
                console.log("thunderstorm");
                document.body.style.background = "url('thunder.jpg')";
                document.getElementById("circle").innerHTML = "🌩️";

            }
            else{
                document.body.style.background = "url('clound.jpg')";

            }
          
        
        });
    });


  