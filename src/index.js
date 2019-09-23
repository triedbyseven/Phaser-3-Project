import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    // this.scene.add('Game', GameScene);
    this.scene.add('Title', TitleScene);
    // this.scene.start('Game');
    this.scene.start('Title');
  }
}

window.onload = function() {
  window.game = new Game();
};
