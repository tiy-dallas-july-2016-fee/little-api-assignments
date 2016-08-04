console.log('happened!');
var $userList = $('#users');
var $userInput = $('#user-input');


function getData() {
  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + $userInput.val()
  });

  promise.done(function(data) {
    console.log('data', data);

    $userList.empty();
    for (var i = 0; i < data.items.length; i++) {
      console.log(data.items[i].login);
      $userList.append('<li>' + data.items[i].login + '</li>');

    }

  });
}

function keyUpHappened(evt) {
  console.log(evt.keyCode);
  console.log(this); //<-- this is the input

  if (evt.keyCode === 13) {
    getData();
  }

}

$userInput.on('keyup', keyUpHappened);
