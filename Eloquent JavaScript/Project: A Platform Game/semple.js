const fs = require("fs");
const readline = require("readline");

// ---- Level Plan ----
const simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Game {
  constructor(plan) {
    this.original = plan.trim().split("\n").map(r => r.split(""));
    this.reset();
  }

  reset() {
    // Deep copy grid
    this.grid = this.original.map(r => [...r]);
    this.player = { x: 0, y: 0 };

    // Count coins
    this.totalCoins = 0;
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[0].length; x++) {
        const ch = this.grid[y][x];
        if (ch === "@") {
          this.player = { x, y };
          this.grid[y][x] = ".";
        }
        if (ch === "o") this.totalCoins++;
      }
    }

    this.coinsCollected = 0;
  }

  draw() {
    console.clear();
    let out = "";
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[0].length; x++) {
        if (this.player.x === x && this.player.y === y) out += "@";
        else out += this.grid[y][x];
      }
      out += "\n";
    }
    out += `Coins: ${this.coinsCollected}/${this.totalCoins}\n`;
    console.log(out);
  }

  move(dx, dy) {
    const nx = this.player.x + dx;
    const ny = this.player.y + dy;
    const tile = this.grid[ny] && this.grid[ny][nx];

    if (!tile) return; // out of bounds

    if (tile === "#") return; // wall

    if (tile === "+" || tile === "=") {
      console.log("🔥 You hit lava! Restarting...");
      this.reset();
      return;
    }

    if (tile === "o") {
      this.coinsCollected++;
      this.grid[ny][nx] = ".";
      if (this.coinsCollected === this.totalCoins) {
        console.clear();
        console.log("🏆 YOU WIN! All coins collected.");
        process.exit();
      }
    }

    this.player.x = nx;
    this.player.y = ny;
  }
}

const game = new Game(simpleLevelPlan);

// Keyboard Input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Controls: W A S D — Move | Ctrl+C exit");

game.draw();

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") process.exit();

  if (key.name === "w") game.move(0, -1);
  if (key.name === "s") game.move(0, 1);
  if (key.name === "a") game.move(-1, 0);
  if (key.name === "d") game.move(1, 0);

  game.draw();
});
