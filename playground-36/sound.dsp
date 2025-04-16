import("stdfaust.lib");

// The wrap(min, max, in) function takes an input
// and when the input value reaches it max it starts back at the min value

wrap(min_val, max_val, x) = wrapped
with {
    range = max_val - min_val;
    safe_range = max(1e-9, range);
    wrapped = min_val + (x - min_val) - safe_range * floor((x - min_val) / safe_range);
};

freq = hslider("Freq", 400, 20, 2000, 1);

phasor = os.phasor(1.0, freq);

baseDelta = phasor - phasor@1;
delta = wrap(-0.5, 0.5, baseDelta);
deltaToHz = delta * ma.SR;

voice = os.osc(deltaToHz);

process = voice, delta;