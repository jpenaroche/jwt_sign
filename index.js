const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cp = require("child_process");

dotenv.config();
const secret = process.env.SECRET;

return jwt.sign(
  {
    username: "joeadmin",
  },
  secret,
  {
    algorithm: "HS256",
  },
  (error, token) => {
    if (error) return;
    cp.exec(
      `echo "${token}" | pbcopy`,

      function (err, stdout, stderr) {
        console.log(token); // to confirm the application has been run
      }
    );
  }
);
