const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min : 3,
        max : 20
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength:6
    },
    // category: {
    //     type: String,
    //     enum: ["kitchen", "phone", "computer"],
    //     required: true
    // },
    phone: String,
    // color: String,
    // size: String,
    img: String,
    address: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default : true
    }
},{timestamps : true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
