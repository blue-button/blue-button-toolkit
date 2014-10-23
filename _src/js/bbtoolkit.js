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
    filterShareType($(this));
  });

  var showResources = function() {
    var $sharedetails = $('#sharedetails');
    if (!($sharedetails.hasClass('in'))) $sharedetails.addClass('in');
  }

  var filterShareType = function($el) {
    $('#sharedetails .share-name').text($el.data('share-name'))
    var $ccdaListItems = $('#sharedetails .ccda-list-item').not('.keeper');
    $ccdaListItems.addClass('hide');

    var options = ['view-type','download-type','transmit-structure','transmit-vocabulary'];
    for (var i = 0; i<options.length; i++) {
      var leString = $el.data(options[i])
      if (leString != ''){
        updateSection(options[i], leString.split(","));
      }
    }

    function updateSection(dataType,vals) {
      for (var i=0; i<vals.length; i++) {
        var valReady = vals[i].replace(/(\.|\-|\s|\/)/g, '');
        $('#sharedetails .ccda-list-item[data-'+dataType+'="'+valReady+'"]').removeClass('hide');
      }
    }
  }

  FastClick.attach(document.body);

});
