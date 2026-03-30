$(document).ready(function() {
    // Zadanie 1: Powitanie z animacją
    alert("Strona załadowana!");
    $('#welcome-banner').delay(3000).slideUp(1000);

    // Zadanie 2: Lista filmów
    $('#toggle-movies').click(function() {
        $('#movie-list').slideToggle();
    });

    // Zadanie 3: Recenzje z dynamicznym stylowaniem
    $('#change-text-color').click(function() {
        const color = $('#color-select').val();
        $('.review').css('color', color);
    });

    $('#change-bg-color').click(function() {
        const color = $('#color-select').val();
        $('.review').css('background-color', color);
    });

    // Zadanie 4: Przełączanie stylów recenzji
    $('#btn-klasyczny').click(function() {
        $('#marathon-desc').removeClass('kinowy').addClass('klasyczny');
    });

    $('#btn-kinowy').click(function() {
        $('#marathon-desc').removeClass('klasyczny').addClass('kinowy');
    });

    // Zadanie 5: Notatki do filmu
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

    // Zadanie 6: Galeria plakatów
    $('#poster-gallery').on('click', '.poster-thumb', function() {
        const src = $(this).attr('src');
        $('#large-poster').attr('src', src).show();
    });

    // Zadanie 7: Lista przygotowań
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
