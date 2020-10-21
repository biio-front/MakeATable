//btn 만들기
$('#name .bro ul li input')
.after(' <div class="btn_faci"></div>\
<div class="btn_spe"></div>\
<div class="btn_other"></div>');

$('#name .sis ul li input')
.after(' <div class="btn_spe"></div>\
<div class="btn_other"></div>');

$('#name .mid ol li input')
.after(' <div class="btn_other"></div>');

//btn 작동
$('#name .btn_faci').click(function(){
    $(this).parent().toggleClass('faci');
});
$('#name .btn_other').click(function(){
    $(this).parent().toggleClass('other');
});
$('#name .btn_spe').click(function(){
    $(this).parent().toggleClass('spe');
});

