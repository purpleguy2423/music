class MusicSync {
  private audio: HTMLAudioElement;
  private bpm: number; // Beats per minute of the song
  private beatInterval: number; // Time between beats in seconds
  private lastBeatTime: number; // Timestamp of the last beat
  private onBeatCallback: () => void; // Callback to trigger actions on each beat

  constructor(audioFile: string, bpm: number, onBeatCallback: () => void) {
    this.audio = new Audio(audioFile);
    this.bpm = bpm;
    this.beatInterval = 60 / bpm;
    this.lastBeatTime = 0;
    this.onBeatCallback = onBeatCallback;
  }

  play() {
    this.audio.play();
    this.lastBeatTime = performance.now() / 1000; // Convert to seconds
  }

  update() {
    const currentTime = performance.now() / 1000; // Convert to seconds
    if (currentTime - this.lastBeatTime >= this.beatInterval) {
      this.lastBeatTime = currentTime;
      this.onBeatCallback();
    }
  }
}

export default MusicSync;