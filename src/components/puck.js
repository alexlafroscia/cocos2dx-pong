var Puck = cc.Sprite.extend({
  active: true,

  xVelocity: 10,
  yVelocity: 10,

  onDestroyCallback: null,

  gameLayer: null,

  /**
   * isColliding
   *
   * Whether or not the puck is currently colliding with something else
   */
  isColliding: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return (
      p.x < 0 ||
      p.x > gl.screenRect.width ||
      p.y < 0 ||
      p.y > gl.screenRect.height
    );
  },

  bounce: function() {
    this.xVelocity = this.xVelocity * -1;
    this.yVelocity = this.yVelocity * -1;
  },

  update: function(dt) {
    this._super();
    var p = this.getPosition();
    this.setPosition(p.x - this.xVelocity * dt, p.y - this.yVelocity * dt);
    if (this.isColliding()) {
      this.bounce();
    }
  },

  destroy: function() {
    if (this.onDestroyCallback) {
      this.gameLayer.destroyPuck();
    }
  }
});

Puck.create = function() {
  var puck = new Puck(res.puck_png);
  puck.setVisible(true);
  return puck;
};
