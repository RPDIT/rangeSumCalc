import express from "express";
import RecEngine from "./recursion.js";
import markdownit from "markdown-it";
import {readFile} from "fs";

const md = markdownit();
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    readFile('./README.md', 'utf-8',(err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(md.render(data));
        };
    })
    
})

app.get("/:id", (req, res) => {
    const engine = new RecEngine();
    let times = parseInt(req.params.id);
    engine.callFor(times);
    engine.callRec(times);
    engine.checkData();
    res.status(200).json([engine.forData,engine.recData,engine.analysis]);
})

app.listen(9000, () => {
    console.log("Listening on http://localhost:9000");
});

export default app;

