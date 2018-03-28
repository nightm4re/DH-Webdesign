  /* Diverse benötigte Funktionen um die verschiedenen Akteure ein- und auszublenden */
  
  function hideAllBandMembers() {

    $('[data-member-id]').addClass('d-none');
  }

  function showBandMember(memberId) {

    hideAllBandMembers();

    const memberContainer = $(`[data-member-id=${memberId}]`)
    memberContainer.removeClass('d-none');
  }

  function loadBandMemberFromUrl() {

    const hasNoUrlHash = Boolean(window.location.hash) === false;
    if (hasNoUrlHash) {
      return;
    }

    // abschneiden des "#" am Start
    const urlHash = window.location.hash.substring(1);
    const memberId = Number(urlHash);

    const memberIdIsInvalid = Boolean(memberId) === false;
    if (memberIdIsInvalid) {
      return;
    }

    showBandMember(memberId);
  }

  function onDocumentReady() {

    showBandMember(1);
    loadBandMemberFromUrl();
  }

  $(document).ready(() => onDocumentReady());
  $(window).on('hashchange', () => loadBandMemberFromUrl());

  /* Scroll Funktion für die Fördernden Mitglieder */

  $(function () {
    var outer = $('#outer');

    $('#right-button').click(function () {
       var leftPos = outer.scrollLeft();
       outer.animate({ scrollLeft: leftPos + 204 });
    });

    $('#left-button').click(function () {
       var leftPos = outer.scrollLeft();
       outer.animate({ scrollLeft: leftPos - 204 });
     });
 });

 /* Funktion für den Toggler-Button */

 jQuery(function($) {

  $(".toggler--button").click(function() {
    $(".more-history").slideToggle();
    $(this).find(".fa-chevron-circle-up, .fa-chevron-circle-down").toggle();
  });

});

