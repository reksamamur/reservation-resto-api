import express from "express";
import cors from "cors";

//route
import restaurant from "./api/restaurant.route";
import auth from "./api/auth.route";

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurant", restaurant)
app.use("/api/v1/auth", auth)
app.use("/", (req, res) => res.status(200).json({ message: "Welcome to Reservation Resto API V1" }))
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))

export default app