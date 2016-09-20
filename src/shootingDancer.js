var ShootingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shooting');
  this.top = top;
  this.left = left;
  this.direction = true;
};

ShootingDancer.prototype = Object.create(Dancer.prototype);
ShootingDancer.prototype.constructor = ShootingDancer;

ShootingDancer.prototype.step = function(timeBetweenSteps) {
  
  var currentDancer = this;
  console.log($('body').height());

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
    currentDancer.step(timeBetweenSteps);
  }, 50);
};

ShootingDancer.prototype.lineUp = function (i) {
  clearTimeout(this.dance);
  this.setPosition(($('body').height() / 2) + 20, 100 + 120 * i);
};
