//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  DOM READY  ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

$(function() {


    /*========================================
    =            Sub-menu Top Nav            =
    ========================================*/

    $('#main-header .sub-show').hover(
        function() {
            $('#main-header .sub-show .sub-menu').removeClass('hidden');
    },  function() {
            $('#main-header .sub-show .sub-menu').addClass('hidden');
    });


    /*===================================
    =            Placeholder            =
    ===================================*/

    $('input, textarea').placeholder();


    /*================================
    =             Tab - 1            =
    ================================*/

    $('#tab-1-btn').click(function(){

        $('#tab-2-btn').removeClass('active');
        $('#tab-1-btn').addClass('active');

        $('#tab-1-title').removeClass('hidden');
        $('#tab-2-title').addClass('hidden');

        $('#tab-1').removeClass('hidden');
        $('#tab-2').addClass('hidden');

        return false;
    });


    /*================================
    =             Tab - 2            =
    ================================*/

    $('#tab-2-btn').click(function(){

        $('#tab-1-btn').removeClass('active');
        $('#tab-2-btn').addClass('active');

        $('#tab-2-title').removeClass('hidden');
        $('#tab-1-title').addClass('hidden');

        $('#tab-2').removeClass('hidden');
        $('#tab-1').addClass('hidden');

        return false;
    });


}); /* END DOM READY */



//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  WINDOW LOAD  ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

$(window).load(function() {

    /*=================================
    =            SliderKit            =
    =================================*/

    $("#home-slider").sliderkit({
        auto:true,
        autospeed:3000,
        circular:true,
        mousewheel:false,
        shownavitems:5,
        panelfx:"sliding",
        panelfxfirst:"fading",
        panelfxeasing:"easeInOutExpo"
    });


}); /* END WINDOW LOAD */