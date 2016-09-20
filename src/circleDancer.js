var CircleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('circle');
  this.$node.css('transform-origin', '' + Math.ceil(Math.random() * 200) + '% center');
  this.$node.css('animation', 'rotate ' + timeBetweenSteps / 300 + 's linear infinite');
};
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.lineUp = function (i) {
  this.$node.css('animation', 'none');
  this.setPosition($('body').height() / 2, 100 + 120 * i);
};
