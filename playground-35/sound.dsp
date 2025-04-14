import("stdfaust.lib");

// The rampStep function takes a frequency as input and creates three outputs
// It also has generates two input elements S (Shift) and N (Steps)
// Output 1: Phasor from 0-1, where cycle is offset by S input
// Output 2: N steps within one cycle of the phasor
// Output 3: N ramps within one cycle of the phasor

bpm = hslider("BPM", 120, 40, 200, 1) / 60;
freq = hslider("Freq", 400, 20, 2000, 1);

rampSteps(fr, i) = phasor, steps, ramp
with {
    st = hslider("Steps %i", 4, 1, 16, 1);
    sh = hslider("Shift %i", 0, 0, 1, 0.01);
    phasor = fmod(os.phasor(1.0, fr) + sh, 1.0);
    steps = floor(phasor * st) / st;
    ramp = fmod(phasor * st, 1.0);
};

rs1 = rampSteps(bpm, 1);
rs1Steps = rs1 : select3(1);
rs1Freq = rs1 : select3(0);

voice1 = par(i, 4.0, os.osc(400 + (i * 100) + (rs1Steps * 100))) :> _ : fi.resonlp(800 - (400 * rs1Freq), 4, 1) * 0.2;

rs2 = rampSteps(bpm, 2);
rs2Steps = rs2 : select3(1);
rs2Freq = rs2 : select3(0);

voice2 = par(i, 4.0, os.osc(freq + (i * 100) + (rs2Steps * freq/4))) :> _ : fi.resonlp(800 - (400 * rs2Freq), 4, 1) * 0.2;

process = voice1, voice2;