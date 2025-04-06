export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.player = { x: 50, y: 50, width: 20, height: 40, color: 'red' };
    this.obstacles = [];
    this.isRunning = true;
  }

  start() {
    this.generateObstacles();
    this.run();
  }

  generateObstacles() {
    for (let i = 0; i < 5; i++) {
      this.obstacles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        width: 20,
        height: 20,
        color: 'brown'
      });
    }
  }

  run() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.run());
  }

  update() {
    // Game logic goes here
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPlayer();
    this.drawObstacles();
  }

  drawPlayer() {
    this.context.fillStyle = this.player.color;
    this.context.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  drawObstacles() {
    for (const obstacle of this.obstacles) {
      this.context.fillStyle = obstacle.color;
      this.context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
  }
}