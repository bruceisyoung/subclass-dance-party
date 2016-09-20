var ShootingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shooting');
  this.direction = true;
};

ShootingDancer.prototype = Object.create(Dancer.prototype);
ShootingDancer.prototype.constructor = ShootingDancer;

ShootingDancer.prototype.step = function() {
  
  var currentDancer = this;

  if (this.direction === true ) {
    currentDancer.top += 10;
  } else {
    currentDancer.top -= 10;
  }

  if (currentDancer.top > $('body').height() - 20 || currentDancer.top < 38 ) {
    currentDancer.direction = !currentDancer.direction;
  }

  currentDancer.setPosition((currentDancer.top), currentDancer.left);
  
  this.dance = setTimeout(function() { 
    currentDancer.step(currentDancer.timeBetweenSteps);
  }, 50);
};

ShootingDancer.prototype.lineUp = function (i, length) {
  clearTimeout(this.dance);
  this.setPosition($('body').height() / 2, $('body').width() / (length + 5) * i);
  this.linedUp = true;
};
