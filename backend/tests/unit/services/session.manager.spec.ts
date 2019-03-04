import { expect } from "chai";
import "mocha";

import * as SessionManager from "../../../app/services/session.manager";
import { checkFalseReturns, checkNullReturns } from "../../test.helpers";

export function SessionManagerUnitTest() {

  describe("SessionManager Service", function() {
    
    describe("createSession Method", function() {
      it("should return a string when given a string");
      checkNullReturns(SessionManager.createSession);
    });
  
    describe("checkSessionValidity Method", function() {
      it("should return true when given a valid token");
      it("should return false when given random chars");
      checkFalseReturns(SessionManager.checkSessionValidity); 
    });
  
    describe("destroySession Method", function() {
      it("should return true when given a valid token");
      it("should return false when given a previously valid token");
      checkFalseReturns(SessionManager.destroySession);
    });

  });

}
