import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const suggestionSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        existingCategory: {
            type: String
        },
        newCategory: {
            type: String
        },
        newSubCategory: {
            type: String
        },
        obscurity: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        type: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

export default Suggestion;