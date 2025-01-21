import("stdfaust.lib");

freq = hslider("Frequency", 120, 20, 400, 0.1);
speed = hslider("Speed", 120, 40, 200, 1);
ratio = hslider("Ratio", 0.8, 0.2, 1.4, 0.01);

osc1 = os.triangle(freq);
trigger1 = ba.beat(speed);
env1 = en.ar(attack / 10, release / 10, trigger1);
vca1 = osc1 * env1;

osc2 = os.triangle(freq * ratio);
trigger2 = ba.beat(speed * ratio);
env2 = en.ar(attack / 10, release / 10, trigger2);
vca2 = osc2 * env2;

osc3 = os.triangle(freq * ratio * 2);
trigger3 = ba.beat(speed * ratio / 2);
env3 = en.ar(attack / 10, release / 10, trigger3);
vca3 = osc3 * env3;

attack = hslider("[4] Attack", 0.1, 0.01, 4, 0.01);
release = hslider("[5] Release", 2.8, 0.01, 4, 0.01);

mixer = (vca1 + vca2 + vca3) / 3;

gain = hslider("Gain", 0.2, 0, 1, 0.01);

process = mixer * gain <: _,_ : re.stereo_freeverb(0.8, 0.4, 0.4, 200);