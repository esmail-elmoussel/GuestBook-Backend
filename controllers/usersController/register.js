const register = (User, bcrypt) => (req, res) => {
  const { username, password } = req.body;

  if (!username.length || !password.length) {
    res.status(400).json({
      msg: "both username & password are required!",
    });
  } else {
    const hash = bcrypt.hashSync(password);
    User.findOne({ username })
      .then((user) => {
        if (user) {
          res.status(400).json({ msg: "Username already exist!" });
        } else {
          User.create({ username, password: hash }).then((newUser) =>
            res.json(newUser)
          );
        }
      })
      .catch(() =>
        res
          .status(500)
          .json({ msg: "an error occurred please try again later" })
      );
  }
};

module.exports = register;
