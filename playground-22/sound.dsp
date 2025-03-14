declare options "[midi:on][nvoices:12]";
import("stdfaust.lib");

// You need to set the poly voice in the faust ide to one or more
// Otherwise for the midi keyboard wont work properly

// You can press a key on the keayboar to trigger a midi note
// With x you get up one octave and with z you go down one octave
// The keyboard layout is similar to that of a piano 
// With the row including a being white keys and the row including w being black keys

synth(f) = os.osc(f + os.osc(modulatorFreq) * modulatorIndex)
with {
    modulatorFreq = hslider("Modulator Frequency", 220, 20, 400, 1);
    modulatorIndex = hslider("Modulator Index", 0, 0, 400, 1);
};

envelope(t) = en.adsr(0.01, 0, 1, 0.1, t);

freq = hslider("freq",200,50,1000,0.01);
gain = hslider("gain",0.4,0,1,0.01);
gate = button("gate");

process = synth(freq) * envelope(gate) * gain;