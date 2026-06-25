import clickSoundFile from "../assets/sounds/click.mp3";
import spinSoundFile from "../assets/sounds/spin.mp3";
import winSoundFile from "../assets/sounds/win.mp3";

let clickAudio;
let spinAudio;
let winAudio;
let isSoundEnabled = true;

export const initSounds = () => {
  clickAudio = new Audio(clickSoundFile);
  spinAudio = new Audio(spinSoundFile);
  winAudio = new Audio(winSoundFile);

  clickAudio.volume = 0.5;
  spinAudio.volume = 0.6;
  winAudio.volume = 0.7;
};

export const setSoundEnabled = (value) => {
  isSoundEnabled = value;
};

export const playClickSound = () => {
  if (!clickAudio || !isSoundEnabled) return;
  clickAudio.currentTime = 0;
  clickAudio.play().catch(() => {});
};

export const playSpinSound = () => {
  if (!spinAudio || !isSoundEnabled) return;
  spinAudio.currentTime = 0;
  spinAudio.play().catch(() => {});
};

export const stopSpinSound = () => {
  if (!spinAudio) return;
  spinAudio.pause();
  spinAudio.currentTime = 0;
};

export const playWinSound = () => {
  if (!winAudio || !isSoundEnabled) return;
  winAudio.currentTime = 0;
  winAudio.play().catch(() => {});
};