$emojiChart = $('#emoji-chart');

function addStuffByUsingLotsOfStringConcatenation(data) {

  for (var key in data) { //for eVARy key in data

    //var valueForKey = data[key];

    var html =
    '<div class="emoji">'
      + '<div class="key-name">' + key + '</div>'
      + '<img src="' + data[key]  + '" />'
    + '</div>';

    $emojiChart.append(html);
  }
}



var promise = $.ajax({
  url: 'https://api.github.com/emojis'
});

promise.done(function(data) {
  console.log(data);

  addStuffByUsingLotsOfStringConcatenation(data);
});
