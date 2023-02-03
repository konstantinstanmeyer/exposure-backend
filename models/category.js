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
            name: String,
            imageUrl: String
        }
    ]
});

const Category = mongoose.model('category', categorySchema);

export default Category;