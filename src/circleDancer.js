var CircleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('circle');
  this.$node.css('transform-origin', '' + Math.ceil(Math.random() * 150) + '% center');
  this.$node.css('animation', 'rotate ' + timeBetweenSteps / 300 + 's linear infinite');
};
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;


CircleDancer.prototype.step = function() {
  this.$node.css('transform-origin', '' + Math.ceil(Math.random() * 200) + '% center');
  this.$node.css('animation', 'rotate ' + this.timeBetweenSteps / 300 + 's linear infinite');
  this.setPosition(this.top, this.left);
};

CircleDancer.prototype.lineUp = function (i, length) {
  this.$node.css('animation', 'none');
  this.setPosition(($('body').height() / 5) * 4, $('body').width() / (length + 5) * i);
  this.linedUp = true;
};
