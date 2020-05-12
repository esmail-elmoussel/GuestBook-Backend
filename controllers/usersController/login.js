const login = (User, bcrypt) => (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.status(400).json("Username does not exist!");
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          res.json(user);
        } else {
          res.status(400).json("Wrong Password!");
        }
      }
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = login;
