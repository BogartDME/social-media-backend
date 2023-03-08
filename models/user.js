const { Schema, Types, model } = require('mongoose');

const usernameSchema = new Schema (
    {
        username: {
            type:String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type:String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thoughts: [
            {
                type: Schema.types.objectId,
                ref: "thought"
            },    
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }    
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

usernameSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});
const user = model("user", userSchema);

module.exports = user;