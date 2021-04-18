const validPassword = (password) => {
  // We want to implement:
  // - Password is OK if at least 3 of the initial 5 conditions is true
  // - Password is never OK if item 4 is not true.
  // If the password satisfies any of the conditions then it cannot be null, so the password must always satisfy not being null to be OK
  // So if the password satisfies at least one of items 1, 3 or 5 then it will be OK

  // check if the password follows the following verifications:

  // 2. The password should not be null
  if (password === null || password === "") {
    throw new Error("You must provide a password");
  }

  // 1. The password should be larger than 8 chars
  if (password.length <= 8) {
    throw new Error("Your password must be more than 8 characters");
  }

  // 3. The password should have one uppercase letter at least
  if (!/[A-Z]/.test(password)) {
    throw new Error("Your password must contain an uppercase letter")
  }

  // 4. The password should have one lowercase letter at least
  if (!/[a-z]/.test(password)) {
    throw new Error("Your password must contain a lowercase letter")
  }

  // 5. The password should have one number at least
  if (!/[0-9]/.test(password)) {
    throw new Error("Your password must contain a number")
  }

  // If the password passes all verifications we return true
  return true
};

module.exports = validPassword;
