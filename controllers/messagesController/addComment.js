const addComment = (User, Message) => (req, res) => {
  const { _id } = req.params;
  const { username, content } = req.body;

  User.findOne({ username }).then((user) => {
    if (!user) {
      res.status(404).json("user does not exist!");
    } else {
      Message.findOneAndUpdate(
        { _id },
        {
          $push: { comments: { username, content } },
        },
        { new: true }
      )
        .then((data) => {
          if (!data) {
            res.status(404).json("message does not exist!");
          } else {
            res.json(data);
          }
        })
        .catch(() =>
          res.status(500).json("an error occurred please try again later!")
        );
    }
  });
};

module.exports = addComment;
