var ExitButton = cc.Sprite.extend({
  ctor: function(x, y) {
    var imageName = res['exit_button_png'];
    this._super(imageName);
    this.setPosition(x, y);

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function exitButtonTouchHandler(touch) {
        var touchLocation = touch.getLocationInView();
        if (cc.rectContainsPoint(this.getBoundingBox(), touchLocation)) {
          this.onClickHandler();
        }
      }.bind(this)
    }, this);
  },

  onClickHandler: function(touch, event) {
    console.log('not implemented');
  }

});

ExitButton.create = function(x, y) {
  var button = new ExitButton(x, y);
  button.setVisible(true);
  return button;
};
