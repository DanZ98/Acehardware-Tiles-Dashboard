// Slide toggle Profile Menu
$('.profile-dropdown').hide(); //this hides the list initially

$('.profile-dropdown-menu').click(function(){
    $(this).next(".profile-dropdown").slideToggle();
});

// Hamburger Menu Links Level 1
$('.menu-link-level1').click(function(){
    $(this).next().slideToggle();

    if($('.hamburger-submenu-level2:visible').length > 1) {
        $('.hamburger-submenu-level2:visible').hide();
        $(this).next().show();
    }
});

// Hamburger Menu Links Level 2
$('.submenu-level-2').click(function(){
    $(this).next(".hamburger-submenu-level3").slideToggle();
});

// Slide Toggle Sub Table
$('.chevron-toggle').click(function(){
    $(this).parent().parent().next('tr').children('td').children('.table-container__inner-table-container').slideToggle();
    $(this).parent().parent().next('tr').children('td').children('.table-container__inner-table-container').css('overflow', 'auto');

    // Toggling arrow rotate 90deg individually
    $(this).toggleClass('arrow-right-rotate');
});

$('.nav-link').click(function(){
    $(this).next().slideToggle();

    if($('.mega-menu:visible').length > 1) {
        $('.mega-menu:visible').hide();
        $(this).next().show();
    }
});


