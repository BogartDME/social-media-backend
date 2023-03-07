const { Schema, Types, model } = require('mongoose');
const moment = require('moment')

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 128,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: creationDate => moment(creationDate).format("MM DD YYYY hh:mm:ss"),
        },
        username: {
            type: String,
            required: true,
        },
        },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const thought = model("thought", thoughtSchema);
module.exports = thought;