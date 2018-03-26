const accordion = $('.accordion-item');

function clickTabs (e) {
    const target = $(this);
    const activeTab = $('.active');

    if(target.hasClass('active')){
        target.find('.accordion-body').slideToggle('swing', () => {
            target.removeClass('active');
        });
    } else {
        target.find('.accordion-body').slideToggle('swing', () => {
            target.addClass('active');
        });
        activeTab.find('.accordion-body').slideToggle('swing', () => {
            activeTab.removeClass('active');
        });
    }
}

accordion.on('click', clickTabs);