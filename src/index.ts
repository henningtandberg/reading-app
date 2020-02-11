import BodyParser from "body-parser";
import express from "express";
import Mongoose from "mongoose";
import Bundler from "parcel-bundler";
import path from "path";

Mongoose.connect("mongodb://localhost/reading-app");

const app = express();
const port = 8080 || process.env.PORT;
const ReadModel = Mongoose.model("read", {
    pages: Number,
    time: Number,
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.post("/api/read", async (request, response) => {
  try {
    console.log(request.body);
    const readModel = ReadModel(request.body);
    const result = await readModel.save();
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
    const totalTimeDays = totalTimeHours / 24;
    const totalTimeWeeks = totalTimeDays / 7;

    const totalPages = result.reduce((acc: number, res: any) => acc + res.pages, 0);
    const pagesPerHour = totalPages / totalTimeHours;
    const pagesPerDay = pagesPerHour / 24;
    const pagesPerWeek = pagesPerDay / 7;

    console.log({
      totalTime,
      totalTimeHours,
      totalTimeDays,
      totalTimeWeeks,
      totalPages,
      pagesPerHour,
      pagesPerDay,
      pagesPerWeek,
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
