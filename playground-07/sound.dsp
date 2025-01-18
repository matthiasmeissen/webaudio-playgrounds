import("stdfaust.lib");

// Oscillator
freq = hslider("[0] Frequency", 102, 40, 2000, 0.01) : si.smoo;
pwm = hslider("[1] PulseWidth", 2.4, 0, 10, 0.01);

quantizer = freq : qu.quantize(440, qu.ionian) : si.smoo;
pw = os.lf_sawpos(pwm);
osc = os.pulsetrain(quantizer, pw) * os.osc(freq * 0.5);

// Filter
cut = hslider("[2] Cutoff", 1800, 50, 10000, 0.01);
res = hslider("[3] Resonance", 8, 1, 30, 0.1);

filter = fi.resonlp(cut, res, 1);

// Envelope
attack = hslider("[4] Attack", 0.1, 0.01, 4, 0.01);
release = hslider("[5] Release", 2.8, 0.01, 4, 0.01);

env = en.ar(attack / 10, release / 10, trigger);

// Gate
speed = hslider("[8] Speed", 22, 1, 40, 1);
trigger = ba.pulse(48000 / speed);

// Vca
gain = hslider("[9] Gain", 0.4, 0, 1, 0.01);
vca = env * gain;

process = osc : filter * vca : re.satrev;