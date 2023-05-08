const express = require("express");
const app = express();
const React = require("react");
const Home = require("./client/components/Home").default;
const renderToString = require("react-dom/server").renderToString;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(4000, () => console.log("app is listining"));
