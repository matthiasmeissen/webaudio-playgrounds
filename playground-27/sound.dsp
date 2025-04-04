import("stdfaust.lib");

// A custom waveform can be specified as a sequency of values
triangleWave = waveform{0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5};
sawWave = waveform{1.0, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1.0};
squareWave = waveform{1.0, 1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0};
mixedWave = waveform{1.0, -0.2, 0.4, -1.0, 0.8, -0.1, 0.4, -0.6};

freq = hslider("Freq", 400, 20, 2000, 1);
select = hslider("Waveform", 0, 0, 3, 1);

// The phasor cycles from 0 to argument 1 at a frequency specified in argument 2
osc1(f) = rdtable(triangleWave, os.phasor(8, f)) * 0.2;

// Same thing using a custom phasor
slope = freq / ma.SR;
samples = slope : + ~ (_);
phasor = fmod(samples, 1.0);
osc2(f) = rdtable(triangleWave, phasor * 8.0) * 0.2;

triOsc(f) = rdtable(triangleWave, os.phasor(8, f));
sawOsc(f) = rdtable(sawWave, os.phasor(11, f));
squOsc(f) = rdtable(squareWave, os.phasor(8, f));
mixOsc(f) = rdtable(mixedWave, os.phasor(8, f));

// With ba.selectn(N,i) you can choose how many inputs you want to have
selectOscillator(f) = triOsc(f), sawOsc(f), squOsc(f), mixOsc(f) : ba.selectn(4, select);

process = selectOscillator(freq) * 0.2;