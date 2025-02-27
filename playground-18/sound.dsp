import("stdfaust.lib");

shift = hslider("Shift",0,0,1,0.01);
cut = hslider("Cut", 600, 200, 1400, 1);
bpm = hslider("BPM", 120, 40, 200, 1);
multiplier = hslider("Multiplier", 1, 0.1, 4, 0.1);

numNotes = 8;

speed = ba.beat(bpm * multiplier);

// Some function to chosse a value based on another
// select(cond, f, g) = (cond * f) + ((1 - cond) * g);
// newValue = select(currentValue > 40, currentValue, 0);

newSlider(n) = hslider("Note %n", n, 0, 128, 1) : si.smoo;
notes = par(i, numNotes, newSlider(60 + i * 2));

count = speed : ba.pulse_countup_loop(numNotes - 1, 1);
freq = ba.listInterp(notes, count) : ba.midikey2hz;

env = en.ar(0.01, 0.1, speed) * 0.4;
mixer = prod(i, 4, os.osc(freq * (i + 1 + shift))) * env;

process = mixer : fi.resonlp(cut, 4, 1) <: _,_;