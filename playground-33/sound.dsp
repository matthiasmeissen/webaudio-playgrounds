import("stdfaust.lib");

// This creates steps based on a phasor signal that is related to a tempo
// The steps are used to modify the playback speed of a sample
// The sample is used to modulate the frequeny of an oscillator
// A speed multiplied phasor of the base phasor is used to generate triggers
// Those triggers are used to have an envelope on the sample signal

bpm = hslider("BPM", 80, 40, 200, 0.1);
hz = bpm / 60;
numSteps = hslider("Steps", 4.0, 1.0, 8.0, 1);
phasor = os.phasor(1.0, hz);

// This creates the steps
steps = floor(phasor * numSteps) / numSteps;

soundFile = soundfile(" son [url: {'https://raw.githubusercontent.com/sletz/faust-sampler/main/violon.wav'} ]", 2);
numSamples = 0, 0 : soundFile : _, !, !, !;
playbackSpeed = 0.4 * (steps + 1.0);
samples = playbackSpeed : + ~ _;
readIndex = numSamples - fmod(samples, numSamples);

sample = 0, readIndex : soundFile : !, !, !, _;
freq = (sample + 1.0) * 0.5;

mul = hslider("Multiplier", 2.0, 1.0, 4.0, 0.1);
phasor2 = fmod(phasor * mul, 1.0);

trigger = phasor2 < phasor2@1;

voice = os.triangle(freq * 200) * 0.4 * en.ar(0.1, 0.4, trigger);

process = voice + sample * 0.2 <: _,_;