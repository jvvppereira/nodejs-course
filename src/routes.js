const express = require("express");
const routes = express.Router();
const productController = require('./controllers/productController')

routes.get("/products", productController.index);
routes.post("/products", productController.store);
routes.get("/products/:id", productController.show);
routes.put("/products/:id", productController.update);
routes.delete("/products/:id", productController.destroy);

module.exports = routes;