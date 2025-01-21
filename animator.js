class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });
        
        //To setup the elapsed time.
        this.elapsedTime = 0;

        //To setup the total time.
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        //To update the elapsed time value so it is not at zero forever.
        this.elapsedTime += tick;
        const frame = this.currentFrame();

        ctx.drawImage(this.spriteSheet, this.xStart + this.width*frame, this.yStart, this.width, this.height, 
                      x, y, this.width, this.height);
    };

    currentFrame() {
        //var currentFrame = Math.floor(this.elapsedTime / this.frameDuration);
        //return currentFrame;
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        //var completed = this.elapsedTime >= this.totalTime;
        //return completed;
        return (this.elapsedTime >= this.totalTime);
    };
}