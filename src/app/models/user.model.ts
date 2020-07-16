export class UserModel{
    id?: String;
    username: String;
    password?: String;
    role?: number;
    studentId?: String;
    isLogged: Boolean = false;
    token?: String;
}