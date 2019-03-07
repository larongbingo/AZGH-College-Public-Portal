import "mocha";

import "../app/database/orm";

import { StudentModelTests } from "./unit/database/models/student.spec";
import { SessionManagerUnitTest } from "./unit/services/session.manager.spec";

describe("Backend Tests", function() {
  describe("Unit Tests", function() {

    describe("Database/Models Tests", function() {
      StudentModelTests();
    });

    describe("Services", function() {
      SessionManagerUnitTest();
    });

  });
});
