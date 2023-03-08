
$('.card_sect').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1356,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 985,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 752,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                infinite: false,
                arrows: false,
                variableWidth: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.content-carousel').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 700
});

$('.card-img-box').slick({
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 752,
            settings: {
                draggable: false
            }
        }
    ]
});

document.querySelector('.nav-burger').addEventListener('click', function () {
    this.classList.toggle('activ');
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');
})

document.querySelector('.item-burg-cont').addEventListener('click', function () {
    document.querySelector('.nav-burger').classList.toggle('activ');
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');
})
