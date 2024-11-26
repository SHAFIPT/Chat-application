import mongoose , {Document, Schema} from "mongoose";

interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    image: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true , unique : true },
    password: { type: String, required: true },
    image: { type: String }
}, {
    timestamps: true,
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;

