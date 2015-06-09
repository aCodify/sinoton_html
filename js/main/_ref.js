'use strict';


// VARIABLE

var $this             =  $(this),
$btn_prevent_default  =  $( ".btn-music, .btn-radio, .btn-tv, .btn-back-main-category" ),
$btn_category         =  $( ".btn-music, .btn-radio, .btn-tv" ),
$btn_music            =  $( ".btn-music" ),
$btn_radio            =  $( ".btn-radio" ),
$data_target_video    =  $( "[data-target='video']" );
$target               =  $this.data( "target" ),
$target_lowercase     =  target.toLowerCase(),
$loaded               =  [];


$btn_prevent_default.click(function(e) {
    e.preventDefault();
    e.stopPropagation();
});


var transEndEventNames = {
    'WebkitTransition' : 'webkitTransitionEnd',
    'MozTransition' : 'transitionend',
    'OTransition' : 'oTransitionEnd',
    'msTransition' : 'MSTransitionEnd',
    'transition' : 'transitionend'
},
transformNames = {
    'WebkitTransform' : '-webkit-transform',
    'MozTransform' : '-moz-transform',
    'OTransform' : '-o-transform',
    'msTransform' : '-ms-transform',
    'transform' : 'transform'
};




//////////////////////////////////////////
// INTERACT


// Add CSS
$( ".selector" ).css( {'visibility': 'visible' } );
$( ".selector" ).css( {'visibility': 'visible', 'opacity': 1 } );


// Remove Multiple Class
$( ".selector" ).removeClass( "hidden opa0" );


// Click
$( ".selector" ).click(function() {
});


.trigger( ".selector" )


// IF Has Class
$( ".selector" ).click(function()
{
    if( $(this).hasClass("show-panel") )
    {
        $('#panel').removeClass('show-panel');
        $('#panel').addClass('hide-panel');
    }
    else if( $(this).hasClass('hide-panel') )
    {
        $('#panel').removeClass('hide-panel');
        $('#panel').addClass('show-panel');
    }
});


// IF doesn't Has Class
if ( !$(this).hasClass("selected") )
{
    //do stuff
}


// IF Visible
if ( !$(this).is(':visible') )
{

}
else
{

}


// Hover & out
$( "selector" ).hover(
    function() {
        $( this ).addClass( "hover" );
},  function() {
        $( this ).removeClass( "hover" );
});


// Each Function
$( ".selector" ).each(function() {
});



// Each *, Find attr = data-target
$('*').each(function() {
    if( $(this).attr('data-target') )
    {
        var $target = $(this).attr('data-target');
    }
});



// Traveling
.parents( ".selector" );
.find();



// TAG
.attr( "href" )
.attr( "src" )




// Effect
.slideUp( 500 )
.slideDown( 500 )
.fadeIn("slow")
.fadeOut("slow")




// String
.text("")
.toLowerCase()



// Size
.height();




//////////////////////////////////////////
// FUNCTION


// USE -> $.rsNetwork();
$.rsNetwork = function() {
}; /* END $.rsNetwork */



// USE -> $( "a" ).rsNetwork();
$.fn.rsNetwork = function( callback ) {
}; /* END $.rsNetwork */



// USE -> doneLoading();
function doneLoading() {
});


var RS = {
    network: function() {
        // ss
    }
} // USE -> RS.network();




//////////////////////////////////////////
//

setTimeout(function() {
    // Code
}, 1000);




function doneLoading() {
    var $proper = $(proper),
    $broken = $(broken);

    if ( deferred ) {
        if ( broken.length ) {
            deferred.reject( $images, $proper, $broken );
        } else {
            deferred.resolve( $images );
        }
    }

    if ( $.isFunction( callback ) ) {
        callback.call( $this, $images, $proper, $broken );
    }
}

// call doneLoading and clean listeners if all images are loaded
if ( $images.length === loaded.length ) {
    setTimeout( doneLoading );
    $images.unbind( '.imagesLoaded', imgLoadedHandler );
}



//////////////////////////////////////////
// PROTOTYPE

$.Flipshow.prototype = {

    _init : function( options ) {
    },

    _addNav : function() {
    },

};