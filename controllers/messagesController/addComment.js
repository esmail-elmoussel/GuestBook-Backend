const addComment = (User, Message) => (req, res) => {
  const { _id } = req.params;
  const { content } = req.body;

  User.findById(req.userId)
    .then((user) => {
      Message.findByIdAndUpdate(
        { _id },
        {
          $push: { comments: { owner: user.username, content } },
        },
        { new: true }
      ).then((data) => {
        if (!data) {
          res.status(404).json({ msg: "message does not exist!" });
        } else {
          res.json(data);
        }
      });
    })
    .catch(() =>
      res.status(500).json({ msg: "an error occurred please try again later!" })
    );
};

module.exports = addComment;
