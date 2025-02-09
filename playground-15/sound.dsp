import("stdfaust.lib");

noise = no.lfnoise(400) * 100;

// Iterations are like for loops and par iteration creates signals in parallel
osc1 = par(i, 4, os.osc(noise * (i + 1))) :> _ / 4;

osc2 = par(i, 8, os.triangle(100 * (i + 1))) :> _ / 4;

env1 = en.ar(0.01, 0.1, ba.beat(132));
env2 = en.ar(0.01, 0.1, ba.beat(86));

mixer = osc1 * env1 + osc2 * env2;

process = mixer <: dm.zita_light;