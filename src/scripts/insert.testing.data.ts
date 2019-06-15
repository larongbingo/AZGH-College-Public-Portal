import { name, internet, address } from "faker";
import { generate } from "randomstring";

import { User } from "../shared/database/models/User.entity";
import { UserDetails } from "../shared/database/models/UserDetails.entity";
import { UserAddress } from "../shared/database/models/UserAddress.entity";
import { UserContacts } from "../shared/database/models/UserContacts.entity";
import { UserGuardian } from "../shared/database/models/UserGuardian.entity";
import { Subject } from "../shared/database/models/Subject.entity";
import { programs } from "../shared/constants/azgh.programs";
import { ISubject } from "../shared/interfaces/models/ISubject";
import { Program } from "../shared/database/models/Program.entity";
import { Semester } from "../shared/database/models/Semester.entity";
import { Schedule } from "../shared/database/models/Schedule.entity";
import "../shared/database/sequelize.instance";

const number = 10;

const phoneNumber = () => `+63${generate({charset: "numeric", length: 10})}`;

(async function() {
  try {
    await Promise.all(programs.map(program => Program.create(program)));

    const semCode = `SEM-${generate({charset: "alphanumeric", length: 10})}`;
    await Semester.create({semesterCode: semCode, startingDate: "2018-01-01", endingDate: "2019-12-31"});

    for(let i = 1; i <= number; i++) {
      const details = {
        firstName: name.firstName(),
        middleName: name.lastName(),
        lastName: name.lastName(),
        gender: Math.floor((Math.random() * 200) % 2) === 1 ? "Male" : "Female",
        civilStatus: "Single",
        citizenship: "Filipino",
        dateOfBirth: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`,
        birthPlace: "Imus, Cavite",
        religion: "Catholic"
      };
      
      const credentials = {
        username: internet.userName(details.firstName, details.lastName),
        password: internet.password(8, true),
      };
  
      const addressDetails = {
        streetName: address.streetName(),
        streetNumber: String(Math.random() * 100),
        subdivision: address.secondaryAddress(),
        barangay: address.secondaryAddress(),
        city: address.city(),
        province: "Cavite",
        zipCode: "4103",
      };
  
      const userContacts = {
        emailAddress: internet.email(details.firstName, details.lastName),
        mobileNumber: phoneNumber(),
      };
      
      const userGuardianFirstName = name.firstName();
      const userGuardian = {
        firstName: userGuardianFirstName,
        lastName: details.firstName,
        mobileNumber: phoneNumber(),
        emailAddress: internet.email(userGuardianFirstName, details.lastName),
        occupation: name.jobTitle(),
      };
  
      await Promise.all(programs.map(program => {
        const subject: ISubject = {
          programCode: program.programCode,
          title: `${program.programCode}-${generate({charset: "alphanumeric", length: 20})}`,
          description: "",
          subjectCode: `${program.programCode}-${generate({charset: "alphanumeric", length: 20})}`,
        };
        
        const schedule = {
          subjectCode: subject.subjectCode,
          semesterCode: semCode,
        };

        return Promise.all([Subject.create(subject), Schedule.create(schedule)]);
      }));
  
      const userInstance = await User.create(credentials);
      await Promise.all([
        UserAddress.create({...addressDetails, userId: userInstance.userId}),
        UserContacts.create({...userContacts, userId: userInstance.userId}),
        UserDetails.create({...details, userId: userInstance.userId}),
        UserGuardian.create({...userGuardian, userId: userInstance.userId}),  
      ]);
    }
  }
  catch(err) {
    console.log(err);
    process.exit(1);
  }

  process.exit(0);
})();
