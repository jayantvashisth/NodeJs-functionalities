const Events = require('../Schema/Events')


exports.createEvent = async (req, res) => {

    try {

        const { title, date, timings, description, whyThisEvent, sName, sDesignation, sLinkedIn } = req.body;
        const speaker = {
            name: sName,
            designation: sDesignation,
            linkedIn: sLinkedIn,
            image: "",
            photo: ""
        }
        const event = new Events({
            title, date, timings, description, whyThisEvent, speaker
        })
        // console.log(req)
        if (req.files) {
            event.image = req.files.image[0].path
            event.speaker.image = req.files.sImage[0].path
            event.speaker.photo = req.files.sPhoto[0].path
            // console.log(req.files)
            // event.speaker[image] = req.files.speaker[image].path
            // console.log(req.files.speaker[image].path)
            // event.speaker[photo] = req.files.speaker[photo][0].path
        }

        const saveEvent = await event.save();
        res.json(saveEvent)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error")
    }

}


exports.getAllEvent = async (req, res) => {
    try {
        const events = await Events.find({});     //up and working
        res.status(200).json(events)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


exports.delteEvent = async (req, res) => {                 //up and working
    try {
        let event = await Events.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        event = await Events.findByIdAndDelete(req.params.id)
        res.status(200).json({ "Success": "Event have been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


exports.getEventByid = async (req, res) => {                 //up and working
    try {
        let event = await Events.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        res.status(200).json(event);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


exports.updateEventById = async (req, res) => {         //up and working

    try {
        const { title, date, timings, description, whyThisEvent, sName, sDesignation, sLinkedIn } = req.body;
        
        let event = await Events.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }
        

        event.title = title
        event.Date = date
        event.timings = timings
        event.description = description
        event.whyThisEvent = whyThisEvent
        event.speaker.name = sName
        event.speaker.designation = sDesignation
        event.speaker.linkedIn = sLinkedIn

        if (req.files) {
            event.image = req.files.image[0].path
            event.speaker.image = req.files.sImage[0].path
            event.speaker.photo = req.files.sPhoto[0].path
        }

        event = await Events.findByIdAndUpdate(req.params.id, { $set: event }, { new: true })
        res.json({ event });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}




