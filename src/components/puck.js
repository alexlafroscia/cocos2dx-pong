var Puck = cc.Sprite.extend({
  active: true,

  xVelocity: 400,
  yVelocity: 400,

  onDestroyCallback: null,

  gameLayer: null,

  ctor: function() {
    this._super(res.puck_png);
  },

  detectCollisionWithPaddle: function(paddle) {
    var puckRect = this.getCurrentRectangle();
    var paddleRect = paddle.getCurrentRectangle();
    return cc.rectIntersectsRect(puckRect, paddleRect);
  },

  /**
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
    return (
      p.x < 0 ||
      this.detectCollisionWithPaddle(this.gameLayer.paddles.left)
    );
  },

  isCollidingRight: function() {
    var p = this.getPosition();
    var gl = this.gameLayer;
    return (
      p.x > gl.screenRect.width ||
      this.detectCollisionWithPaddle(this.gameLayer.paddles.right)
    );
  },

  bounceHorizontal: function() {
    this.xVelocity = this.xVelocity * -1;
  },

  bounceVertical: function() {
    this.yVelocity = this.yVelocity * -1;
  },

  update: function(dt) {
    this._super(dt);
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
  },

  getCurrentRectangle: function() {
    return cc.rect(
      this.getPosition().x - (this.getContentSize().width / 2),
      this.getPosition().y - (this.getContentSize().height / 2),
      this.getContentSize().width,
      this.getContentSize().height
    );
  }
});

Puck.create = function() {
  var puck = new Puck();
  puck.setVisible(true);
  return puck;
};
