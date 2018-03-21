$('form').on('submit',function(event){
  event.preventDefault();

  var firstName = ('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();

  if (!firstName) {
    $('#firstName').addclass('warn');
    $('#firstName').next('.warning').show();
  } else {
    $('#firstName').removeClass('warn');
    $('#firstName').next('.warning').hide();
  }

  if (!lastName) {
    $('#lastName').addClass('warn');
    $('#lastName').next('.warning').show();
  } else {
    $('#lastName').removeClass('warn');
    $('#lastName').next('.warning').hide();


  if (!email) {
    $('#email').addClass('warn';
    $('#email').next('.warning').show();
  } else {
    $('#email').removeclass('warn');
    $('#email').next('.warning').hide();
  }

});
