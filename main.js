const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//Using the path of your image ton queue the download into the asset manager.
// ./ is used to have it available in all machines and not just locally.

//In this case, it is the sprite sheet of the wooly mammoth image.
//ASSET_MANAGER.queueDownload("C:\TCSS 491 (Winter 2025)\tcss491-Sprite-Animation-main\WoolyMammoth.png");
ASSET_MANAGER.queueDownload("./WoolyMammoth.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	//To help make the animation smoother.
	ctx.imageSmoothingEnabled = false;

	//To add a new image to the game engine.
	gameEngine.addEntity(new WoolyMammoth(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
