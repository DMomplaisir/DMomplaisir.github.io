//master doc
function formFilled() {
  var name = document.getElementById('contact_name');
  var email = document.getElementById('');
  var message = document.getElementById('');

  if (name == '' || email == '' || message == ''){
    window.alert('Something is missing');
    return;

  }

}
