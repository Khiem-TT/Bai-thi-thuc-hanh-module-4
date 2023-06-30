import {Router} from "express";
import {StudentController} from "../controllers/student.controller";

const studentRouter = Router();

studentRouter.get('/', StudentController.getListStudent);
studentRouter.get('/studentDetail/:id', StudentController.getStudentDetail);
studentRouter.get('/createStudent', StudentController.getCreateStudentPage);
studentRouter.post('/createStudent', StudentController.createStudent);
studentRouter.get('/updateStudent/:id', StudentController.getUpdateStudentPage);
studentRouter.post('/updateStudent/:id', StudentController.updateStudent);
studentRouter.get('/deleteStudent/:id', StudentController.deleteStudent);

export default studentRouter;