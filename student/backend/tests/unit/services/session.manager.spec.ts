import { expect } from "chai";
import "mocha";

import * as SessionManager from "../../../app/services/session.manager";
import { checkFalseReturns, checkNullReturns } from "../../test.helpers";

// tslint:disable: no-unused-expression

export function SessionManagerUnitTest() {

  describe("SessionManager Service", function() {
    
    describe("createSession Method", function() {
      it("should return a string when given a string", function() {
        expect(SessionManager.createSession("123")).to.be.string;
      });

      checkNullReturns(SessionManager.createSession);
    });
  
    describe("checkSessionValidity Method", function() {
      let testToken = SessionManager.createSession("123123");

      it("should return true when given a valid token", function() {
        expect(SessionManager.checkSessionValidity(testToken!)).to.be.true;
      });

      it("should return false when given random chars", function() {
        expect(SessionManager.checkSessionValidity("SUPERCALIFRAGILISTICEXPIALIDOCIOUS")).to.be.false;
      });

      checkFalseReturns(SessionManager.checkSessionValidity); 
    });
  
    describe("destroySession Method", function() {
      let testToken = SessionManager.createSession("123123123");
      
      it("should return true when given a valid token", function() {
        expect(SessionManager.destroySession(testToken!)).to.be.true;
      });
   
      it("should return false when given a previously valid token", function() {
        expect(SessionManager.destroySession(testToken!)).to.be.false;
      });
      
      checkFalseReturns(SessionManager.destroySession);
    });

  });

}
