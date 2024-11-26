import { timeStamp } from "console";
import mongoose , {Document , Schema} from "mongoose";

interface IUser extends Document {
    name: string,
    email : string
}
interface IMessage extends Document {
    content: string,
    sender: mongoose.Types.ObjectId;
}

interface IChat extends Document{
    chatName: string,
    isGroupChat: boolean;
    users: mongoose.Types.ObjectId[];
    latestMessage: mongoose.Types.ObjectId | null;
    groupAdmin: mongoose.Types.ObjectId | null;
}

const ChatSchema = new Schema<IChat>({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const ChatModel = mongoose.model<IChat>('Chat', ChatSchema);

export default ChatModel;

