var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 2;

$(document).ready(function() {
    $('.card').on('click', handleCardClick);
});

function initalizeApp() {
}

function handleCardClick(event) {
    $(this).find('.card-back').addClass('hidden');
    if (firstCardClicked === null) {
        firstCardClicked = $(this);
    } else {
        secondCardClicked = $(this);
        $(this).find('.card-back').addClass('hidden');
        var firstImage = $(firstCardClicked).find('.card-front img').attr('src');
        var secondImage = $(secondCardClicked).find('.card-front img').attr('src');
        if (firstImage === secondImage) {
            setTimeout(matchAlert, 20);
            matches++;
            firstCardClicked = null;
            secondCardClicked = null;
            if (matches === max_matches) {
                $('.modal').show();
            }
            return;
        } else {
            setTimeout(hideCards, 1500);
        }
    }
}

$('button').click(showModal());
$('.modalShadow').click()(closeModal());

function showModal() {
    $('.message').show();
    $('.modalShadow').show();
}

function closeModal() {
    $('.message').hide();
    $('.modalShadow').hide();
}

function matchAlert() {
    alert('Nice Match!')
}

function hideCards() {
    firstCardClicked.find('.card-back').removeClass('hidden');
    secondCardClicked.find('.card-back').removeClass('hidden');
    firstCardClicked.find('.card-front').removeClass('hidden');
    secondCardClicked.find('.card-front').removeClass('hidden');
    firstCardClicked = null;
    secondCardClicked = null;
}