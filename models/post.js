import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type:String,
            required: true,
        },
        subCategory: {
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
        imageUrl: {
            type: String
        },
        sizing: {
            type: Number,
            min: 1,
            max: 2,
            default: () => Math.floor(Math.random() * 2) + 1
        },
        date: {
            type: Date,
            default: () => Date.now(),
        },
    },
)

const Post = mongoose.model('Post', postSchema);

export default Post;