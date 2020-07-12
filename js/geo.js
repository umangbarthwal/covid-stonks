var x = document.getElementById("geoloc");
var browserPos;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

function showPosition(position) {

  browserPos = {lat: position.coords.latitude, lon: position.coords.longitude};
  x.innerHTML = "&ensp; Your Position -&ensp;Latitude: " + position.coords.latitude + 
  "&ensp;&&&ensp;Longitude: " + position.coords.longitude;
}

getLocation();

var platform = new H.service.Platform({
  'apikey': "rMWNJfAV2zeVVEYh5jOh8Lk4Qka34bkEmpOszDwDoik"
});
var geocoder = platform.getSearchService();
function geocodeAndSearch(){
  var rad = parseInt(document.getElementById("slider_value").innerHTML);
  var query = document.getElementById("service").value;
  let geocodeParam ={
      q: query ,
      in: 'circle:'+ browserPos.lat +',' + browserPos.lon +';r='+rad,
      limit: 50
  }
  function onResult(result){
      console.log(result);
      var decky = document.getElementById("card_deck_a");

      for(let i =0 ; i <result.items.length;i++){
        decky.innerHTML += '<div class="card">'+
         '<div class="card-body text-center">'+
          '<h3 class="card-title">'+result.items[i].title+'</h3><hr>'+
           '<p class="card-text"><h5>'+result.items[i].distance/1000+' Kms</h5>'+result.items[i].address.label+'</p>'+
          '</div>' +
          '<div class="card-footer text-center">'+
            '<small><a target="_blank" href="'+ 'https://www.google.com/maps/@'+ result.items[i].position.lat+','+result.items[i].position.lng+',21z' +'"><i class="fa fa-map-o fa-2x" aria-hidden="true" style="padding-left: inherit;"></i></a></small>'+'<a target="_blank" href="'+'https://www.google.com/search?q='+result.items[i].title.replace(" ","+")+'"<i class="fa fa-google fa-2x" aria-hidden="true" ></i>'+'</a>'
          '</div>'+
      '  </div>'
      
      }
      document.getElementById("result_a").innerHTML = "&ensp;"+result.items.length + " " + query +"(s) found in " + rad/1000 + " kilometers around you";        
      //info bubble
               
  }
  geocoder.discover(geocodeParam,onResult, alert);
                
}