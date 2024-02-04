import express from "express";
import {
    registerController, loginController,
    testController, forgotPasswordController,
    updaterProfileController, getOrdersController,
    getAllOrdersController, orderStatusController
}
    from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
export const router = express.Router();

//routing
//register || method post

router.post('/register', registerController)

//login
router.post('/login', loginController)

//forget password
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//protected user routes
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    });
});
//protected admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({
        ok: true
    });
});

//update profile
router.put("/profile", requireSignIn, updaterProfileController);

//orders
router.get('/orders', requireSignIn, getOrdersController);

//admin orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//admin orders
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

export default router