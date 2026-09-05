// Procedural Web Audio API soundscape - Zero external audio files required
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
    this.oscillators = [];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Ethereal ambient warm chord drone (C-Major 9 / Lydian)
  toggleAmbient(enable) {
    this.init();
    if (!this.ctx) return false;

    if (!enable) {
      if (this.ambientGain) {
        this.ambientGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          this.oscillators = [];
          this.isAmbientPlaying = false;
        }, 1600);
      }
      return false;
    }

    if (this.isAmbientPlaying) return true;

    // Frequencies: C2 (65.4), G2 (98.0), E3 (164.8), B3 (246.9)
    const freqs = [65.41, 97.99, 164.81, 246.94];
    
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 3); // Gentle volume

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    this.ambientGain.connect(filter);
    filter.connect(this.ctx.destination);

    this.oscillators = freqs.map((freq, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle detune for organic acoustic warmth
      osc.detune.setValueAtTime((idx - 1.5) * 3, this.ctx.currentTime);

      osc.connect(this.ambientGain);
      osc.start();
      return osc;
    });

    this.isAmbientPlaying = true;
    return true;
  }

  // Subtle glass chime when clicking a node
  playNodeChime() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Harmonic high bell (E6 / 1318.5 Hz)
      osc.frequency.setValueAtTime(1318.5, now);
      osc.frequency.exponentialRampToValueAtTime(1325, now + 0.6);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.0);
    } catch (e) {}
  }

  // Deep cinematic swoop sound during keynote camera flight
  playCameraSwoop() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(120, now);
      filter.frequency.linearRampToValueAtTime(260, now + 0.4);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.9);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, now); // A1 bass
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.9);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.10, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.0);
    } catch (e) {}
  }
}

export const soundEngine = new SoundEngine();
