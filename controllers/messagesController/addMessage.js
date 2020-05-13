const addMessage = (User, Message) => (req, res) => {
  const { content } = req.body;

  User.findById(req.userId)
    .then((user) => {
      Message.create({ username: user.username, content })
        .then((newMessage) => res.json(newMessage))
        .catch(() => res.status(400).json("Message content is requierd!"));
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = addMessage;
