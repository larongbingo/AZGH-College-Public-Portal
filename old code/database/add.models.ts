import { Sequelize } from "sequelize-typescript";

import { AssignedInstructors } from "./models/AssignedInstructors";
import { Curriculum } from "./models/Curriculum";
import { Log } from "./models/Log";
import { Program } from "./models/Program";
import { Room } from "./models/Room";
import { Schedule } from "./models/Schedule";
import { StudentSchedule } from "./models/StudentSchedule";
import { Subject } from "./models/Subject";
import { User } from "./models/User";
import { UserAddress } from "./models/UserAddress";
import { UserContacts } from "./models/UserContacts";
import { UserDetails } from "./models/UserDetails";
import { UserGuardian } from "./models/UserGuardian";
import { UserPreviousSchool } from "./models/UserPreviousSchool";

export function addModels(sequelize: Sequelize) {
  sequelize.addModels([
    AssignedInstructors,
    Curriculum,
    Log,
    Program,
    Room,
    Schedule,
    StudentSchedule,
    Subject,
    User,
    UserAddress,
    UserContacts,
    UserDetails,
    UserGuardian,
    UserPreviousSchool,
  ]);
}
