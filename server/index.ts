import fs from "fs";

// json file with the data
const data = fs.readFileSync("data.json");

const elements = JSON.parse(data.toString());
import express from "express";
const app = express();

// To solve the cors issue
import cors from "cors";

app.listen(process.env.PORT, () => console.log("Server Start at the Port"));

app.use(express.static("public"));
app.use(cors());

// when get request is made, alldata() is called
app.get("/elements", alldata);

function alldata(request, response) {
  // Returns all information about the elements
  response.send(elements);
}

app.get("/elements/:element/", searchElement);

function searchElement(request, response) {
  let word = request.params.element;
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  let reply;

  if (elements[word]) {
    reply = elements[word];
  } else {
    reply = {
      status: "Not Found",
    };
  }

  response.send(reply);
}
