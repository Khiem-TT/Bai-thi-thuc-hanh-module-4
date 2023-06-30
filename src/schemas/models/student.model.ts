import {Schema, model} from "mongoose";

interface IStudent {
    name: string;
    code: string;
    theory_point: number;
    practical_point: number;
    description: string;
    evaluate: string;
    class: string;
}

const studentSchema = new Schema<IStudent>({
    name: String,
    code: String,
    theory_point: Number,
    practical_point: Number,
    description: String,
    evaluate: String,
    class: String
});

const StudentModel = model<IStudent>('Student', studentSchema);

export {StudentModel};