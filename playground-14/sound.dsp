import("stdfaust.lib");

// Creates three channels of osciallators
osc3 = os.osc(440) * 0.2 <: _,_,_;


speed = hslider("Speed", 120, 80, 200, 1);

env1 = en.ar(0.01, 0.1, ba.beat(speed));
voice1 = os.osc(440) * env1 <: dm.zita_light;

env2 = en.ar(0.01, 0.04, ba.beat(speed * 5.2));
voice2 = os.osc(120) * env2 <: dm.zita_light;

env3 = en.ar(0.01, 0.04, ba.beat(speed * 0.24));
voice3 = os.osc(800) * env3 <: dm.zita_light;

gain = hslider("Gain", 0.4, 0, 1, 0.01);

process = voice1, voice2, voice3 :> _ * gain,_ * gain;