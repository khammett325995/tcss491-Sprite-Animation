class WoolyMammoth {
    constructor(game) {
        //To pass in the game engine since the tick comes from the game engine.
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./WoolyMammoth.png"), 0, 5, 32, 23, 4, 0.37);

        //To help with showing movement in the animation.
        this.x = 0;
        this.y = 0;
        this.speed = 75;
    };

    update() {
        this.x += this.speed * this.game.clockTick;

        //To avoid reloading every time that the sprite animation is off of the screen.
        if (this.x > 1024) this.x = 0;
    };

    //draw() has a parameter of the context (ctx) that we want to draw to.
    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("C:\TCSS 491 (Winter 2025)\tcss491-Sprite-Animation-main\WoolyMammoth.png"), 0, 0);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./WoolyMammoth.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}