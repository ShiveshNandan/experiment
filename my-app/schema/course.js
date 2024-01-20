const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    id: {
        type : String,
        require : true
    },
    subject: {
        type : String,
        require : true
    },
    notes : {
        type : Array,
        require : true
    },
    playlist: {
        type : Object,
        require : true
    },
    pyq: {
        type : Object,
        require : true
    },
    book: {
        type : Object,
        require : true
    }
})

module.exports = mongoose.model('Course' , courseSchema)