$(document).ready(function() {
    alert("Strona załadowana!");
    $('#welcome-banner').delay(3000).slideUp(1000);

    $('#toggle-movies').click(function() {
        $('#movie-list').slideToggle();
    });

    $('#change-text-color').click(function() {
        const color = $('#color-select').val();
        $('.review').css('color', color);
    });

    $('#change-bg-color').click(function() {
        const color = $('#color-select').val();
        $('.review').css('background-color', color);
    });

    $('#btn-klasyczny').click(function() {
        $('#marathon-desc').removeClass('kinowy').addClass('klasyczny');
    });

    $('#btn-kinowy').click(function() {
        $('#marathon-desc').removeClass('klasyczny').addClass('kinowy');
    });

    $('#note-input').on('keypress', function(e) {
        if (e.which === 13) { // Enter key
            const note = $(this).val().trim();
            if (note) {
                if ($('#note-display').html().trim() === 'Tu pojawi się Twoja notatka') {
                    $('#note-display').html('');
                }
                $('#note-display').append(note + '<br>');
                $(this).val('');
            }
        }
    });

    $('#poster-gallery').on('click', '.poster-thumb', function() {
        const src = $(this).attr('src');
        $('#poster-gallery img').css('height', '220px');
        $('#large-poster').attr('src', src).css('height', 'auto').show();
    });

    $('#add-task').click(function() {
        const task = $('#task-input').val().trim();
        if (task) {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val('');
        }
    });

    $('#remove-last').click(function() {
        $('#task-list li:last').remove();
    });

    $('#clear-list').click(function() {
        $('#task-list').empty();
    });
});
