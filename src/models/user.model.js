const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please fill your email"],
        unique: [true, "Email already exists"],
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, "Please fill your name"],
    },
    password: {
        type: String,   
        required: [true, "Please fill your password"],
        minlength: [6, "Password must be at least 6 characters long"],
        select: false // Exclude password from query results by default
    }
}, {
    timestamps: true
});
    
userSchema.pre('save', async function() {
    if (!this.isModified('password')) {
        return ;
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return;
});

userSchema.methods.comparePassword = async function(Password) {
    return await bcrypt.compare(Password, this.password);
}

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
