import("stdfaust.lib");

reset = button("Reset") : ba.impulsify;
pause = checkbox("Pause");

increment = 1 - pause;

// There are different ways to use the select2() function
// You can either add two signals like this option1, option2 : select2(selector)
// In a function it would look like this: feedback(f) = f , 0.0 : select2(reset);
// But you can also have it all in the select2() function like select2(option1, option2, selector)
feedback(f) = select2(reset, f, 0.0);

// Increment defines the number added each sample which is usually 1 
// When the pause checkbox is checked this becomes 0, which leads to no incrementation
// The feedback part defines what happens in the loop
// Usually the increment is added to the value
// When reset is pressed it sets a short pulse which switches the select2()
// And then sets the value to 0 with ne realtion to any other samples
samples = increment : + ~ feedback(_);

seconds = samples / ma.SR : hbargraph("Seconds", 0.0, 400.0);

loopLength = hslider("Loop Length", 2.0, 1.0, 4.0, 0.1);

loopSeconds = seconds % loopLength : hbargraph("Loop Seconds", 0.0, 4.0);

voice = os.osc(80 + 100 * loopSeconds);

process = voice;