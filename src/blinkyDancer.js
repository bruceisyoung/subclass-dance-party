var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var currentDancer = this;
  this.$node.toggle();

  this.setPosition(this.top, this.left);
  this.dance = setTimeout(function() {
    currentDancer.step(currentDancer.timeBetweenSteps);
  }, currentDancer.timeBetweenSteps);

};

BlinkyDancer.prototype.lineUp = function (i, length) {
  clearTimeout(this.dance);
  this.$node.show();
  this.setPosition($('body').height() / 2, $('body').width() / (length + 5) * i);
  this.linedUp = true;
};
