import("stdfaust.lib");

voice(i) = hgroup("Osc %i", os.triangle(freq * (os.osc(mod) * 0.5 + 1)) : fi.resonlp(cut, res, 1))
with {
    freq = hslider("[1] Freq",i,0,2000,0.01) : si.smoo;
    mod = hslider("[2] Mod",20,0,400,0.01) : si.smoo;
    cut = hslider("[3] Cutoff", 600, 50, 8000, 0.01) : si.smoo;
    res = hslider("[4] Resonance", 4, 1, 30, 0.1) : si.smoo;
};

mixer = par(i, 4, voice(400 * (i + 1)) * 0.1);

process = mixer :> _,_;