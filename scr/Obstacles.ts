class Obstacle {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private speed: number;

  constructor(x: number, y: number, width: number, height: number, speed: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  update(deltaTime: number) {
    this.x -= this.speed * deltaTime;

    // Reset position if obstacle goes off-screen
    if (this.x + this.width < 0) {
      this.x = 800; // Assuming 800px screen width
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  checkCollision(playerX: number, playerY: number, playerWidth: number, playerHeight: number): boolean {
    return (
      this.x < playerX + playerWidth &&
      this.x + this.width > playerX &&
      this.y < playerY + playerHeight &&
      this.y + this.height > playerY
    );
  }
}

export default Obstacle;