import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategorie } from "./app/useCases/categories/createCategorie";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProducts";
import { listProducts } from "./app/useCases/products/listProducts";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategories";
import { listOrders } from "./app/useCases/orders/listOrdes";
import { createOrder } from "./app/useCases/orders/createOrder";
import { createOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { deleteCategories } from "./app/useCases/categories/deleteCategories";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
}); //change to s3

//List
router.get("/categories", listCategories);

//Create
router.post("/categories", createCategorie);

//Delete
router.delete("/categories/:categoryId", deleteCategories);

//List products
router.get("/products", listProducts);

//create products
router.post("/products", upload.single("image"), createProduct);

//Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

//List orders
router.get("/orders", listOrders);

//Create order
router.post("/orders", createOrder);

//Change order status
router.patch("/orders/:orderId", createOrderStatus);

//Delete/cancel order
router.delete("/orders/:orderId", cancelOrder);
