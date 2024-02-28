class MagicCanvas {
  private canvas: HTMLElement;
  private lightEffect: HTMLElement;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId)!;
    this.lightEffect = document.createElement('div');
    this.lightEffect.classList.add('light-effect');
    this.canvas.appendChild(this.lightEffect);
    this.attachEventListeners();
  }

  private updateLightPosition(x: number, y: number): void {
    this.lightEffect.style.opacity = '1';
    // Subtract half the size of the light effect to center it on the cursor
    this.lightEffect.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
  }

  private attachEventListeners(): void {
    this.canvas.addEventListener('mousemove', (event: MouseEvent): void => {
      this.updateLightPosition(event.pageX, event.pageY);
    });

    this.canvas.addEventListener('mouseleave', (): void => {
      this.lightEffect.style.opacity = '0';
    });
  }
}

// Instantiate MagicCanvas with the ID of the target element
new MagicCanvas('magicCanvas');