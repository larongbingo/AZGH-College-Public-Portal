import "mocha";

import { SessionManagerUnitTest } from "./unit/services/session.manager.spec";

describe("Backend Tests", function() {
  describe("Unit Tests", function() {
    describe("Services", function() {
      SessionManagerUnitTest();
    });
  });
});
