const register = (User, bcrypt) => (req, res) => {
  const { username, password } = req.body;

  if (!username.length && !password.length) {
    res.status(400).json("both username & password are required!");
  } else {
    const hash = bcrypt.hashSync(password);
    User.findOne({ username })
      .then((user) => {
        if (user) {
          res.status(400).json("Username already exist!");
        } else {
          User.create({ username, password: hash }).then((newUser) =>
            res.json(newUser)
          );
        }
      })
      .catch(() =>
        res.status(500).json("an error occurred please try again later")
      );
  }
};

module.exports = register;
