const updateMessage = (Message) => (req, res) => {
  const { _id } = req.params;
  const { content } = req.body;

  Message.findOneAndUpdate({ _id }, { content }, { new: true })
    .then((updatedMessage) => {
      if (updatedMessage) {
        res.json(updatedMessage);
      } else {
        res.status(404).json("message doesn't exist!");
      }
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = updateMessage;
