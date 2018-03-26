// const header = document.querySelector('.header');
// const headerHeight = header.offsetHeight;
// const windowHeight = document.documentElement.clientHeight;
//
// function onScroll(e) {
//     let pos = window.pageYOffset;
//     if (pos > headerHeight + 100){
//         header.style.position = 'fixed';
//         header.style.top = '-75px';
//         header.style.backgroundColor = 'black';
//     }
//     if(pos > windowHeight){
//         header.style.top = '0';
//         header.style.transition = 'top .3s ease-out'
//     }
//     if(pos < headerHeight + 100){
//         header.style.position = 'absolute';
//         header.style.top = '0';
//         header.style.backgroundColor = 'transparent';
//         header.style.transition = 'none';
//     }
// }
//
// window.addEventListener('scroll', onScroll);
// window.addEventListener('load', onScroll);

const header = $('.header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

function onScroll(e) {
    let pos = $(window).scrollTop();

    if (pos > headerHeight + 100) {
        header.css({
            'position': 'fixed',
            'top': '-75px',
            'background- color': '#000'
        });
    }
    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });
    }
    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': '#000',
            'transition': 'none'
        });
    }
}
$(window).on('scroll', onScroll);

const scrollBtn = $('[data-scroll]');

function onClick(e) {
    e.preventDefault();
    const target = $(this).attr('data-scroll');
    const dist = $(target).offset().top;
    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
}

scrollBtn.on('click', onClick);

//tabs

const liTabs = $('ul.nav-tabs > li');
const tabContent = $('.tab-content')

function clickTabs(e) {
    const target = $(this);
    const id = target.find('a').attr('href');
    const fadeTab = tabContent.find(`${id}`);
    const showTab = tabContent.find('.active');

    e.preventDefault();

    if(liTabs.hasClass('active')){
        liTabs.removeClass('active');
        target.addClass('active')

        showTab.fadeOut(100, () => {
            showTab.removeClass('active fade in')
        });

        fadeTab.fadeIn(100, () =>{
            fadeTab.addClass('active fade in')
        })
    }
}

liTabs.on('click', clickTabs)