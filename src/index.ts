import BodyParser from "body-parser";
import express from "express";
import Bundler from "parcel-bundler";
import path from "path";

const app = express();
const port = 8080 || process.env.PORT;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.post("/api/read", async (request, response) => {
  try {
    console.log(request);
    response.status(200).send({message: "POST SUCCESS"});
  } catch (error) {
    response.status(500).send({message: "POST FAILED"});
  }
});

app.get("/api/read", async (request, response) => {
  try {
    response.status(200).send({message: "GET SUCCESS"});
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
