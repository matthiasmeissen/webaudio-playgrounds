import("stdfaust.lib");

osc = par(i, 4, os.osc(200 * (i + 1))) :> _ * 0.4 * en.ar(0.01, 0.1, ba.beat(120 * 0.4));

delayTime = hslider("Delay Time", 0.2, 0.02, 0.4, 0.01);

// The @ symbold lets you access a sample back in time
// The usage is: _ @ N (_ is the signal, @ says you are going to the past, N is the number of samples)
// With _ @ 1 you access the last sample 
// With _ @ ma.SR which is the sample rate you access the sample one second ago

// This will play the oscillator once and the 500ms later again
delayed = osc + osc @ (ma.SR * 0.5);

// The ~ symbold creates a feedback loop
// It works like this: Input : InputProcessing ~ FeedbackPath
// osc is the input signal
// : feeds it into the recursive structure (InputProcessing ~ FeedbackPath)
// + is the InputProcessing block, combining the external input with the Feedback signal
// _ @ (ma.SR * 0.2) * 0.6 is the Feedback Path (in this case delays by 0.2s and reduce amplituded to 0.6)
// It then feeds it back into the Input Processing
feedback1 = osc : + ~ (_ @ (ma.SR * delayTime) * 0.6);
feedback2 = osc : + ~ (_ @ (ma.SR * (delayTime + delayTime * 0.5)) * 0.6);

process = feedback1, feedback2;