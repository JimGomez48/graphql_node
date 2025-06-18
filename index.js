import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (request, response) => {
  response.send("GraphQL is amazing!");
});

app.listen(PORT, () => {
  console.log(`Running server on localhost:${PORT}/graphql`);
});
