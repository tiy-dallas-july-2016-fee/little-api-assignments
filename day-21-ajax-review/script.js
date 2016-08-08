'use strict';
//This is the definition of the "namespace"
if (window.JSApp === undefined) window.JSApp = {};

//This starts the IIFE
(function(jsApp) {

  var $issuesList;

  function requestCompleted(data) {
    console.log('data', data);
    $issuesList.empty();

    for (var i = 0; i < data.items.length; i++) {
      var html = '<li>' +
        '<div class="title">' + data.items[i].title + '</div>' +
        '<div class="state">' + data.items[i].state + '</div>' +
        '<div class="body">' + data.items[i].body + '</div>' +
      '</li>'

      $issuesList.append(html);
    }

  }

  function start() {
    $issuesList = $('.issues');

    $issuesList.append('<li>Hold please, we are loading your data!</li>');

    $.ajax({
      url: 'https://api.github.com/search/issues?q=pizza'
    })
    .done(requestCompleted);

    //code here will run immediately, before the data gets back
  }

  jsApp.start = start;

})(window.JSApp); //The IIFE ends here. This parameter here gets passed in to the function on line 6 above.
