import { UserModel } from './security/user.model';
export class StudentModel {
    id?: String;
    code: String;
    document: String;
    name: String;
    lastname: String;
    email: String;
    phone: String;
    career: String;
    user?: UserModel;
}