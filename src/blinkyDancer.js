var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blinky");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  var currentDancer = this;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // currentDancer.$node.toggle();
  this.$node.toggle();
  this.dance = setTimeout(function() {
    currentDancer.step(timeBetweenSteps);
  }, timeBetweenSteps);
  //dancing();
};

BlinkyDancer.prototype.lineUp = function (i) {
  clearTimeout(this.dance);
  this.$node.show();
  this.setPosition($('body').height() / 2, 100 + 120 * i);
};
