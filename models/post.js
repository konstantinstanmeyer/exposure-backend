import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        genre: {
            type:String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            default: () => Date.now(),
        },
    },
)

const Post = mongoose.model('Post', postSchema);

export default Post;