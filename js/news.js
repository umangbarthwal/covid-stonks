var settings = {
  "url": "https://www.who.int/rss-feeds/news-english.xml",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});