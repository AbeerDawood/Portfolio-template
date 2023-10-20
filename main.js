    $(document).ready(function() {
        $('.slider').slick({
            arrows: true, // Show arrows for navigation
            dots: true, // Show dots for navigation
            slidesToShow: 2, // Show 2 slides at a time
            slidesToScroll: 1, // Scroll 1 slide at a time
            autoplay: true, // Autoplay the slider
            autoplaySpeed: 3000 // Set the autoplay speed to 3 seconds
        });
    });


    //floating button
    const scrollUpBtn = document.querySelector("#scroll-up-btn");

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.opacity = "1";
        } else {
            scrollUpBtn.style.opacity = "0";
        }
    });

    scrollUpBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // sectioin ease in 
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const windowTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (windowTop + windowHeight > sectionTop + sectionHeight / 2) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });