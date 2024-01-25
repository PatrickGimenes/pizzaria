import dotenv from "dotenv";
import { App } from "./app";

const PORT = process.env.PORT || "3333";
const app = new App();

app.listen(PORT);
