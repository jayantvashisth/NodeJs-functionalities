const mongoose = require('mongoose');
const { Schema } = mongoose;

const SpeakersSchema = new Schema({
    name:{
        type: String,
        default:"General"
    },
    designation:{
        type: String,
        default:"General"
    },
    photo:{
        type:String,
        default:"photo here"
    },
    image:{
        type:String,
        default:"General"
    },
    linkedIn:{
        type:String,
        default :"General"
    }
});


const EventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    timings: {
        type: String
    },
    description: {
        type: String,
        default: "General"
    },
    whyThisEvent: {
        type: String,
        default: "General"
    },
    image: {
        type: String,
        default: "General"
    },
    speaker: SpeakersSchema
})

module.exports = mongoose.model('events', EventsSchema);
