$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var max_matches = 9;
var attempts = 0;
var games_played = 0;
var accuracy = 0;

function initializeApp() {
    $('.card').on('click', handleCardClick);
    $('#resetButton').on('click', resetGame);
}

function handleCardClick(event) {
    $(this).find('.card-back').addClass('hidden');

    if (firstCardClicked === null) {
        firstCardClicked = $(this);
    } else {
        secondCardClicked = $(this);
        $(this).find('.card-back').addClass('hidden');
        attempts++;

        var firstImage = $(firstCardClicked).find('.card-front img').attr('src');
        var secondImage = $(secondCardClicked).find('.card-front img').attr('src');
        if (firstImage === secondImage) {
            matches++;
            firstCardClicked = null;
            secondCardClicked = null;
            displayStats();
            if (matches === max_matches) {
                $('.modal').show();
                games_played++;
                displayStats();
                calculateAccuracy();
            }
        } else {
            displayStats();
            calculateAccuracy();
            setTimeout(hideCards, 1500);
        }
    }
}

function displayStats() {
    $('.games-value').text(this.games_played);
    $('.attempts-value').text(this.attempts);
    $('.accuracy-value').text(this.Math.round(accuracy*100) + '%');
}

function calculateAccuracy() {
    accuracy = matches/attempts;
}

function resetGame() {
    resetCards();
    closeModal();
    resetStats();
}

function resetStats() {
    displayStats();
    matches = 0;
    attempts = 0;
    accuracy = 0;
}

function hideCards() {
    firstCardClicked.find('.card-back').removeClass('hidden');
    secondCardClicked.find('.card-back').removeClass('hidden');
    firstCardClicked.find('.card-front').removeClass('hidden');
    secondCardClicked.find('.card-front').removeClass('hidden');
    firstCardClicked = null;
    secondCardClicked = null;
}

function resetCards() {
    $('.card-back').removeClass('hidden');
}

$('.button').click(resetGame);

function showModal() {
    $('.modal').show();
}

function closeModal() {
    $('.modal').hide();
}

