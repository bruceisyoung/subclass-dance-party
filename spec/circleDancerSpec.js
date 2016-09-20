describe('circleDancer', function() {

  var circleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    circleDancer = new CircleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(circleDancer.$node).to.be.an.instanceof(jQuery);
  });
/*
  it('should have a step function that makes its node blink', function() {
    sinon.spy(circleDancer.$node, 'rotate');
    circleDancer.step();
    expect(circleDancer.$node.called).to.be.true;
  });

  describe('dance', function() {
    it('should rotate in a circle', function() {
      //sinon.spy(circleDancer.$node, 'rotate');
      expect(circleDancer.css('animation')).to.eq('rotate');
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      
    });
  });
*/
});