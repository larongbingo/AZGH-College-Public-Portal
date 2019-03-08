import { expect } from "chai";
import "mocha";
import { Op } from "sequelize";

import { Student } from "../../../../app/database/models/student";

// tslint:disable: no-unused-expression

export function StudentModelTests() {
  describe("Student Model", function() {
    let testStudent: Student | null = null;
    
    const USERNAME = "TEST_ACCOUNT";
    const PASSWORD = "TESTACCOUNT";
  
    before(function(done) {
      this.timeout(5000);

      Student.create({username: USERNAME, password: PASSWORD})
      .then((student) => {
        testStudent = student;
        done();
      })
      .catch(done);
    });
  
    after(function(done) {
      this.timeout(5000);

      Student.findOne({where: {username: {[Op.eq]: "TEST_ACCOUNT"}}})
      .then((student) => {
        return student!.destroy()
        .then(() => done());
      })
      .catch(done);
    });

    describe("checkPassword Method", function() {

      it("should return true when given the corect password", function(done) {
        testStudent!.checkPassword(PASSWORD)
        .then((val) => {
          expect(val).to.be.true;
          done();
        })
        .catch(done);
      });

      it("should return false when given incorrect password", function(done) {
        testStudent!.checkPassword("SUPERCALIFRAGILISTICEXPIALIDOCIOUS")
        .then((val) => {
          expect(val).to.be.false;
          done();
        })
        .catch(done);
      });

      it("should return false when given an empty string", function(done) {
        testStudent!.checkPassword("")
        .then((val) => {
          expect(val).to.be.false;
          done();
        })
        .catch(done);
      });

      it("should return false when given a null", function(done) {
        testStudent!.checkPassword(null!)
        .then((val) => {
          expect(val).to.be.false;
          done();
        })
        .catch(done);
      });

      it("should return false when given undefined", function(done) {
        testStudent!.checkPassword(undefined!)
        .then((val) => {
          expect(val).to.be.false;
          done();
        })
        .catch(done);
      });
    });
  });  
}
