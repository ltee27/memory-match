var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;

$(document).ready(function() {
    $('.card').on('click', handleCardClick);
});

function initalizeApp() {
}

function handleCardClick(event) {
    $(event.currentTarget).find('.card-back').addClass('hidden');
    if (firstCardClicked === null) {
        firstCardClicked = $(event.currentTarget);
    } else {
        secondCardClicked = $(event.currentTarget);
        var firstImage = $(firstCardClicked).find('.card-front img').attr('src');
        var secondImage = $(secondCardClicked).find('.card-front img').attr('src');

        if (firstImage === secondImage) {
            document.text('It\'s a match!');
            matches++;
        } else {
            setTimeout(() => {
            firstCardClicked.find('.card-back').removeClass('hidden');
            secondCardClicked.find('.card-back').removeClass('hidden');
        }, 1500);
    }
}}
