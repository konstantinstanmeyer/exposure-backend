import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        username: {
            type: String,
            required: true,
            max: 15,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        pictureUrl: {
            type: String,
            default: "",
        },
        impact: {
            type: Number,
            default: 0
        },
        posts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Post'
            }
        ],
        admin: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema);

export default User;