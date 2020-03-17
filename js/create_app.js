var canvas = document.getElementById("game");

var window_height = window.innerHeight;

var reference_width = 2048;
var reference_height = 1151;

var canvas_width = (reference_width * window_height) / reference_height;
var canvas_height = window_height;

var app = new PIXI.Application({
    view: canvas,
    antialias: true,
    width: canvas_width,
    height: canvas_height,
    backgroundColor: 0x959595
})
