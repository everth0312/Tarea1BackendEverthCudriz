import { Router } from "express";
import {
    CreateProducts,
    DeleteProducts,
    GetAllProducts,
    UpdateProducts,
} from "./products-controllers.js";

const productsRouter = Router();

productsRouter.get("/", GetAllProducts);

productsRouter.post("/", CreateProducts);

productsRouter.patch("/:id", UpdateProducts);

productsRouter.delete("/:id", DeleteProducts);


export default productsRouter;