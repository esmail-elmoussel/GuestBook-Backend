const deleteMessage = (User, Message) => (req, res) => {
  const { _id } = req.params;

  User.findById(req.userId)
    .then((user) => {
      Message.findById(_id).then((msg) => {
        if (!msg) {
          res.status(404).json("message doesn't exist!");
        } else if (msg.username !== user.username) {
          res.status(403).json("user can't delete others messages!");
        } else {
          Message.findOneAndDelete({ _id }).then((deletedMessage) => {
            res.json(deletedMessage);
          });
        }
      });
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = deleteMessage;
