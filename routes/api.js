const router = require("express").Router();
const Workout = require("../models/workout.js");

//Add exercise
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            //res.status(400).json(err);
            res.json(err);
        });
});

//Create workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            //res.status(400).json(err);
            res.json(err);
        });
});

//Get last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            //res.status(400).json(err);
            res.json(err);
        });
});

//Get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .sort({ date: -1 })
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            //res.status(400).json(err);
            res.json(err);
        });
});

//Delete workouts
router.delete("api/workouts/", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
    });

module.exports = router;