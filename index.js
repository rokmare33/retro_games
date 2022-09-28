import express from "express";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = new express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.static("public"));
app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/css", express.static(`${__dirname}/public/css`));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
