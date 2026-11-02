
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 1
        },

        course: {
            type: String,
            required: true,
            trim: true
        },

        enrollmentNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
