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
    response.status(500).send({message: "POST FAILED"});
  }
});

app.get("/api/overview", async (request, response) => {
  try {
    const result = await ReadModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send({message: "GET FAILED"});
  }
});

const bundler = new Bundler(path.join(__dirname, "../src/client/index.html"));
app.use(bundler.middleware());

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
