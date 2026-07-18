import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createrdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    require: true,
  },
  createrdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCodeExpiry: Date;
  isverified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    require: [true, "username is required"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    require: [true, "code is required"],
  },
  isverified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema]
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))