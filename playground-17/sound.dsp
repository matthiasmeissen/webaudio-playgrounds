import("stdfaust.lib");

shift = hslider("[2]shift",0,0,1,0.01);
cut = hslider("Cut", 600, 200, 1400, 1);

speed = hslider("Speed", 2, 0.1, 8, 0.1) * 1000 : ba.pulse;

n1 = hslider("Note 1", 40, 0, 127, 1) : si.smoo;
n2 = hslider("Note 2", 80, 0, 127, 1) : si.smoo;
n3 = hslider("Note 3", 60, 0, 127, 1) : si.smoo;

notes = (n1, n2, n3);

count = speed : ba.pulse_countup_loop(2, 1);
freq = ba.listInterp(notes, count) : ba.midikey2hz;

env = en.ar(0.01, 0.1, speed) * 0.4;
mixer = prod(i, 4, os.osc(freq * (i + 1 + shift))) * env;

process = mixer : fi.resonlp(cut, 4, 1) <: _,_;