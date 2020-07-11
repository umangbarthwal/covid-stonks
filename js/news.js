var settings = {
    "url": "https://newsapi.org/v2/top-headlines?country=in&apiKey=278f6b3a65fb4f2fbd6776c734c03a7d",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
 $.ajax(settings).done(function (newspaper) {
      var news = newspaper.articles
      for(i=0;i<news.length;i++){
      	document.getElementById('news-title').innerHTML = news[i].title;
      }
    console.log(newspaper);
  });