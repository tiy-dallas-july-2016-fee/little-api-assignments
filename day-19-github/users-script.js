ar $userList = $('#users');


var promise = $.ajax({
  url: 'http://localhost:5003/api/dragonlance'
});

promise.done(function(data) {
  console.log('data', data);


});
