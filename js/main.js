/*const cursor = document.getElementById('cursor'), follower = document.getElementById('aura'), links = document.getElementById('a')
mouseX = 0, mouseY = 0, posX = 0, posY = 0;
function mouseCoords(e) {
    mouseX = e.pageX
    mouseY = e.pageY
}
gsap.to({}, .01, {
    repeat: -1,
    onRepeat: () => {
        posX += (mouseX - posX) / 5
        posY += (mouseY - posY) / 5
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
        gsap.set(follower, {
            css: {
                left: posX - 23,
                top: posY - 23
            }
        })
    }
})*/
$('#pagePreloader .container .preloader').css({'margin-top':($(window).height()/2-100)+'px'});
            $(window).load(function () {
                if($('body').hasClass('preload')){
                    $('#pagePreloader').animate({
                        opacity:0
                    }, 500, function () {
                        $('#pagePreloader').hide();
                        $('body.preload').removeClass('preload');
                    })
                }
            })


$(document).ready(function () {
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewCarsButton = $(".view-cars");

    viewCarsButton.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);

    function toggleModal() {
        modal.toggleClass("is-open");
    }

});

/* Coookie Container */
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector("#cookieButton");
cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});
setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);

