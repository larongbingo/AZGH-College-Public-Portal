import { Sequelize } from "sequelize-typescript";

import { Guardian } from "./models/guardian";
import { Log } from "./models/log";
import { Program } from "./models/program";
import { Student } from "./models/student";
import { StudentContact } from "./models/student.contact";
import { StudentDetails } from "./models/student.details";
import { StudentSchoolBackground } from "./models/student.school.background";

export function addModels(sequelize: Sequelize) {
  sequelize.addModels([
    Guardian,
    Log,
    Program,
    StudentContact,
    StudentDetails,
    StudentSchoolBackground,
    Student,
  ]);
}
