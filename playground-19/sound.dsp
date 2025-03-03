import("stdfaust.lib");

// Helper: return s if int(i)==n, otherwise 0.
sel(i, s, n) = (int(i)==n) * s;

// Selector for 12 signals.
select12(i, s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11) =
    sel(i, s0, 0) + sel(i, s1, 1) + sel(i, s2, 2) + sel(i, s3, 3) +
    sel(i, s4, 4) + sel(i, s5, 5) + sel(i, s6, 6) + sel(i, s7, 7) +
    sel(i, s8, 8) + sel(i, s9, 9) + sel(i, s10, 10) + sel(i, s11, 11)
;

// Number of notes and beat trigger.
numNotes = 8;
speed = ba.beat(200);

// Base note sliders.
newSlider(n) = hslider("Note %n", 60 + n*2, 0, 128, 1) : si.smoo;
notes = par(i, numNotes, newSlider(i));

// Clock counter for note selection.
count = speed : ba.pulse_countup_loop(numNotes - 1, 1);
freq = ba.listInterp(notes, count) : ba.midikey2hz;

// Scale selection slider (0 to 11):
scaleSelect = hslider("Scale Select", 0, 0, 11, 1);

// Use the helper function to select the appropriate quantized frequency.
quantized = select12(scaleSelect,
                      freq : qu.quantize(440, qu.dimin),
                      freq : qu.quantize(440, qu.dodeca),
                      freq : qu.quantize(440, qu.dorian),
                      freq : qu.quantize(440, qu.eolian),
                      freq : qu.quantize(440, qu.ionian),
                      freq : qu.quantize(440, qu.kumoi),
                      freq : qu.quantize(440, qu.locrian),
                      freq : qu.quantize(440, qu.lydian),
                      freq : qu.quantize(440, qu.mixo),
                      freq : qu.quantize(440, qu.natural),
                      freq : qu.quantize(440, qu.penta),
                      freq : qu.quantize(440, qu.pentanat)
                     );

env = en.ar(0.01, 0.1, speed) * 0.4;
mixer = os.osc(quantized) * env;

process = mixer <: _,_;