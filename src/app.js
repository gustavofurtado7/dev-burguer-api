import express from "express";
import routes from "./routes.js";
import fileRouteConfig from "./config/fileRoutes.cjs";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/product-file", fileRouteConfig);
app.use("/category-file", fileRouteConfig);

app.use(routes);

app.use((err, _req, res, _next) => {
  console.log(err);

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      error: "Error in the submitted JSON",
      message: "Check the JSON syntax and try again.",
    });
  }

  return res.status(500).json({
    error: "Erro interno do servidor.",
    message: err.message,
  });
});

export default app;
