'use strict';
if (this.GithubApp === undefined) this.GithubApp = {};

(function(context) {

  function secondaryApiCallRetrieved(data) {
    console.log('secondary call data', data);
  }

  function apiListDataRetrieved(data) {
    console.log('api list!', data);

    //if I know the key, I can just call the api
    // $.ajax({
    //   url: data['emojis_url']
    // })


    //instead, I'll create a dom element for each key, so I can click and call the api.
    for (var key in data) {
      var value = data[key];
      console.log(key, ' - ', value);

      $('#apis').append('<li data-url="' + value + '" >' + key + '</li>')
    }
  }

  function apiListItemClicked(evt) {
    console.log(evt.target);
    var $li = $(evt.target);
    console.log($li);
    var url = $li.data('url');
    console.log(url);


    $.ajax({
      url: url
    })
    .done(secondaryApiCallRetrieved);

  }

  function start() {

    $.ajax({
      url: 'http://api.github.com'
    })
    .done(apiListDataRetrieved);

    $('#apis').on('click', apiListItemClicked);

  }

  context.start = start;

})(window.GithubApp);
