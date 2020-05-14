const updateMessage = (User, Message) => (req, res) => {
  const { _id } = req.params;
  const { content } = req.body;

  User.findById(req.userId)
    .then((user) => {
      Message.findById(_id).then((msg) => {
        if (!msg) {
          res.status(404).json({ msg: "message doesn't exist!" });
        } else if (msg.username !== user.username) {
          res.status(403).json({ msg: "user can't edit others messages!" });
        } else {
          Message.findOneAndUpdate({ _id }, { content }, { new: true }).then(
            (updatedMessage) => {
              res.json(updatedMessage);
            }
          );
        }
      });
    })
    .catch(() =>
      res.status(500).json({ msg: "an error occurred please try again later!" })
    );
};

module.exports = updateMessage;
