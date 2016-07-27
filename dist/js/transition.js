/**
 * Created by Robert on 25/09/2015.
 */



$('#tabs-first').find('a').click(function (e) {
    e.preventDefault();
    var $a = $(this);

    var $active_div = $('.active.tab-pane');
    console.log($($a.attr("href")).hasClass('active'));

    $a.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated jello');
    });

    if ($($a.attr("href")).hasClass('active')){
        $active_div.addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated shake');
        });
    }
    else if(!$($a.attr("href")).hasClass('active')){
        $active_div.addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated bounceOutLeft');
            $a.tab('show');
            $($a.attr("href")).addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated bounceInRight');
            });
        });
    }
});


$('.hover-animation').hover(
    function(){ $(this).addClass('animated jello') },
    function(){ $(this).removeClass('animated jello') }
);

$('.Sombrero').hover(
    function(){ $(this).addClass('animated shake') },
    function(){ $(this).removeClass('animated shake') }
);

