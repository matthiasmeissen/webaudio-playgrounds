import("stdfaust.lib");

notes = (440, 520, 2000);
index = ba.beat(120) : ba.counter % ba.count(3) + 1;
select = ba.take(index, notes);

freq = no.lfnoise(40) * 4 : si.smoo;


osc1 = os.triangle(freq * 440);
osc2 = os.triangle(freq * 442);

gain = 0.4;

vca1 = os.osc(2) * gain;
vca2 = os.osc(3.1) * gain;

process = osc1 * vca1,osc2 * vca2;