import("stdfaust.lib");

shift = hslider("Shift",0.2,0,1,0.01);
cut = hslider("Cut", 800, 200, 1400, 1);
gain = hslider("Gain", 0.4, 0, 1, 0.01);

exponential(x, k) = (exp(k * x) - 1) / (exp(k) - 1);
slider = hslider("Slider", 0.2, 0.1, 1.0, 0.001);
mapped = exponential(slider, 4.0);
speed = ba.pulse(20000 * mapped);

numNotes = 4;
noteRange(n) = 60 + n * 2;
newSlider(n) = hslider("Note %n", noteRange(n), 0, 128, 1) : si.smoo;
notes = par(i, numNotes, newSlider(i));

count = speed : ba.pulse_countup_loop(numNotes - 1, 1);
freq = ba.listInterp(notes, count) : ba.midikey2hz;

env = en.ar(0.01, 0.1, speed) * gain;

voice = prod(i, 4, os.osc(freq * (i + 1 + shift)));

process = voice * env : fi.resonlp(cut, 4, 1);