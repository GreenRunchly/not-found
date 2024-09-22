$( document ).ready(function() {
    $( document ).on( "click", ".btn", function( event ) {
        // Ubah icon dan text respone
        $(this).children().children().eq(0).html('<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>');
        $(this).children().children().eq(1).html('Memuat...');
        $(this).addClass('animate__animated animate__headShake');
    });
});
