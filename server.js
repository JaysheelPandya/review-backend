import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(express.json())

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://a763aea8-c0ec-4729-9eb4-e3ac79d2e521-00-1kutw8f402lxr.riker.replit.dev');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app