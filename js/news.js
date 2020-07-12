var settings = {
  "url": "https://newsapi.org/v2/top-headlines?country=in&apiKey=3fc5725dd4794fcca25da1a9d66105fe",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
    
//3fc5725dd4794fcca25da1a9d66105fe
