$('.container .content section').hide();
$('.container .content section#home').show();
$('#menu a').on('click',function(){
    $('.container .content section').fadeOut(1000);
    $('#menu a').removeClass('active');
    $(this).addClass('active');
    var changebtn= $(this).closest('li').find('span').text().toLowerCase();
    setTimeout(function(){$("#" + changebtn).fadeIn(1000)},1000)
});
$('.home-btn').on('click',function(){
    $('.container .content section').fadeOut(1000);
    $('#menu a').removeClass('active');
    $('#menu a[href="#home"]').addClass('active');
    setTimeout(function(){$("#home").fadeIn(1000)},1000)
});
$('#down').on('click',function(){
    $('.container .content section').fadeOut(1000);
    $('#menu a').removeClass('active');
    $('#menu a[href="#contact"]').addClass('active');
    setTimeout(function(){$("#contact").fadeIn(1000)},1000)
});
