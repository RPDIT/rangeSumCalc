import express from "express";
import controller from "./controller.js";

const app = express();
app.use(express.json());


app.get("/", controller.readMe)
app.get("/calc/:id", controller.getSums)
app.get("/calc/:id/results", controller.getResults);
app.get("/calc/:id/conclusions", controller.getConclusions);

app.listen(9000, () => {
    console.log("Listening on http://localhost:9000");
});

export default app;

