$(window).on("load", function () {
    $(".loader .inner").fadeOut(2000, function () {
        $(".loader").fadeOut(2100)
    })

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })
})


$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    })

    var typed = new Typed(".typed", {
        strings: ["Software Engineer...", "Web Developer...", "Student...", "Photographer..."],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true,
        showCursor: false,
        delay: 1000,
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    var skillsTopOffSet = $(".skillsSection").offset().top
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffSet - $(window).height() + 300) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                size: 152,
                onStep: function (fron, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }

            })
        }

    })

    var statsTopOffSet = $(".statsSection").offset().top
    var counterupFinished = false
    $(window).scroll(function () {
        if (!counterupFinished && window.pageYOffset > statsTopOffSet - $(window).height() + 300) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            })
            counterupFinished = true
        }

    })

    $("[data-fancybox]").fancybox()

    $("#filters a").click(function () {
        $("#filters .current").removeClass("current")
        $(this).addClass("current")

        var selector = $(this).attr("data-filter")

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })

        return false

    })

    $("#navigation li a").click(function (e) {
        e.preventDefault()

        var targetElement = $(this).attr("href")
        var targetPosition = $(targetElement).offset().top
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    })

    const nav = $("#navigation")
    const navTop = nav.offset().top

    $(window).on("scroll", stickyNavigation)

    function stickyNavigation() {
        var body = $("body")

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav")
        }
        else {
            body.removeClass("fixedNav")
            body.css("padding-top", 0)
        }
    }

})

