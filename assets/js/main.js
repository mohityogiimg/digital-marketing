// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}

$(window).on("load", (function() {
    setTimeout((function() {
        $(".page-loader").fadeOut("slow"),
        $("body").removeClass("overflow-hidden")
    }
    ), 500)
}
));


// counter js 
var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            },

            {

            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

            });
        });
        a = 1;
    }
});



// show modal time 
$(document).ready(function(){
    showPopup();
    });

function showPopup(){
if(localStorage.getItem('YesBtn') !== 1){
    setTimeout(() => {
    $('#contactus').modal('show');
    $('#popup-yes').on('click', function(){
        localStorage.setItem('YesBtn', 1);
        $('#contactus').modal('hide');
    })
    }, 3000);
}
}