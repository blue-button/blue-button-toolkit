$(function() {
  var canPush = false;
  if (!!(window.history && history.pushState)) {
    canPush = true;
  }

  $('body').on('click', '.data-sources li a', function(evt, wasTriggered) {
    $('.data-sources li a.active').removeClass('active')
    $(this).addClass('active');
    evt.preventDefault();
    showResources();
  });

  var showResources = function() {
    var $sharedetails = $('#sharedetails');
    if (!($sharedetails.hasClass('in'))) $sharedetails.addClass('in');
  }

  FastClick.attach(document.body);

});
