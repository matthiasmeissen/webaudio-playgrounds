import("stdfaust.lib");

freq = hslider("Freq", 1, 0.1, 4, 0.01);

phasor = os.phasor(1.0, freq);

// Subtracts the current value of the phasor, with the value in the last sample
// This is most of the time a positive value close to zero
// But when the phasor wraps from 1 to 0 it creates a large negative value
// We detect this in the trigger function, which returns true or one for one sample
delta = phasor - phasor@1;
trigger = delta < 0;

voice = par(i, 4, os.osc(400 + (i * freq * 100))) :> _ * en.ar(0.1, 0.02, trigger);

process = voice;