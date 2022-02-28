const bcrypt = require("bcrypt");

// To hash a password we need a salt.
// What is salt?
// Imagine our password is "1234" and hash that and we will get his "abcd".
// hash algorithm is one way so if we dcrypt "abcd" will not get 1234.
// however hacker can compile list of popular passwords and hash them and
// compair with our db password and they know abcd  is 1234.
// that's why we need salt. Salt is basically random string that is added
// before or after a password so the resulting hash password is different each
// time based on salt that is used.
const run = async () => {
  const salt = await bcrypt.genSalt(12); // 12 is no of round to generate the salt. if the number is
  // greater than it takes more time.

  const hash = await bcrypt.hash("12345", salt);

  console.log(salt);
  console.log(hash);
  // salt is included in a hash password so later when we want to authenticate user
  // we wanna validate username and password. so there the user send plantext password
  // we need to hash it again but we need to have to origin salt that was use to generate thsi hash
  // during comparing the plantext password with the hash password bcrypt need to know
  // the orginal salt that was used to hash this password.
};

run();
