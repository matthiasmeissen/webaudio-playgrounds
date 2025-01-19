import("stdfaust.lib");

freq = hslider("Freq", 440, 20, 8000, 1);

osc1 = os.sawtooth(freq);
osc2 = os.square(freq * 0.33);
osc3 = os.triangle(freq * 0.78);

cut = hslider("[2] Cutoff", 600, 50, 10000, 0.01) * (os.osc(20) * 0.5 + 1);
res = hslider("[3] Resonance", 4, 1, 30, 0.1);
filter = fi.resonlp(cut, res, 1);

level1 = os.osc(0.32);
level2 = os.osc(0.63);
level3 = os.osc(0.81);

mixer = (osc1 * level1) + (osc2 * level2) + (osc3 * level3);

gain = hslider("Gain", 0.2, 0, 1, 0.01);

process = mixer : filter * gain <: _,_;