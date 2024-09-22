$( document ).ready(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let animation = $(entry.target).attr('animate');
            if (entry.isIntersecting) {
                $(entry.target).addClass(`animate__animated ${animation}`);
            } else {
                $(entry.target).removeClass(`animate__animated ${animation}`);
            }
        });
    });

    $('[animate]').each(function() {
        observer.observe(this);
        console.log('Observ');
    });
});