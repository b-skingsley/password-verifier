const validPassword = (password) => {
  // check if the password follows the following verifications:

  // The password should not be null
  if (password === null || password === "") {
    throw new Error("You must provide a password");
  }

  // The password should be larger than 8 chars
  if (password.length <= 8) {
    throw new Error("Your password must be more than 8 characters");
  }

  // The password should have one uppercase letter at least
  if (!/[A-Z]/.test(password)) {
    throw new Error("Your password must contain an uppercase letter")
  }

  // The password should have one lowercase letter at least
  if (!/[a-z]/.test(password)) {
    throw new Error("Your password must contain a lowercase letter")
  }

  // The password should have one number at least
  if (!/[0-9]/.test(password)) {
    throw new Error("Your password must contain a number")
  }
  return true
};

module.exports = validPassword;
