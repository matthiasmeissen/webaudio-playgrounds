import("stdfaust.lib");

synth(f) = os.osc(f + os.osc(modulatorFreq) * modulatorIndex)
with {
    modulatorFreq = hslider("Modulator Frequency", 220, 20, 400, 1);
    modulatorIndex = hslider("Modulator Index", 0, 0, 400, 1);
};

envelope(t) = en.ar(0.01, 0.1, t);

filter = vgroup("Filter", fi.resonlp(cut, 4, 1))
with {
    cutoff = hslider("Cutoff", 800, 200, 1400, 1);
    modulation = hslider("Modulation", 0, 0, 200, 1);
    amp = hslider("Amplitude", 0, 0, 400, 1);
    cut = cutoff + os.osc(modulation) * amp;
};

sequencer(t) = vgroup("Voice %t", synth(freq) * envelope(trigger) * gain : filter)
with {
    bpm = hslider("BPM %t", 120, 40, 200, 1);
    multiplier = hslider("Multiplier %t", 1 * t, 0.25, 4, 0.25);
    gain = hslider("Gain %t", 0.4, 0, 1, 0.01);

    numNotes = 4;
    trigger = ba.beat(bpm * multiplier);
    noteRange(n) = (60 / t) + n * 2;
    newSlider(n) = hslider("Step %n", noteRange(n), 0, 128, 1) : si.smoo;
    notes = par(i, numNotes, newSlider(i));

    count = trigger : ba.pulse_countup_loop(numNotes - 1, 1);
    freq = ba.listInterp(notes, count) : ba.midikey2hz;
};

process = sequencer(1);