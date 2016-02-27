var Paddle = cc.Sprite.extend({
  active: true,

  xVelocity: 10,
  yVelocity: 10,

  gameLayer: null,

  controller: null,

  position: null,

  ctor: function(controller, position) {
    // Initialize image
    var imageName = res['paddle_' + position + '_png'];
    this._super(imageName);

    this.controller = controller;

    // Set the starting position
    var winSize = cc.director.getWinSize();
    var horizontalPosition;
    if (position == 'left') {
      horizontalPosition = this.width;
    } else if (position === 'right') {
      horizontalPosition = winSize.width - this.width;
    } else {
      throw Error('Position must be either left or right');
    }
    this.setPosition(horizontalPosition, winSize.height / 2);
  },

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

  acceptPlayerMovement: function() {

  },

  update: function(dt) {
    this._super();
    var p = this.getPosition();

    // Detect collisions and bounce
    if (!this.isCollidingTop() || !this.isCollidingBottom()) {
      this.acceptPlayerMovement();
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

Paddle.create = function(controller, position) {
  var paddle = new Paddle(controller, position);
  paddle.setVisible(true);
  return paddle;
};
