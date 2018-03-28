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

function initShowMoreHistoryButton() {

    $('.toggler--button').click(function() {
        $('.more-history').slideToggle();
        $(this).find('.fa-chevron-circle-up, .fa-chevron-circle-down').toggle();
    });
}

function initBandMemberCarouselButtons() {

    const outer = $('#outer');

    $('#right-button').click(function() {
        const leftPos = outer.scrollLeft();
        outer.animate({ scrollLeft: leftPos + 204 });
    });

    $('#left-button').click(function() {
        const leftPos = outer.scrollLeft();
        outer.animate({ scrollLeft: leftPos - 204 });
    });
}

function initNavbarToggleButton() {

    const openMenuIconClass = 'fa-bars';
    const closeMenuIconClass = 'fa-times';

    $('.navbar__toggle-button').click(() => {
        $('.navbar__toggle-button > i')
            .toggleClass(openMenuIconClass)
            .toggleClass(closeMenuIconClass);
    });
}

function onDocumentReady() {

    showBandMember(1);
    loadBandMemberFromUrl();

    initShowMoreHistoryButton();
    initBandMemberCarouselButtons();
    initNavbarToggleButton();
}

$(document).ready(() => onDocumentReady());
$(window).on('hashchange', () => loadBandMemberFromUrl());