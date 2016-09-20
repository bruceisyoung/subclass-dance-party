$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //var dancerMakerFunctionName = new BlinkyDancer;

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() - 32,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  // function collision($div1, $div2) {
  //     var x1 = $div1.offset().left;
  //     var y1 = $div1.offset().top;
  //     var h1 = $div1.outerHeight(true);
  //     var w1 = $div1.outerWidth(true);
  //     var b1 = y1 + h1;
  //     var r1 = x1 + w1;
  //     var x2 = $div2.offset().left;
  //     var y2 = $div2.offset().top;
  //     var h2 = $div2.outerHeight(true);
  //     var w2 = $div2.outerWidth(true);
  //     var b2 = y2 + h2;
  //     var r2 = x2 + w2;

  //     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  //     return true;
  //   }
  });
});

