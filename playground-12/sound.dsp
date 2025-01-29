import("stdfaust.lib");

freq = (no.lfnoise(0.2) + 1) * 80;

simpleOsc(x, y) = os.osc(freq * x) + os.triangle((freq + 2) * x) + os.square((freq + 1) * os.osc(no.lfnoise(0.8)) * x) * 0.4; 

count = 20;

mixer = par(i, 20, simpleOsc(i + 1)) :> _ / 20;

process = mixer * hslider("Gain", 0.2, 0, 1, 0.01);