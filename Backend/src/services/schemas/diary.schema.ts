import {Schema} from 'mongoose';

const diarySchema = new Schema({
    title: {type:String, required:true},
    date: {type: Date, default: Date.now, required:true},
    description: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, ref:'Users', required:true}
});

export default diarySchema;