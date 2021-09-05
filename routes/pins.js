const router = require("express").Router();
const Pin = require("../models/Pin");

router.post("/", async (req, res) => {
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (rq, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;