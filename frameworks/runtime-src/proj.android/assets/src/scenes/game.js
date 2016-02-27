var GameLayer = cc.Layer.extend({
  sprite: null,

  playing: true,

  screenRect: null,

  puck: null,
  paddles: {
    left: null,
    right: null,
  },

  init: function() {
    this._super();
    var winSize = cc.director.getWinSize();
    this.screenRect = cc.rect(0, 0, winSize.width, winSize.height + 10);
    return true;
  },

  ctor: function() {
    this._super();

    var leftController = Controller.create('left');
    leftController.gameLayer = this;
    this.addChild(leftController);

    var leftPaddle = Paddle.create(leftController, 'left');
    leftPaddle.gamelayer = this;
    this.addChild(leftPaddle);
    this.paddles.left = leftPaddle;

    var rightController = Controller.create('right');
    rightController.gameLayer = this;
    this.addChild(rightController);

    var rightPaddle = Paddle.create(rightController, 'right');
    rightPaddle.gameLayer = this;
    this.addChild(rightPaddle);
    this.paddles.right = rightPaddle;

    this.createPuck();

    this.scheduleUpdate();
    return true;
  },

  createPuck: function() {
    if (this.puck) {
      throw Error('There can only be one puck visible at a time');
    }
    var size = cc.director.getWinSize();
    var puck = Puck.create();
    puck.gameLayer = this;
    this.addChild(puck);
    puck.setPosition(size.width / 2, size.height / 2);
    this.puck = puck;
  },

  update: function() {
    if (this.playing) {
      this.puck.update(1.2);
      this.paddles.right.update(1.2);
      this.paddles.left.update(1.2);
    }
  },

  destroyPuck: function(puck) {
    // Do something to clean up the puck
    this.puck = null;
    this.createPuck();
  }

});

GameLayer.create = function() {
  var layer = new GameLayer();
  if (layer && layer.init()) {
    return layer;
  } else {
    throw Error('Could not initialize game layer');
  }
};

var GameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = GameLayer.create();
    this.addChild(layer, 1);
  }
});
