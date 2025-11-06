import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    github: { type: String },
    liveLink: { type: String },
    isFeatured: { type: Boolean, default: false },
    thumbnail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
