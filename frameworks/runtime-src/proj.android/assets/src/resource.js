var MENU_BUTTON_HEIGHT = 63;
var MENU_BUTTON_WIDTH = 250;

var res = {
  game_menu_png: "res/game-menu.png",
  puck_png: "res/puck.png",
  paddle_left_png: "res/paddle-red.png",
  paddle_right_png: "res/paddle-blue.png",
  controller: "res/controller.png"
};

var sprites = {
  startGame: {
    normal: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(0, 0, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    ),
    selected: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(MENU_BUTTON_WIDTH, 0, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    ),
    disabled: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(MENU_BUTTON_WIDTH * 2, 0, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    )
  },
  options: {
    normal: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(0, MENU_BUTTON_HEIGHT, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    ),
    selected: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    ),
    disabled: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(MENU_BUTTON_WIDTH * 2, MENU_BUTTON_HEIGHT, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT)
    )
  }
};

var spriteFrames = {
  puck: cc.SpriteFrame.create(res.puck_png)
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
