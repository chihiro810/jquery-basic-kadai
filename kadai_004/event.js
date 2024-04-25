$(window).on('load',()=>{
    console.log('loadが発生しました');
});

$(function() {
    $(document).on('scroll',()=> {
        console.log('scrollが発生しました');
    });
});