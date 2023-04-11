import express, { Express, urlencoded, json } from "express";
import corsMiddleware from "@config/cors";
import router from "@routes/index";

const app: Express = express();

app.use(corsMiddleware, urlencoded({ extended: true }), json());

app.use(router);

export default app;
