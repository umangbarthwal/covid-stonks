var settings = {
    "url": "https://api.quarantine.country/api/v1/summary/region?region=india",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
      document.getElementById("total-cases").innerHTML = response.data.summary.total_cases;
      document.getElementById("total-recovered").innerHTML = response.data.summary.recovered;
      document.getElementById("total-testing").innerHTML = response.data.summary.tested;
      document.getElementById("today-cases").innerHTML = response.data.change.total_cases;
    console.log(response);
    
  
    $('#total-cases,#total-recovered,#total-testing,#today-cases').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
  });
  
