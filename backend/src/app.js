import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import blogRoutes from "./routes/blog.routes.js"
import projectRoutes from "./routes/project.routes.js"
import authRoutes from "./routes/auth.routes.js"
import contactRoutes from "../routes/contact.js"

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Test Routes for testing purpose yo
app.get("/",(req,res) =>{
    res.send("Portfolio API is running...");
})

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

export default app;