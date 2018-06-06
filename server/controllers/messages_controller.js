let messages = [];

let id = 0;

//HOW DO I KNOW WHEN TO USE CURLY BRACES?
// what is the request body?
module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  // updating text property using text from rb
  // which message do I update? based on value of id from request url params????
  // using .findIndex to get index where ids match ?? where is updateID coming from
  // how did messageIndex get put into messages????
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    // text || message.text?
    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  // going to delete using the value of id from the request url params
  // use .findIndex with id to get index of message object and then use .splice to
  // remove it from the messages array
  // sending updated messages array
  delete: (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
};
