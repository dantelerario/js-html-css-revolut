$(document).ready( function() {

  console.log('ok');

  var dropDown = $('.menu .link.drop');
  console.log(dropDown);
  var dropLinks = dropDown.children('a');
  var dropMenus = dropDrown.children('.drop-down');

  dropLinks.click( function() {

    var actualMenu = $(this).next('.drop-down');

    actualMenu.toggle();

  } );


});
