const validPassword = require("../validPassword");

describe("validPassword", () => {
  it("should throw exception if null or empty string", () => {
    expect(validPassword('').toThrowError("You must provide a password"))
  });

  it("should throw exception if password is less than 9 chars", () => {
    expect(validPassword('pass').toThrowError("Your password must be more than 8 characters"))
  });

  it("should throw exception if password doesn't contain an uppercase letter", () => {
    expect(validPassword('password1').toThrowError("Your password must contain an uppercase letter"))
  });

  it("should throw exception if password doesn't contain a lowercase letter", () => {
    expect(validPassword('PASSWORD1').toThrowError("Your password must contain a lowercase letter"))
  });

  it("should throw exception if password doesn't contain a number", () => {
    expect(validPassword('PaSsWoRdS').toThrowError("Your password must contain a number"))
  });

  it("should return true if password is valid", () => {
    expect(validPassword('Password1').toBe(true))
  });
});
