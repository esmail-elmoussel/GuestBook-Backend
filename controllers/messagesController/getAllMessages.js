const getAllMessages = (Message) => (req, res) => {
  Message.find({})
    .sort({ date: -1 })
    .then((messages) => res.json(messages))
    .catch(() =>
      res.status(500).json({ msg: "an error occurred please try again later!" })
    );
};

module.exports = getAllMessages;
