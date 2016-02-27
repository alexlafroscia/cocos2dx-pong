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
  isCollidingTop: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return p.y < 0;
  },

  isCollidingBottom: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return p.y > gl.screenRect.height;
  },

  isCollidingLeft: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return p.x < 0;
  },

  isCollidingRight: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return p.x > gl.screenRect.width;
  },

  bounceHorizontal: function() {
    this.xVelocity = this.xVelocity * -1;
  },

  bounceVertical: function() {
    this.yVelocity = this.yVelocity * -1;
  },

  update: function(dt) {
    this._super();
    var p = this.getPosition();

    // Detect collisions and bounce
    if (this.isCollidingTop() || this.isCollidingBottom()) {
      this.bounceVertical();
    }
    if (this.isCollidingRight() || this.isCollidingLeft()) {
      this.bounceHorizontal();
    }

    this.setPosition(p.x - this.xVelocity * dt, p.y - this.yVelocity * dt);
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
