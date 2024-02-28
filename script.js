var MagicCanvas = /** @class */ (function () {
    function MagicCanvas(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.lightEffect = document.createElement('div');
        this.lightEffect.classList.add('light-effect');
        this.canvas.appendChild(this.lightEffect);
        this.attachEventListeners();
    }
    MagicCanvas.prototype.updateLightPosition = function (x, y) {
        this.lightEffect.style.opacity = '1';
        // Subtract half the size of the light effect to center it on the cursor
        this.lightEffect.style.transform = "translate(".concat(x - 150, "px, ").concat(y - 150, "px)");
    };
    MagicCanvas.prototype.attachEventListeners = function () {
        var _this = this;
        this.canvas.addEventListener('mousemove', function (event) {
            _this.updateLightPosition(event.pageX, event.pageY);
        });
        this.canvas.addEventListener('mouseleave', function () {
            _this.lightEffect.style.opacity = '0';
        });
    };
    return MagicCanvas;
}());
// Instantiate MagicCanvas with the ID of the target element
new MagicCanvas('magicCanvas');
