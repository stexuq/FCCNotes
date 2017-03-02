 var myurl = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json";

 function search(ele) {
   if (event.keyCode == 13) {
     var searchResult = document.getElementById("search-result");
     searchResult.innerHTML = "";

     var searchText = ele.value;
     //console.log("searchText" + searchText);


     var tmpurl = myurl + "&titles=" + searchText;
     var res = encodeURI(tmpurl);

     //console.log("url=" + res);

     $.ajax({
          url: res,
          type: 'GET',
          dataType: 'jsonp',
          headers: {
            //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
          },
          crossDomain: true,
          success: function (data, textStatus, xhr) {
            //console.log("querydata");
            var allpages = data.query.pages;
            for (var property in allpages) {
              if (allpages.hasOwnProperty(property)) {
                //console.log(property);
                var newPageURL = "https://en.wikipedia.org/w/index.php?curid=" + property;

                var title = allpages[property]["title"];
                
                var a = document.createElement("a");
                a.innerHTML = title;
                a.setAttribute("href", newPageURL);
                searchResult.appendChild(a);
                var br = document.createElement("br");
                searchResult.appendChild(br);

                // var p = document.createElement("p");
                // p.innerHTML = items[i].author;
                // news.appendChild(p);

              }
            }
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
   }
 }
 
//  function refreshTemperature() {
//    $.ajax({
//           url: myurl,
//           type: 'GET',
//           dataType: 'json',
//           headers: {
//             //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
//           },
//           crossDomain: true,
//           success: function (data, textStatus, xhr) {
//             console.log(data.main.temp);
//             document.getElementById("temperature").innerHTML = data.main.temp;
//           },
//           error: function (xhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//           }
//         });
// }

//  function refreshWeather() {
//    $.ajax({
//           url: myurl,
//           type: 'GET',
//           dataType: 'json',
//           headers: {
//             //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
//           },
//           crossDomain: true,
//           success: function (data, textStatus, xhr) {
//             console.log(data.weather[0].description);
//             document.getElementById("weather-description").innerHTML = data.weather[0].description;
//           },
//           error: function (xhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//           }
//         });
// }

//  function refreshAll() {
//    $.ajax({
//           url: myurl,
//           type: 'GET',
//           dataType: 'json',
//           headers: {
//             //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
//           },
//           crossDomain: true,
//           success: function (data, textStatus, xhr) {
//             console.log(data.main.temp);
//             document.getElementById("temperature").innerHTML = data.main.temp;
//              console.log(data.weather[0].description);
//             document.getElementById("weather-description").innerHTML = data.weather[0].description;
//           },
//           error: function (xhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//           }
//         });
// }