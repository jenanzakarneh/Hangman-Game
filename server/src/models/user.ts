import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  usename: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, select: false },
  password: { type: String, required: true, select: false },
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("user", userSchema);
