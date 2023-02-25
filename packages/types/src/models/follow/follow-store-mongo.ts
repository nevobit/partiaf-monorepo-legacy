import { Schema } from "mongoose";
import { Follow } from "./follow";

export const FollowStoreSchemaMongo = new Schema<Follow>(
  {
    user: { type: String },
    follow: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
