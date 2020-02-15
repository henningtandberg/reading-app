import BodyParser from "body-parser";
import express, { response } from "express";
import Mongoose from "mongoose";
import Bundler from "parcel-bundler";
import path from "path";
import shortid from "shortid";

Mongoose.connect("mongodb://localhost/reading-app");

const app = express();
const port = 8080 || process.env.PORT;
const ReadModel = Mongoose.model("read", {
    pages: Number,
    time: Number,
});
const TaskModel = Mongoose.model("task", {
    id: String,
    task: String,
    // tslint:disable-next-line: object-literal-sort-keys
    pages: Number,
    complete: Boolean,
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.post("/api/read/session", async (req, res) => {
  try {
    const readModel = ReadModel(req.body);
    const result = await readModel.save();
    console.log({
      api: "/api/read/session",
      method: "POST",
      result,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/read/task", async (req, res) => {
  try {
    const taskModel = TaskModel({
      id: shortid.generate(),
      ...req.body,
    });
    const result = await taskModel.save();
    console.log({
      api: "/api/read/task",
      method: "POST",
      result,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/api/read/task/:id", async (req, res) => {
  try {
    const taskModel = await TaskModel.findOne({id: req.params.id});
    taskModel.complete = !taskModel.complete;
    const result = await taskModel.save();
    console.log({
      api: "/api/read/task/:id",
      method: "PUT",
      result,
    });
    res.status(200).send(taskModel);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/read/tasks", async (req, res) => {
  try {
    const result = await TaskModel.find().exec();
    console.log({
      api: "/api/read/tasks",
      method: "GET",
      result,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/overview", async (req, res) => {
  const body = {
    pagesPerHour: 0,
    pagesPerWeek: 0,
    pagesTotal: 0,
  };

  try {
    const result = await ReadModel.find().exec();
    const totalTime = result.reduce((acc: number, elm: any) => acc + elm.time, 0);
    const totalTimeHours = totalTime / 3600;
    const pagesTotal = result.reduce((acc: number, elm: any) => acc + elm.pages, 0);
    const pagesPerHour = Math.round(pagesTotal / totalTimeHours);
    const pagesPerDay = Math.round(pagesPerHour / 24);
    const pagesPerWeek = Math.round(pagesPerDay / 7);

    console.log({
      api: "/api/overview",
      method: "GET",
      result: {
        totalTime,
        totalTimeHours,
        // tslint:disable-next-line: object-literal-sort-keys
        pagesTotal,
        pagesPerHour,
        pagesPerDay,
        pagesPerWeek,
      },
    });

    res.send({
      pagesTotal,
      // tslint:disable-next-line: object-literal-sort-keys
      pagesPerHour,
      pagesPerDay,
      pagesPerWeek,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// const bundler = new Bundler(path.join(__dirname, "../src/client/index.html"));
const bundler = new Bundler(path.join(__dirname, "../src/client/public/index.html"));
app.use(bundler.middleware());

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
