var HomeLayer = cc.Layer.extend({
  sprite: null,
  ctor: function() {
    this._super();

    var size = cc.winSize;

    var startGameNormal = cc.Sprite.create(res.game_menu_png, cc.rect(0, 0, 400, 100));
    var startGameSelected = cc.Sprite.create(res.game_menu_png, cc.rect(0, 400, 400, 100));
    var startGameDisabled = cc.Sprite.create(res.game_menu_png, cc.rect(0, 800, 400, 100));
    var newGameButton = cc.MenuItemSprite.create(
      startGameNormal,
      startGameSelected,
      startGameDisabled,
      function() {
        this.onNewGame();
      }.bind(this)
    );

    var menu = cc.Menu.create(newGameButton);
    menu.alignItemsVerticallyWithPadding(10);
    this.addChild(menu);
    menu.setPosition(size.width / 2, size.height / 2 - 80);
    this.schedule(this.update, 0.1);

    // Author name label
    var authorLabel = new cc.LabelTTF('By Alex LaFroscia', 'Arial', 38);
    authorLabel.x = size.width / 2;
    authorLabel.y = size.height / 2;
    this.addChild(authorLabel);

    return true;
  },

  onNewGame: function() {
    var gameScene = new GameScene();
    if (gameScene.init()) {
      cc.director.pushScene(
        cc.TransitionFade.create(0.5, gameScene)
      );
    } else {
      throw Error('Could not initialize game scene');
    }
  }
});

var HomeScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new HomeLayer();
    this.addChild(layer);
  }
});
