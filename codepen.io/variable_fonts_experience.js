const countries = document.querySelector(".countries"),
    sports = document.querySelector(".sports"),
    countriesSlider = document.querySelector(".main__slider--countries"),
    sportsSlider = document.querySelector(".main__slider--sports"),
    main = document.querySelector(".main");

countries.addEventListener("click", function() {
    countriesSlider.style.visibility = "visible";
    sportsSlider.style.visibility = "hidden";
    main.classList.remove("main--sports");
    this.classList.add("active");
    sports.classList.remove("active");
});

sports.addEventListener("click", function() {
    countriesSlider.style.visibility = "hidden";
    sportsSlider.style.visibility = "visible";
    main.classList.add("main--sports");
    this.classList.add("active");
    countries.classList.remove("active");
});

$(".main__slider").slick({
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 2,
    responsive: [{
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
            fade: true
        }
    }]
});