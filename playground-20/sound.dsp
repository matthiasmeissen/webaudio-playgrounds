import("stdfaust.lib");

voice(t) = vgroup("Voice %t", prod(i, 4, os.osc(freq * (i + 1 + shift))) * env : fi.resonlp(cut, 4, 1))
with {
    shift = hslider("Shift %t",0.2,0,1,0.01);
    bpm = hslider("BPM %t", 120, 40, 200, 1);
    cut = hslider("Cut %t", 800, 200, 1400, 1);
    multiplier = hslider("Multiplier %t", 1 * t, 0.25, 4, 0.25);
    gain = hslider("Gain %t", 0.4, 0, 1, 0.01);

    numNotes = 4;
    speed = ba.beat(bpm * multiplier);
    noteRange(n) = (60 / t) + n * 2;
    newSlider(n) = hslider("Note %n", noteRange(n), 0, 128, 1) : si.smoo;
    notes = par(i, numNotes, newSlider(i));

    count = speed : ba.pulse_countup_loop(numNotes - 1, 1);
    freq = ba.listInterp(notes, count) : ba.midikey2hz;

    env = en.ar(0.01, 0.1, speed) * gain;
};

process = voice(1) + voice(2);