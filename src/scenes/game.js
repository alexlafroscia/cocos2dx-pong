var GameLayer = cc.Layer.extend({
  sprite: null,
  ctor: function() {
    this._super();

    var size = cc.winSize;
    var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
    // position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // add the label as a child to this layer
    this.addChild(helloLabel, 5);

    return true;
  }
});

var GameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    this.addChild(layer);
  }
});
