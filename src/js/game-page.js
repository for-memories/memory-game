app.router.add('', function () {

  // this happpens when the user is at the home page (/)
  // Load the template with easy or hard buttons, on click set
  // location.hash to #easy or #hard
  var template = _.template($('#home').html());
  var html = template();

  //append html to the DOM
  $('.main-content').html(html);

  //add click listeners
  //change the url to easy with so the router sees we are on easy
  // router goes to easy
  $('.easy').click(function (){
    location.hash = '#easy';
  });
 //now do the same with '#hard'
 $('.hard').click(function (){
   location.hash = '#hard';
 });

});

app.router.add('easy', function () {
  app.gamePage(8);
});
// Add two buttons to homepage, easy, hard.
// Link the hashes like below
//location.hash = '#easy';
app.router.add('hard', function () {
  app.gamePage(16);
});
app.gamePage = function (numPairs) {
  
  var template = _.template($('#gameBoard').html(), { variable: 'm' });
  var html = template({
    cards: app.gameDeck(numPairs)
  });

  $('.main-content').html(html);
  app.setTimer();
  // There's a variable currentFlippedElement
  // On click, check the icon of the clicked element
  var currentFlippedElement;
  $('input').click(function (){

    // `this` is the input element that was clicked. The input is a child of
    //game-tile, which is what we need. $(this).parent() gives us the game tile.
    var clickedElement = $(this).parent();

    //We have to go back to the paretn to get the icon name
    //use attr() to get the value of the icon attr (icon's name)
    var icon = clickedElement.attr('icon');

    // If there's not already a currently clicked icon, then
    // let the element stay flipped
    if(!currentFlippedElement) {

      console.log('clicked!');

      //stays flipped
      //set input to disabled
      setTimeout(function() {
        clickedElement.find('input').attr('disabled', 'true');
      }, 1);

      //set the clicked icon to the last clickedElement
      currentFlippedElement = clickedElement;

    } else {
      // check the string value of icon with the value of the icon attri for currentFlippedElement
      if (icon === currentFlippedElement.attr('icon')) {
        //stay flipped
        setTimeout(function() {
          clickedElement.find('input').attr('disabled', 'true');
        }, 1);

        //reset currentFlippedElement to go back to the first click
        currentFlippedElement ='';
      }
      else {
        //unflip both icons
        // we need to remove the disabled and checked attributes with jQuery.
        //undisable currentFlippedElement
        //uncheck both elements by removing 'checked' and 'input = disabled' attributes
        //this unchecks and undisables the elements
        setTimeout(function() {
          clickedElement.find('input').removeAttr('disabled');
          clickedElement.find('input').removeAttr('checked');
          currentFlippedElement.find('input').removeAttr('disabled');
          currentFlippedElement.find('input').removeAttr('checked');

          //reset currentFlippedElement to go back to the first click
          currentFlippedElement ='';
          app.decrementLives();
        }, 150);


      }
    }

  });


};
