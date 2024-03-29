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

    expect(validCondition1).toBe("Password is OK, satisfy all conditions for Strong password");
    expect(validCondition3).toBe("Password is OK, satisfy all conditions for Strong password");
    expect(validCondition5).toBe("Password is OK, satisfy all conditions for Strong password");
  });

  it("should throw exception if password doesn't satisfy at least 3 of the 5 conditions", () => {
    expect(function() {
      validPassword('pass');
    }).toThrowError("Your password must satisfy at least 3 conditions");
  });

  it("should return password is strong if all requirements are met", () => {
    const valid = validPassword('Password1');
    expect(valid).toBe("Password is Strong");
  });
});
