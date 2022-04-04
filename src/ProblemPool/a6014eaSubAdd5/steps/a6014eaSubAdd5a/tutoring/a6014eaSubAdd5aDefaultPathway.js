var hints = [{id: "a6014eaSubAdd5a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a6014eaSubAdd5a-h2", type: "hint", dependencies: ["a6014eaSubAdd5a-h1"], title: "Subtraction", text: "After subtracting 37 from each side, we get $$y+37-37=-13-37$$.", variabilization: {}}, {id: "a6014eaSubAdd5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-50"], dependencies: ["a6014eaSubAdd5a-h2"], title: "Simplification", text: "What do we get for y after simplifying the equation?", variabilization: {}}, {id: "a6014eaSubAdd5a-h4", type: "hint", dependencies: ["a6014eaSubAdd5a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a6014eaSubAdd5a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a6014eaSubAdd5a-h4"], title: "Verification", text: "Check whether $$-50+37$$ equals -13.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};