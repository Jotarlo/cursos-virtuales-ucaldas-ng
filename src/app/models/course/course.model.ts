import { AreaModel } from '../parameters/area.model';
import { FacultyModel } from '../parameters/faculty.model';
export class CourseModel {
    id?: String;
    code: String;
    name: String;
    description: String;
    professor: String;
    rate: number;
    duration: number;
    image: String;
    areaId: String;
    facultyId: String;
    area: AreaModel;
    faculty: FacultyModel;
}