var hints = [{id: "ac561a1systems22a-h1", type: "hint", dependencies: [], title: "Solve", text: "First, solve for y in the second equation.", variabilization: {}}, {id: "ac561a1systems22a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$y=-\\left(x^2\\right)$$"], dependencies: ["ac561a1systems22a-h1"], title: "Solve", text: "What does y equal when it is solved in terms of x in the second equation?", choices: ["$$y=-\\left(x^2\\right)$$", "$$y=x^2$$", "$$y=2x$$", "$$y=-2x$$"], variabilization: {}}, {id: "ac561a1systems22a-h3", type: "hint", dependencies: ["ac561a1systems22a-h1"], title: "Substitute", text: "Next, plug $$y=-\\left(x^2\\right)$$ into the first equation.", variabilization: {}}, {id: "ac561a1systems22a-h4", type: "hint", dependencies: ["ac561a1systems22a-h3"], title: "Simplify", text: "Next, simplify the first equation so that you have one x term. You can add $$x^2$$ to both sides to eliminate it.", variabilization: {}}, {id: "ac561a1systems22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["ac561a1systems22a-h4"], title: "Solve", text: "Solve for x. What does x equal?", variabilization: {}}, {id: "ac561a1systems22a-h6", type: "hint", dependencies: ["ac561a1systems22a-h5"], title: "Substitute", text: "Now, substitute $$x=0$$ into either of the original equations to find y.", variabilization: {}}, {id: "ac561a1systems22a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["ac561a1systems22a-h6"], title: "Solve", text: "What does y equal when $$x=0$$ is plugged in?", variabilization: {}}, {id: "ac561a1systems22a-h8", type: "hint", dependencies: ["ac561a1systems22a-h7"], title: "Answer", text: "The final answer is therefore (0,0).", variabilization: {}}, ]; export {hints};