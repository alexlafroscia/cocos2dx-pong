var SPRITE_HEIGHT = 63;
var SPRITE_WIDTH = 250;

var res = {
  HelloWorld_png : "res/HelloWorld.png",
  game_menu_png: "res/game-menu.png"
};

var sprites = {
  startGame: {
    normal: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)
    ),
    selected: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT)
    ),
    disabled: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(SPRITE_WIDTH * 2, 0, SPRITE_WIDTH, SPRITE_HEIGHT)
    )
  },
  options: {
    normal: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(0, SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT)
    ),
    selected: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT)
    ),
    disabled: cc.Sprite.create(
      res.game_menu_png,
      cc.rect(SPRITE_WIDTH * 2, SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT)
    )
  }
}

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}