 var myurl = "http://api.openweathermap.org/data/2.5/weather?id=5375480&appid=cc269b586606413705aa56340035cf1c&units=metric";
 
 function refreshTemperature() {
   $.ajax({
          url: myurl,
          type: 'GET',
          dataType: 'json',
          headers: {
            //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
          },
          crossDomain: true,
          success: function (data, textStatus, xhr) {
            console.log(data.main.temp);
            document.getElementById("temperature").innerHTML = data.main.temp;
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
}

 function refreshWeather() {
   $.ajax({
          url: myurl,
          type: 'GET',
          dataType: 'json',
          headers: {
            //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
          },
          crossDomain: true,
          success: function (data, textStatus, xhr) {
            console.log(data.weather[0].description);
            document.getElementById("weather-description").innerHTML = data.weather[0].description;
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
}

 function refreshAll() {
   $.ajax({
          url: myurl,
          type: 'GET',
          dataType: 'json',
          headers: {
            //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
          },
          crossDomain: true,
          success: function (data, textStatus, xhr) {
            console.log(data.main.temp);
            document.getElementById("temperature").innerHTML = data.main.temp;
             console.log(data.weather[0].description);
            document.getElementById("weather-description").innerHTML = data.weather[0].description;
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
}