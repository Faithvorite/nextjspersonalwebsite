import mongoose from "mongoose";

const PaintingSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: false,
        maxlength: 60,
    },
    year:{
        type: Number, 
        required: false,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: false,
        maxlength: 200
    },
    img: {
        type: String,
        required: false,
    },
    prices: {
        type: [Number],
        required: false,
    },
    extraOptions: {
        type: [
            {
                text:{type:String, required: false}, 
                price: {type:Number,required:false}
            },
        ],
    },

},
{ timestamps: true}
);

export default mongoose.models.Painting || 
mongoose.model("Painting", PaintingSchema);