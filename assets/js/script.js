$(document).ready(function() {
    $('.card-back').on('click', handleCardClick);
});

function handleCardClick() {
    $(this).addClass('hidden');
}
