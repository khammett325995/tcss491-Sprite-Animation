class WoolyMammoth {
    constructor(game) {
        //To pass in the game engine since the tick comes from the game engine.
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./WoolyMammoth.png"), 1, 5, 28, 21, 4, 0.4);
    };

    update() {

    };

    //draw() has a parameter of the context (ctx) that we want to draw to.
    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("C:\TCSS 491 (Winter 2025)\tcss491-Sprite-Animation-main\WoolyMammoth.png"), 0, 0);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./WoolyMammoth.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}