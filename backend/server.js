import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config()

app.use(express.json())
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hellow")
})

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT} `);
})