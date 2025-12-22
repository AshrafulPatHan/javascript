const readline = require("readline");

// ========== CONFIG ==========
const WIDTH = 30;      // visible columns
const HEIGHT = 12;     // visible rows
const MAX_HEALTH = 5;

// tile odds
function randomTile() {
  const r = Math.random();
  if (r < 0.08) return "#";   // 8% wall
  if (r < 0.12) return "+";   // 4% lava
  if (r < 0.20) return "o";   // 8% coin
  return ".";                // empty
}

// ========== GAME CLASS ==========
class InfiniteGame {
  constructor() {
    this.grid = [];
    for (let y = 0; y < HEIGHT; y++) {
      const row = [];
      for (let x = 0; x < WIDTH; x++) row.push(randomTile());
      this.grid.push(row);
    }

    this.player = { x: 2, y: Math.floor(HEIGHT / 2) };
    this.coins = 0;
    this.steps = 0;
    this.health = MAX_HEALTH;
    this.score = 0;
  }

  draw() {
    console.clear();
    let out = "";

    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        if (x === this.player.x && y === this.player.y) out += "@";
        else out += this.grid[y][x];
      }
      out += "\n";
    }

    out += `Steps: ${this.steps} | Coins: ${this.coins} | Health: ${this.health} | Score: ${this.score}\n`;
    out += `Controls: W/A/S/D — move | Ctrl+C quit`;
    console.log(out);
  }

  move(dx, dy) {
    const nx = this.player.x + dx;
    const ny = this.player.y + dy;

    // can't move out of vertical bounds
    if (ny < 0 || ny >= HEIGHT) return;

    // reached right edge => generate new world
    if (nx >= WIDTH - 1 && dx === 1) {
      for (let y = 0; y < HEIGHT; y++) {
        this.grid[y].shift();
        this.grid[y].push(randomTile());
      }
      this.steps++;
      this.updateScore();
      return;
    }

    // reached left => regenerate left side too
    if (nx <= 0 && dx === -1) {
      for (let y = 0; y < HEIGHT; y++) {
        this.grid[y].pop();
        this.grid[y].unshift(randomTile());
      }
      this.steps++;
      this.updateScore();
      return;
    }

    const tile = this.grid[ny][nx];

    if (tile === "#") return; // wall
    if (tile === "+") {
      this.health--;
      if (this.health <= 0) {
        console.clear();
        console.log("💀 GAME OVER — You ran out of health!");
        console.log(`Final Score: ${this.score}`);
        process.exit();
      }
    }
    if (tile === "o") {
      this.coins++;
      this.grid[ny][nx] = ".";
    }

    // free to move
    this.player.x = nx;
    this.player.y = ny;
    this.steps++;
    this.updateScore();
  }

  updateScore() {
    this.score = this.steps + this.coins * 10 + this.health * 2;
  }
}

// ========== START GAME ==========
const game = new InfiniteGame();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

game.draw();

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") process.exit();

  if (key.name === "w") game.move(0, -1);
  if (key.name === "s") game.move(0, 1);
  if (key.name === "a") game.move(-1, 0);
  if (key.name === "d") game.move(1, 0);

  game.draw();
});
