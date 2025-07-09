import express from 'express';
import { addDoctor,loginAdmin } from '../controller/adminController.js';
import { uploadSingle } from '../middlewares/multer.js';  

const adminRouter = express.Router();

adminRouter.post('/add-doctor', uploadSingle('image'), addDoctor);
adminRouter.post('/login', loginAdmin);

export default adminRouter;
