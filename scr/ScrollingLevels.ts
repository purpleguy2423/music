class ScrollingLevel {
  private obstacles: any[]; // Array to hold all the obstacles
  private speed: number; // Scrolling speed
  private levelWidth: number; // Width of the level
  private player: any; // Reference to the player object

  constructor(levelWidth: number, speed: number, player: any) {
    this.obstacles = [];
    this.speed = speed;
    this.levelWidth = levelWidth;
    this.player = player;
  }

  addObstacle(obstacle: any) {
    this.obstacles.push(obstacle);
  }

  update(deltaTime: number) {
    // Move all obstacles to the left
    this.obstacles.forEach((obstacle) => {
      obstacle.update(deltaTime);
    });

    // Remove obstacles that go off-screen
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.x + obstacle.width > 0
    );

    // Check collisions with the player
    this.obstacles.forEach((obstacle) => {
      if (
        obstacle.checkCollision(
          this.player.x,
          this.player.y,
          50, // Player width
          50 // Player height
        )
      ) {
        console.log("Game Over!"); // Replace with your game over logic
      }
    });
  }

  draw(context: CanvasRenderingContext2D) {
    this.obstacles.forEach((obstacle) => {
      obstacle.draw(context);
    });
  }
}

export default ScrollingLevel;