var app = playground({

  width: 800,  
  height: 500,  
  scale: 1,
  smoothing: false,

  create: function() {
    this.loadImage("background.jpg", "ship");

    this.ship = {
      image: "ship",
      x: this.center.x,
      y: this.center.y
    };
    
    this.spaceBug = { 
      x: 0, 
      y: 10, 
      width: 32,
      height: 32,
      color: "#e2543e", 
      speed: 100 
    };

  },

  step: function(dt) {

    this.spaceBug.x += this.spaceBug.speed * dt;    
    if(this.spaceBug.x > this.width) this.spaceBug.x =- this.spaceBug.width;

  },

  render: function() {

    
    this.layer.clear("#000088")
        .align(0.28, 0.28);
    this.layer.drawImage(this.images.background, 0, 0);
    var shipN = this.ship;
    this.layer.drawImage(this.images.ship, shipN.y, shipN.x);
    // this.layer.drawImage(this.images.ship, this.center.y + this.images.ship.width, this.center.x);

    //space bug rendering
    var spaceBug = this.spaceBug;
    this.layer
      .fillStyle(spaceBug.color)
      .fillRect(spaceBug.x, spaceBug.y, spaceBug.width, spaceBug.height);


  },

  keydown: function(event) {

    event.left;
    if (this.keyboard.keys.left) { 
      this.ship.y -= 5;
    };
    event.right;
    if (this.keyboard.keys.rigth) { 
      this.ship.y += 5;
    };    
  }

});