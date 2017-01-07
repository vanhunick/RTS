function update() {
    renderer.render(stage);
    requestAnimationFrame(update);
}

var renderer = PIXI.autoDetectRenderer(1280, 720, { backgroundColor: 0x7eC0ee }); // Sky blue background
//document.body.appendChild(renderer.view);

console.log("Test "  + document.getElementById("gameDiv"));
document.getElementById("gameDiv").appendChild(renderer.view);

requestAnimationFrame(update);

var instanceConfig = {
    mapDataPath:  "resources/test_map.xml",
    assetsToLoad: ["resources/grass.png"]
};

stage = new PIXI.Stage();
var engine = TRAVISO.getEngineInstance(instanceConfig);
stage.addChild(engine);
