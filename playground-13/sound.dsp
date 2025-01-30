import("stdfaust.lib");

// Creates n number of signals in parallel
parallel(1,x) = x;
parallel(n,x) = x, parallel(n-1, x);
mixer1 = parallel(4, no.noise); // Four channels of noise

// Adds n signals together
add(1, x) = x;
add(n, x) = x + add(n-1, x);
mixer2 = add(4, os.osc(440)); // One channel of four sine oscialltors added together


osc(f, s) = os.triangle(f) * en.ar(0.01, 0.2, ba.beat(120 * s)) : re.mono_freeverb(0.4, 0.4, 0.2, 0.5);

freq = hslider("Frequency", 0.11, 0.08, 0.2, 0.01);

mixer = par(i, 4, osc(440 * (i + 1) * freq, i + 1)) :> _ / 4;

process = mixer * hslider("Gain", 0.4, 0, 1, 0.01);