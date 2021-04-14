$(document).ready(function() {
    $(document).on('click', '.block-link', function(e) {
        let block = $(this).closest(".question-block")
        block.css('pointer-events', 'none');
        block.css('background-color', '#F0F8FF');
        let alert = block.find(".alert");
        alert.find('.AlertMsg').text($(this).attr('flag'));
        alert.fadeIn('slow')
    });
});