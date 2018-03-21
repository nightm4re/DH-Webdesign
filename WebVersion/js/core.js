$(document).ready(function () {
  $('#example').countdown({
  date: '04/19/2018 23:59:59'
  }, function () {
    alert('Merry Christmas!');
  });

  $('.hamburger').click(function() {
    $(this).toggleClass('collapsed');
    $('#mainmenu').toggleClass('show');
  });

  $('#mainmenu ul li a').click(function() {
    $('.hamburger').addClass('collapsed');
    $('#mainmenu').removeClass('show');
  });
});
