const mongoose = require(`mongoose`);
const {Schema}=mongoose;
const RevenueSchema = new Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    amount:{
        type:Number,
        required: true
    },
    dateReceived:{
        type:Date,
        default:Date.now
    }

})

const Revenue=mongoose.model(`revenue`,RevenueSchema);

module.exports= Revenue;