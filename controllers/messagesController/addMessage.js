const addMessage = (User, Message) => (req, res) => {
  const { username } = req.params;
  const { content } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (user) {
        Message.create({ username, content })
          .then((newMessage) => res.json(newMessage))
          .catch((err) => res.status(400).json("Message content is requierd!"));
      } else {
        res.status(400).json("please register first!");
      }
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = addMessage;
