
$(document).ready(function(){


    //email form submit
    $('#email-form').on('submit', function(e){
        e.preventDefault()
        var email = $('#exampleInputEmail1').val();

        console.log(email);

        window.location.href = 'chatmail.zip';


    } );









//smooth scrolling

        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


})
