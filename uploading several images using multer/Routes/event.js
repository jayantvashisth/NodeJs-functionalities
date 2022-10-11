const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload")

const createEvent = require('../Controller/event').createEvent
const getAllEvent = require('../Controller/event').getAllEvent
const deleteEvent = require('../Controller/event').delteEvent
const getEventByid = require('../Controller/event').getEventByid


router.post('/createEvent', upload.fields([{name:'image', maxCount: 1},{name:'sImage', maxCount: 1}, {name:'sPhoto', maxCount: 1}]), createEvent)


router.get('/getAllEvent',getAllEvent)                      //up and working

router.get('/getEventByid/:id',getEventByid)                      //up and working

router.delete('/deleteEvent/:id', deleteEvent)             //up and working








module.exports = router;