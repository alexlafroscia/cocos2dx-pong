var GameLayer = cc.Layer.extend({
  sprite: null,

  playing: true,

  screenRect: null,

  puck: null,

  init: function() {
    this._super();
    var winSize = cc.director.getWinSize();
    this.screenRect = cc.rect(0, 0, winSize.width, winSize.height + 10);
    return true;
  },

  ctor: function() {
    this._super();
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
      this.puck.update(1);
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
