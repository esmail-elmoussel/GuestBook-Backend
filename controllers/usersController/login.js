const login = (User, bcrypt, jwt, config) => (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.status(400).json({ msg: "Username does not exist!" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ id: user._id }, config.secret);
          res.json({ auth: true, token: token, userData: user });
        } else {
          res.status(400).json({ msg: "Wrong Password!" });
        }
      }
    })
    .catch(() =>
      res.status(500).json({ msg: "an error occurred please try again later!" })
    );
};

module.exports = login;
