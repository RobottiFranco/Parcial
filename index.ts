import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import products from "./src/routes/products"
import bodyParser from "body-parser"
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/products", products)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
