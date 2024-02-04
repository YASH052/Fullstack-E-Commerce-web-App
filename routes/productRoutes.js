import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
    createProductController, deleteProductController,
    getProductController, getSingleProductController,
    productCountController,
    productFilterController, productListController, productPhotoController,
    searchProductController,
    updateProductController,
    productCategoryController,
    relatedProductController,
    braintreeTokenController,
    brainTreePaymentController,
} from "../controllers/productController.js"
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);
// get all products
router.get("/get-product", getProductController);

//getsingle product
router.get("/get-product/:slug", getSingleProductController);

//getphoto
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post('/product-filters', productFilterController)

//product count 
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//product filter on seach
router.get('/search/:keyword', searchProductController)

//similiar products
router.get('/related-product/:pid/:cid', relatedProductController)


//CategorywiseProduct
router.get('/product-category/:slug', productCategoryController)

//payments routes
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree-payment', requireSignIn, brainTreePaymentController)

export default router