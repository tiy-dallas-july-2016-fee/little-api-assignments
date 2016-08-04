

function dataBackFromApi(data) {
  console.log(data.user_search_url);
  $('#query-box').val(data.user_search_url);
}


var promise = $.ajax({
  url: 'https://api.github.com/'
});

promise.done(dataBackFromApi);

console.log('after ajax call made');

function searchComplete(data) {
  console.log('search data', data);
}

function searchNow() {
  var query = $('#query-box').val();
  console.log('query', query);

  var promise = $.ajax({
    url: query
  });

  promise.done(searchComplete);
}

$('#do-user-search').on('click', searchNow);
