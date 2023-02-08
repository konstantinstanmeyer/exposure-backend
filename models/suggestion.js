import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const suggestionSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        existingCategory: {
            type: String,
            default: null
        },
        newCategory: {
            type: String,
            default: null
        },
        newSubCategory: {
            type: String,
            default: null
        },
        obscurity: {
            type: Number,
            min: 1,
            max: 5,
            default: null
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