import 'phaser';
import forest from '../assets/forest.png';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {}

  create() {
    // Main Title Styles
    const { titleText, subText } = {
      titleText: {
        font: 'bold 32px Arial',
        fill: '#fff',
        align: 'center'
      },
      subText: {
        font: '16px',
        fill: '#fff',
        align: 'center'
      }
    };

    const callback = function() {
      alert('You have clicked the title!');
    };

    // Set Main Title Text
    let title_text = this.add.text(0, 100, 'Mikes RPG', titleText);
    title_text.setFixedSize(800, 100);
    title_text.setInteractive();
    title_text.on('pointerdown', callback);

    let sub_text = this.add.text(0, 150, 'The Lost Dungeons', subText);
    sub_text.setFixedSize(800, 50);
    sub_text.setInteractive();
    sub_text.on('pointerdown', callback);
  }
}

export default TitleScene;
