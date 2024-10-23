const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    //     answers: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref:"Answers",
    //     },
    // });

    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer", // Ensure this matches the Answer model name
    }],
});
module.exports = mongoose.model("Questions", QuestionSchema);
