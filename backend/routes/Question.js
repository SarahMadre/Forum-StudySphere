const express = require('express')
const router = express.Router()

const questionDB = require('../models/Question')

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
        })
            .then(() => {
                res.status(201).send({
                    status: true,
                    message: "Qusetion added successfullly",
                });
            })
            .catch((err) => {
                res.status(400).send({
                    status: true,
                    message: "bad format",
                });
            });

    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })

    }
});

router.get('/', async (req, res) => {
    try {
        const questionsWithAnswers = await questionDB.aggregate([
            {
                $lookup: {
                    from: "answers", // collection to join
                    localField: "_id", // field from the 'questions' collection
                    foreignField: "questionId", // field from the 'answers' collection
                    as: "allAnswers" // output array field
                }
            }
        ]);

        // Send the resulting documents
        res.status(200).send(questionsWithAnswers);
    } catch (error) {
        // Handle any errors
        res.status(500).send({
            status: false,
            message: "Unable to get the question details"
        });
    }
});



        module.exports = router
