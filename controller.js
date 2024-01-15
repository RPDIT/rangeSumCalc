import RecEngine from "./models/recursion.js";
import markdownit from "markdown-it";
import {readFile} from "fs";

const md = markdownit();

function sums(times) {
    const engine = new RecEngine();
    engine.callLoop(times, engine.forConstructor, engine.forData);
    engine.callLoop(times, engine.recConstructor, engine.recData);
    engine.checkData();
    engine.conclusions()
    return engine
}

const  getSums = (req, res) => {
    let times = parseInt(req.params.id);
    let engine = sums(times);
    res.status(200).json([engine.forData,engine.recData,engine.analysis]);
}

const getResults = (req, res) => {
    let times = parseInt(req.params.id);
    let engine = sums(times);
    res.status(200).json(engine.results);
}
const getConclusions = (req, res) => {
    let times = parseInt(req.params.id);
    let engine = sums(times);
    res.status(200).send(engine.conclusion);
}

const readMe = (req, res) => {
    readFile('./README.md', 'utf-8',(err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(md.render(data));
        };
    })
}


export default {
    getSums,
    getResults,
    getConclusions,
    readMe
}