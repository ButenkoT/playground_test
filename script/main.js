var app = playground({
  render: function() {

    this.layer.clear("#000088");
    this.layer.fillStyle("#ffffff");
    this.layer.fillRect(32, 32, 64, 64);
    // this.layer.fillCircle(60, 60, 20);
  }
});