const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    avatar:{
        type:Object,
        contains:{
            url:{
                type: String
            },
            publicId: {
                type: String
            }
        }
    },
    deleted:{
        type: Boolean,
        default: falsee
    }
});

module.exports = User = mongoose.model('Users', UserSchema);