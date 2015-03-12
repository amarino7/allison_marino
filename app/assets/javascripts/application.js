// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require skrollr
//= require jquery
//= require jquery_ujs
//= require turbolinks

//= require_tree .

// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );


// function(skrollr){

//     var s = skrollr.init();
//     console.log("JavaScript is working!");
// });

$(document).on('page:load', function () {
skrollr.init().refresh(); 
});
console.log("JS is working");