import MusicSync from './MusicSynchronization';
import Player from './PlayerMovement';
import Obstacle from './Obstacles';
import ScrollingLevel from './ScrollingLevels';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const player = new Player(100, 0);
const level = new ScrollingLevel(800, 5, player);

// Adding example obstacle
level.addObstacle(new Obstacle(600, 0, 50, 50, 5));

const musicSync = new MusicSync(
  './assets/music/background-music.mp3',
  120, // Replace with the BPM of your track
  () => {
    console.log('Beat! Triggering obstacle or animation.');
    // Example: Add a visual effect or spawn an obstacle on the beat
    level.addObstacle(new Obstacle(800, 0, 50, 50, 5));
  }
);

musicSync.play();

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const deltaTime = 1 / 60; // Assuming 60 FPS
  player.update(deltaTime);
  level.update(deltaTime);
  musicSync.update();

  player.draw(context);
  level.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop();