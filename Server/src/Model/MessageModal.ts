import mongoose, {  Document, mongo, Schema } from "mongoose";
import { monitorEventLoopDelay } from "perf_hooks";

interface IMessage extends Document{
    sender : mongoose.Types.ObjectId | null;
    content : string
    chat : mongoose.Types.ObjectId | null;
}


const messageSchema = new Schema<IMessage>({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content : {type : String , trim : true},
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
}, {
    timestamps : true,
})

const messageModel = mongoose.model<IMessage>('Message', messageSchema);

export default messageModel