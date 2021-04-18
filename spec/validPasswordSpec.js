const validPassword = require("../validPassword");

describe("validPassword", () => {
  it("should throw exception if null or empty string", () => {
    expect(function() {
      validPassword('');
    }).toThrowError("You must provide a password");
  });

  it("should throw exception if password doesn't contain a lowercase letter", () => {
    expect(function() {
      validPassword('PASSWORD1');
    }).toThrowError("Your password must contain a lowercase letter");
  });

  it("should return password is OK if password satisfies at least 3 of the 5 conditions", () => {
    // define constants for the validations of passwords that satisfy their respective condition (1, 3 and 5)
    const validCondition1 = validPassword('passwords');
    const validCondition3 = validPassword('Pass');
    const validCondition5 = validPassword('pass1');

    expect(validCondition1).toBe("Password is OK");
    expect(validCondition3).toBe("Password is OK");
    expect(validCondition5).toBe("Password is OK");
  });

  it("should throw exception if password is less than 9 chars", () => {
    expect(function() {
      validPassword('pass');
    }).toThrowError("Your password must be more than 8 characters");
  });

  it("should throw exception if password doesn't contain an uppercase letter", () => {
    expect(function() {
      validPassword('password1');
    }).toThrowError("Your password must contain an uppercase letter");
  });

  it("should throw exception if password doesn't contain a number", () => {
    expect(function() {
      validPassword('PaSsWoRdS');
    }).toThrowError("Your password must contain a number");
  });

  it("should return password is strong if all requirements are met", () => {
    const valid = validPassword('Password1');
    expect(valid).toBe("Password is Strong");
  });
});
