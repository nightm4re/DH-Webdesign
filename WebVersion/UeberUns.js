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
  
    // cut off the "#" at the start
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
  