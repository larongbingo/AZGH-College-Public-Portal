import { Sequelize } from "sequelize-typescript";

import { AssignedInstructors } from "./models/AssignedInstructors.entity";
import { Curriculum } from "./models/Curriculum.entity";
import { Log } from "./models/Log.entity";
import { Program } from "./models/Program.entity";
import { Room } from "./models/Room.entity";
import { Schedule } from "./models/Schedule.entity";
import { StudentSchedule } from "./models/StudentSchedule.entuty";
import { Subject } from "./models/Subject.entity";
import { User } from "./models/User.entity";
import { UserAddress } from "./models/UserAddress.entity";
import { UserContacts } from "./models/UserContacts.entity";
import { UserDetails } from "./models/UserDetails.entity";
import { UserGuardian } from "./models/UserGuardian.entity";
import { UserPreviousSchool } from "./models/UserPreviousSchool.entity";

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
