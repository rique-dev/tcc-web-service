import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    function: String,
    role: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model('User', UserSchema);