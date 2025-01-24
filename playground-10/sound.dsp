import("stdfaust.lib");

speed = hslider("Speed", 120, 80, 400, 1);
multiplier = hslider("Multiplier", 2.4, 0.1, 4, 0.01);
range = hslider("Range", 8, 2, 20, 1);

// Long way to write
trig = ba.beat(speed);
count1 = ba.counter(trig);
wrappedCount = count % 4;
freq1 = (wrappedCount + 1) * 100;

// Shorter way to write
count2 = ba.beat(speed) : ba.counter;
freq2 = (count2 % 4 + 1) * 100;

countRange = ba.beat(speed * multiplier) : (ba.counter % range + 1);

freq = ba.beat(speed) : (ba.counter % countRange + 1) * 100;

quantizer1 = freq : qu.quantize(440, qu.kumoi);
quantizer2 = freq * 1.2 : qu.quantize(369, qu.kumoi);

osc1 = os.osc(quantizer1);
osc2 = os.triangle(quantizer2);

mixer = (osc1 + osc2) / 2;

gain = 0.4;

process = mixer * gain <: _,_;