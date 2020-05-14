const addMessage = (User, Message) => (req, res) => {
  const { content } = req.body;

  User.findById(req.userId)
    .then((user) => {
      Message.create({ username: user.username, content })
        .then((newMessage) => res.json(newMessage))
        .catch(() =>
          res.status(400).json({ msg: "Message content is requierd!" })
        );
    })
    .catch(() =>
      res.status(500).json({ msg: "an error occurred please try again later!" })
    );
};

module.exports = addMessage;
