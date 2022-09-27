import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = new express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
