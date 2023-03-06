const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 128,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        
    }
    
)