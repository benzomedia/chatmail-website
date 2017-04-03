
$(document).ready(function(){



    //Subscribe to newsletter
    $('#email-form').on('submit', function(e) {
        e.preventDefault();

        if($('#newsletter-email-input').val() === "") return false;

        $('#newsletter-spinner').css("display", "inline-block");

        var data = {
            email: $('#newsletter-email-input').val()
        }

        $.ajax({
            url: "/mailchimp.php",
            type: 'POST',
            data: data,
            success: function (data) {

                console.log(data);
                $('#newsletter-spinner').css("display", "none");
                $('#newsletter-loading-div').html("Success! Cool things are on their way")
                $('#newsletter-email-input').val("")

                window.location.href = '/chatmail.zip';
            },
            error: function (error) {
                console.log(error);
                $('#newsletter-spinner').fadeOut()
            }
        });
    })



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
