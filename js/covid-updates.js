var settings = {
    "url": "https://api.quarantine.country/api/v1/summary/region?region=india",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
      document.getElementById("total-cases").innerHTML = "Total Cases:</br>" + response.data.summary.total_cases;
      document.getElementById("total-recovered").innerHTML = "Total Recovered:</br>" + response.data.summary.recovered;
      document.getElementById("total-testing").innerHTML = "Total Tested:</br>" + response.data.summary.tested;
      document.getElementById("today-cases").innerHTML = "New Cases:</br>" + response.data.change.total_cases;
    console.log(response);
  });