var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1ef1dc20327d02db571850d796d5ec80' 

$.ajax({
    url: requestUrl,
    method: 'GET',
}).then(function (response){
    console.log(response);
});

