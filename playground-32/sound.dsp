import("stdfaust.lib");

// To multiply or divide a global tempo you would need to create a basePhasor first
// This basePhasor is a continuously rising number
// From there you can create other phasors that multiply the base and use fmod(sig, 1) to warp them
// All those phasors are in sync, since they are related from the basPhasor
// This creates even spaces between the multiples

/*
globalTempo = hslider("[0] BPM", 120, 80, 200, 1) / 60;
slope = globalTempo / ma.SR;
basePhasor = slope : + ~ _;

gatedEnv(i) = en.ar(0.02, 0.1, trigger) with {
    multiplier = hslider("[3] Multiply %i", 1, 0.25, 4.0, 0.25);
    phasor = fmod(basePhasor * multiplier, 1.0);
    delta = phasor - phasor@1;
    trigger = delta < 0;
};
*/

// In this approach we create a basePhasor based in a global Tempo
// But it already wraps between 0 and one
// We then take this wrapping phasor and multiply it to create jet another wrapping between 0 and 1
// This creates uneven spacing between the steps

bpm = hslider("[0] BPM", 120, 80, 200, 1);
hz = bpm / 60;
slope = hz / ma.SR;
basePhasor = fmod(slope : + ~ _, 1.0);

gatedEnv(i) = en.ar(0.02, 0.1, trigger) with {
    mul = hslider("[3] Multiply %i", 1, 0.25, 4.0, 0.25);
    phasor = fmod(basePhasor * mul, 1.0);
    trigger = phasor < phasor@1;
};


voice1 = os.osc(200) * gatedEnv(1) * 0.5;
voice2 = os.osc(400) * gatedEnv(2) * 0.5;

process = voice1, voice2;