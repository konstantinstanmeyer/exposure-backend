import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        }
    },
    { timestamps: true }
)

const User = mongoose.model('Post', postSchema);

export default User;