import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import schema from "./data/schema";

const PORT = 8080;

const app = express();

app.get("/", (request, response) => {
  //   response.send("GraphQL is amazing!");
  response.send(
    ruruHTML({
      endpoint: "/graphql",
    })
  );
});

const root = {
  product: () => {
    return {
      id: 124567890,
      name: "Widget",
      description: "Beautiful widget to use in the garden",
      price: 34.99,
      soldout: false,
    };
  },
};

app.use(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running server on localhost:${PORT}/graphql`);
});
