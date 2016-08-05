console.log('write code here!');
var $theTable = $('#the-table');


function dataRetrieved(data) {
  console.log('the data', data);
  console.log(data.characters.length);
  for (var i = 0; i < data.characters.length; i++) {
    console.log(data.characters[i]);

    var html =
      '<tr>' +
        '<td>' + data.characters[i].name + '</td>' +
        '<td>' + data.characters[i].race + '</td>' +
        '<td>' + data.characters[i].description + '</td>' +
      '</tr>';

      $theTable.append(html);

  }
}

var promise = $.ajax({
  url: 'http://localhost:5003/api/dragonlance'
});

promise.done(dataRetrieved);
