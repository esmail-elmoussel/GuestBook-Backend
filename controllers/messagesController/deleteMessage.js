const deleteMessage = (Message) => (req, res) => {
  const { _id } = req.params;

  Message.findOneAndDelete({ _id })
    .then((deletedMessage) => {
      if (deletedMessage) {
        res.json(deletedMessage);
      } else {
        res.status(404).json("message doesn't exist!");
      }
    })
    .catch(() =>
      res.status(500).json("an error occurred please try again later!")
    );
};

module.exports = deleteMessage;
