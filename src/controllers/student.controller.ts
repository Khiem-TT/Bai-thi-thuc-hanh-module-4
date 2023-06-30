import {StudentModel} from "../schemas/models/student.model";

export class StudentController {
    static async getListStudent(req, res) {
        const students = await StudentModel.find();
        res.render('listStudent', {students});
    }

    static async getStudentDetail(req, res) {
        const studentID = req.params.id;
        const student = await StudentModel.findOne({_id: studentID});
        res.render('studentDetail', {student});
    }

    static async getCreateStudentPage(req, res) {
        res.render('createStudent');
    }

    static async createStudent(req, res) {
        const newStudent = new StudentModel(req.body);
        await newStudent.save();
        res.redirect('/');
    }

    static async getUpdateStudentPage(req, res) {
        const studentID = req.params.id;
        const student = await StudentModel.findOne({_id: studentID});
        res.render('updateStudent', {student});
    }

    static async updateStudent(req, res) {
        const studentID = req.params.id;
        const student = await StudentModel.findOne({_id: studentID});
        const {name, classStudent, theory_point, practical_point, evaluate, description} = req.body;
        student.name = name;
        student.class = classStudent;
        student.theory_point = theory_point;
        student.practical_point = practical_point;
        student.evaluate = evaluate;
        student.description = description;
        await student.save();
        res.redirect('/');
    }

    static async deleteStudent(req, res) {
        const studentID = req.params.id;
        await StudentModel.deleteOne({_id: studentID});
        res.redirect('/');
    }
}