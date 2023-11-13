var titleElFiveDay1 = $(`.card-title1`);
var titleElFiveDay2 = $(`.card-title2`);
var titleElFiveDay3 = $(`.card-title3`);
var titleElFiveDay4 = $(`.card-title4`);
var titleElFiveDay5 = $(`.card-title5`);

var describeWeatherFiveDay1 = $(`.card-text1`);
var describeWeatherFiveDay2 = $(`.card-text2`);
var describeWeatherFiveDay3 = $(`.card-text3`);
var describeWeatherFiveDay4 = $(`.card-text4`);
var describeWeatherFiveDay5 = $(`.card-text5`);

var titleElToday = $(`.card-title-today`);
var describeWeatherToday = $(`.card-text-today`);

$('#current-day, #five-day-forecast, .navbar, #five-day-title').hide();

$(document).ready(function () {
    // Initial AJAX call when the page loads
    var initialApiUrl =
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=1ef1dc20327d02db571850d796d5ec80';
    $.ajax({
        url: initialApiUrl,
        method: 'GET',
    }).then(function (data) {
        console.log('Initial data:', data);
        console.log(data.clouds);
        console.log(data.main);

    }).catch(function (error) {
        // ERROR CODES
        console.error('Error fetching initial data:', error);
    });

    // Form submission event
    $('#searchForm2, #searchForm, .homepage-search').submit(function (event) {
        event.preventDefault();
       
        $('#current-day, #five-day-forecast, .navbar, #five-day-title').show();
        $(`.homepage-search, #welcome`).hide();

        var cityName = $(this).find('input[type=search]').val();
        var apiKey = '1ef1dc20327d02db571850d796d5ec80';
        var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        var oneCallApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
        }).then(function (data) {
            //    TEST
            console.log('Search data:', data);
            console.log('test', data.city.name);
            console.log(data.list[0].dt_txt);
            console.log(data.list[8].dt_txt);
            console.log(data.list[8].main);
            console.log(data.list[3].weather);
            console.log(data.list[3].dt);
            console.log(oneCallApiUrl);
            console.log(data.list[3].weather.icon);
          

            // create a function that takes the kelvin number and turns it into celsius
            function kelvinToCelsiusRound(kelvin) {
                return Math.round(kelvin - 273.15);
            }


            const temperaturesKelvin = [
                data.list[3].main.temp,
                data.list[11].main.temp,
                data.list[19].main.temp,
                data.list[27].main.temp,
                data.list[35].main.temp,
            ];
            // Convert each temperature to Celsius and ROUND THE NUMBER
            const temperaturesCelsius = temperaturesKelvin.map(kelvinToCelsiusRound);

            titleElFiveDay1.text(data.list[3].dt_txt);
            titleElFiveDay2.text(data.list[11].dt_txt);
            titleElFiveDay3.text(data.list[19].dt_txt);
            titleElFiveDay4.text(data.list[27].dt_txt);
            titleElFiveDay5.text(data.list[35].dt_txt);


            describeWeatherFiveDay1.html(`
<ul>
<li><img src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png"</li> 
  <li>Temp: ${temperaturesCelsius[0]}°C</li>
  <li>Wind Speed: ${data.list[3].wind.speed}m/s</li>
  <li>Wind Direction: ${data.list[3].wind.deg}°</li>
  <li>Wind Gust: ${data.list[3].wind.gust}m/s</li>
  <li>Humidity: ${data.list[3].main.humidity}%</li>
</ul>
`);

            describeWeatherFiveDay2.html(`
<ul>
<li><img src="http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}.png"</li> 
  <li>Temp: ${temperaturesCelsius[1]}°C</li>
  <li>Wind Speed: ${data.list[11].wind.speed}m/s</li>
  <li>Wind Direction: ${data.list[11].wind.deg}°</li>
  <li>Wind Gust: ${data.list[11].wind.gust}m/s</li>
  <li>Humidity: ${data.list[11].main.humidity}%</li>
</ul>
`);

            describeWeatherFiveDay3.html(`
<ul>
<li><img src="http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}.png"</li> 
  <li>Temp: ${temperaturesCelsius[2]}°C</li>
  <li>Wind Speed: ${data.list[19].wind.speed}m/s</li>
  <li>Wind Direction: ${data.list[19].wind.deg}°</li>
  <li>Wind Gust: ${data.list[19].wind.gust}m/s</li>
  <li>Humidity: ${data.list[19].main.humidity}%</li>
</ul>
`);

            describeWeatherFiveDay4.html(`
<ul>
<li><img src="http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}.png"</li> 
  <li>Temp: ${temperaturesCelsius[3]}°C</li>
  <li>Wind Speed: ${data.list[27].wind.speed}m/s</li>
  <li>Wind Direction: ${data.list[27].wind.deg}°</li>
  <li>Wind Gust: ${data.list[27].wind.gust}m/s</li>
  <li>Humidity: ${data.list[27].main.humidity}%</li>
</ul>
`);

            describeWeatherFiveDay5.html(`
<ul>
<li><img src="http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}.png"</li> 
  <li>Temp: ${temperaturesCelsius[4]}°C</li>
  <li>Wind Speed: ${data.list[35].wind.speed}m/s</li>
  <li>Wind Direction: ${data.list[35].wind.deg}°</li>
  <li>Wind Gust: ${data.list[35].wind.gust}m/s</li>
  <li>Humidity: ${data.list[35].main.humidity}%</li>
</ul>
`);
            $.ajax({
                url: oneCallApiUrl,
                method: 'GET',
            }).then(function (oneCallData) {
                // TEST
                console.log('One Call API data:', oneCallData);
                console.log(oneCallData.name);
                console.log(oneCallData);

                // Update the HTML
                titleElToday.html('Today in ' + oneCallData.name);
                describeWeatherToday.html(`
        <ul>
        <li><img src="http://openweathermap.org/img/wn/${oneCallData.weather[0].icon}.png"</li>
            <li>Temp: ${kelvinToCelsiusRound(oneCallData.main.temp)}°C</li>
            <li>Wind Speed: ${oneCallData.wind.speed}m/s</li>
            <li>Wind Direction: ${oneCallData.wind.deg}°</li>
            <li>Wind Gust: ${oneCallData.wind.gust}m/s</li>
            <li>Humidity: ${oneCallData.main.humidity}%</li>
                   </ul>
    `);
            });

        }).catch(function (error) {
            // ERROR CODES
            console.error('Error fetching search data:', error);
        });
    });
});

