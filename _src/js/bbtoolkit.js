$(function() {
  var canPush = false;
  if (!!(window.history && history.pushState)) {
    canPush = true;
  }

  $('body').on('click', '.data-sources li a', function(evt) {
    $('.data-sources li a.active').removeClass('active')
    $(this).addClass('active');
    evt.preventDefault();
    showResources();
    filterShareType($(this).data('org'));
  });

  $('body').on('click', '.alt-share a', function(evt) {
    var selOrg = $('.data-sources li a.active').data('org');
    evt.preventDefault();
    filterShareType(selOrg, $(this).data('alt-index'));
  });

  var showResources = function() {
    var $sharedetails = $('#sharedetails');
    if ($sharedetails.hasClass('hide')) $sharedetails.removeClass('hide');
  }

  var filterShareType = function(org, altInd) {
    var shareInd = (altInd) ? altInd : 0;
    var numShares = orgShareData[org].shares.length;
    if (numShares > 1) {
      var altLinksHTML = 'See also: '
      for (var j=0; j<numShares; j++) {
        if (j !== shareInd) altLinksHTML += '<a href="#" data-alt-index="' + j + '" >' + orgShareData[org].shares[j].name + '</a>'
      }
      $('.alt-share').removeClass('hide').html(altLinksHTML);
    } else {
      $('.alt-share').addClass('hide');
    }
    var leShare = orgShareData[org].shares[shareInd];
    $('#sharedetails .share-name').text(leShare.name);

    var $ccdaListItems = $('#sharedetails .ccda-list-item').not('.keeper');
    $ccdaListItems.addClass('hide');

    var options = [{el:'view-type', json:'view.file_type'}, {el:'download-type', json:'download.file_type'}, {el: 'transmit-structure', json:'transmit.content_structures'}, {el: 'transmit-vocabulary', json:'transmit.vocabulary_code_sets'}] ;
    for (var i = 0; i<options.length; i++) {
      var dt = eval('leShare.options.' + options[i].json);
      if (dt.length) {
        updateSection(options[i].el, dt)
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
