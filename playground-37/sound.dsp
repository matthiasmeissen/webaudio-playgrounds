import("stdfaust.lib");

// Inputs
tempo = hslider("Tempo", 120, 80, 200, 1) / 60 : si.smoo;
freq = hslider("Freq", 440, 20, 2000, 1);

// Base
samples = 1 : + ~ _;
speed = (samples / ma.SR) * tempo;

// Functions
getTrigger(i) = (i - i@1) < -0.5;

// Modulation
stepMod(n) = floor(fmod(speed / n, 1.0) * n) / n;

// Voices
voice(f, i) = (tri + saw) * en.ar(0.02, 0.1, getTrigger(phasor))
with {
    s = hslider("Steps %i", 3, 1, 8, 1);
    t = hslider("Multiplier %i", 2, 1, 4, 1);
    fb = f + (f * stepMod(s));
    tri = os.triangle(fb);
    saw = os.sawtooth(fb / 2);
    phasor = fmod(speed * t, 1);
};

// Mixer
mixer = voice(freq, 1) * 0.3 + voice(freq / 2, 2) * 0.4 <: _,_;

process = mixer;