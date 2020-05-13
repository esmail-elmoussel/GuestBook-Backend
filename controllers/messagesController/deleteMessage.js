const deleteMessage = (Message) => (req, res) => {
  const { _id } = req.params;

  Message.findOne({ _id }).then((data) => res.json(data));
  //   Message.findOneAndDelete({ _id })
  //     .then((deletedMessage) => res.json(deletedMessage))
  //     .catch(() =>
  //       res.status(500).json("an error occurred please try again later!")
  //     );
};

module.exports = deleteMessage;
