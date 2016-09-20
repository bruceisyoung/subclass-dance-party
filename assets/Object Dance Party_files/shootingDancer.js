var ShootingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shooting');
  this.top = top;
  this.left = left;
  this.direction = true;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
ShootingDancer.prototype = Object.create(Dancer.prototype);
ShootingDancer.prototype.constructor = ShootingDancer;

ShootingDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  var currentDancer = this;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
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
  setTimeout(function() { 
    currentDancer.step(timeBetweenSteps);
  }, 50);
};

/*
  this.$node.css("top", "" + (top+1) + "");
  setTimeout(function() {
    currentDancer.setPosition(timeBetweenSteps);
  }, 1000);
}; */