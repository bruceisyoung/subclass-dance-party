var CircleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('circle');
  this.$node.css('transform-origin', '' + Math.ceil(Math.random() * 100) + '% center');
  this.$node.css('animation', 'rotate ' + timeBetweenSteps / 100 + 's linear infinite');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

// CircleDancer.prototype.step = function(top, left, timeBetweenSteps) {
//   // call the old version of step at the beginning of any call to this new version of step
//   var currentDancer = this;
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   // currentDancer.$node.toggle();
//   //this.setPosition(top, left);
//   setTimeout(function() {
//     currentDancer.step(timeBetweenSteps);
//   }, timeBetweenSteps);
// };
