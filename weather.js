var search=document.getElementById("search");
search.addEventListener("keyup",(e) => {
    if (e.keyCode===13) {
        var getCityName=e.target.value;
    }
    getweather(getCityName);
});
function getweather(getCityName)
{
    //  console.log(getCityName);
    // const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&APPID=f8e6ae155a375a7a6f61c5434cc90c4f`
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=f8e6ae155a375a7a6f61c5434cc90c4f`
    window.fetch(weatherapi).then(data => {
        data.json().then(weather => {
            var output="";
            console.log(weather);
            console.log(weather.coord.lon);
            console.log(weather.coord.lat);
            //array here
            weatherData=weather.weather;
            for (let x of weatherData) {
                output +=`
                <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                <h1>${weather.name}</h1>
                <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                <p><span>temp:</span>
                <span class="temp">${weather.main.temp}&deg;c</span></p>
                <span class="des float-left">${x.description}</span>
                <span class="des float-right">${x.main}</span>
                </div>
                </div>`;
                document.getElementById("template").innerHTML=output;
                // console.log(x);
                // console.log(x.id);
                // console.log(x.main);
                // console.log(x.description);
                // console.log(x.icon);
            }

        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
 }
