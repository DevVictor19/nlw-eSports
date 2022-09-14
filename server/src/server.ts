import express from "express";

const app = express();

app.get("/games", (resquest, response) => {
  return response.json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (request, response) => {
  const gameId = request.params.id;

  return response.send(gameId);
});

app.get("/ads/:id/discord", (request, response) => {
  const addId = request.params.id;

  return response.send(addId);
});

app.listen(3333);
