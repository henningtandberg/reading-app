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
    pages: Number,
    complete: Boolean,
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.post("/api/read/session", async (request, response) => {
  try {
    const readModel = ReadModel(request.body);
    const result = await readModel.save();
    console.log({
      api: "/api/read/session",
      method: "POST",
      result,
    });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/api/read/task", async (request, response) => {
  try {
    const taskModel = TaskModel({
      id: shortid.generate(),
      ...request.body,
    });
    const result = await taskModel.save();
    console.log({
      api: "/api/read/task",
      method: "POST",
      result,
    });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/api/read/task/:id", async (request, response) => {
  try {
    const taskModel = await TaskModel.findOne({id: request.params.id});
    taskModel.complete = !taskModel.complete;
    const result = await taskModel.save();
    console.log({
      api: "/api/read/task/:id",
      method: "PUT",
      result,
    });
    response.status(200).send(taskModel);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/read/tasks", async (request, response) => {
  try {
    const result = await TaskModel.find().exec();
    console.log({
      api: "/api/read/tasks",
      method: "GET",
      result,
    });
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/overview", async (request, response) => {
  const body = {
    pagesPerHour: 0,
    pagesPerWeek: 0,
    pagesTotal: 0,
  };

  try {
    const result = await ReadModel.find().exec();
    const totalTime = result.reduce((acc: number, res: any) => acc + res.time, 0);
    const totalTimeHours = totalTime / 3600;
    const totalPages = result.reduce((acc: number, res: any) => acc + res.pages, 0);
    const pagesPerHour = totalPages / totalTimeHours;
    const pagesPerDay = pagesPerHour / 24;
    const pagesPerWeek = pagesPerDay / 7;

    console.log({
      api: "/api/overview",
      method: "GET",
      result: {
        totalTime,
        totalTimeHours,
        totalPages,
        pagesPerHour,
        pagesPerDay,
        pagesPerWeek,
      }
    });

    response.send({
      totalPages,
      pagesPerHour,
      pagesPerDay,
      pagesPerWeek,
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

const bundler = new Bundler(path.join(__dirname, "../src/client/index.html"));
app.use(bundler.middleware());

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
