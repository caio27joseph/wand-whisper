import mongoose, { Schema, Model, model } from "mongoose";

export interface Attribute {
  name: string;
  description?: string;
}

const AttributeSchema = new Schema<Attribute>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this attribute."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Ensure the model is only compiled once (to avoid issues during hot reload in development)
const AttributeModel: Model<Attribute> =
  mongoose.models.Attribute || model<Attribute>("Attribute", AttributeSchema);

export default AttributeModel;
