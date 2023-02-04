import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    subs: [
        {
            name: { type: String, required: true },
            imageUrl: { type: String, required: true },
            obscurity: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            }
        }
    ]
});

const Category = mongoose.model('category', categorySchema);

export default Category;