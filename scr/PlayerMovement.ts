import { Input } from "game-engine"; // Replace with your game engine's input handling module

class Player {
  private x: number;
  private y: number;
  private velocityY: number;
  private isGrounded: boolean;
  private jumpForce: number;
  private dashSpeed: number;

  constructor(startX: number, startY: number) {
    this.x = startX;
    this.y = startY;
    this.velocityY = 0;
    this.isGrounded = false;
    this.jumpForce = 15;
    this.dashSpeed = 20;
  }

  update(deltaTime: number) {
    // Apply gravity
    this.velocityY += 9.8 * deltaTime;
    this.y += this.velocityY * deltaTime;

    // Check for ground collision
    if (this.y >= 0) {
      this.y = 0;
      this.velocityY = 0;
      this.isGrounded = true;
    }

    // Handle input for jumping
    if (Input.isKeyPressed("Space") && this.isGrounded) {
      this.velocityY = -this.jumpForce;
      this.isGrounded = false;
    }

    // Handle input for dashing
    if (Input.isKeyPressed("Shift")) {
      this.x += this.dashSpeed * deltaTime;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y - 50, 50, 50); // Draw the player as a square
  }
}
export default Player;