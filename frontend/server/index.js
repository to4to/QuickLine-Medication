// const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const twilio = require("twilio");
// const pino = require("express-pino-logger")();
// const app = express();

// dotenv.config();

// const client = new client({
//   accountSid: process.env.TWILIO_SID,
//   authToken: process.env.TWILIO_AUTH_TOKEN,
// });

// async function sendSMSi(to, from, body) {
  // const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)
//   const message = await client.messages.create({
//     body,
//     to,
//     from,
//   });
//   return message;
// }

// module.exports = sendSMSi;
// export default sendSMSi;

// app.listen(5000, () => console.log("Listening at port 5000"));

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);

// app.post("/api/messages", (req, res) => {
//   res.header("Content-Type", "application/json");
// });

// app.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     client.messages
//       .create({
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: req.body.to,
//         body: req.body.body
//       })
//       .then(() => {
//         res.send(JSON.stringify({ success: true }));
//       })
//       .catch(err => {
//         console.log(err);
//         res.send(JSON.stringify({ success: false }));
//       });
//   });

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Welcome to the Express Server')
// })

// app.get('/send-text', (req, res) => {
//     const { recipient, textmessage } = req.query
//     client.message.create({
//         body: textmessage,
//         to: recipient,
//         from: sender
//     }).then((message) => console.log(message.body));
// })

// app.listen(4000, () => console.log("Running on Port 4000"))




// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const twilio = require('twilio');

// dotenv.config();

// const app = express();
// const port = 4000;

// app.use(bodyParser.json());

// const client = twilio(
//   process.env.TWILIO_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// app.post('/send-sms', async (req, res) => {
//   const { to, body } = req.body;

//   try {
//     await client.messages.create({
//       body,
//       from: process.env.FROM_PHONE_NUMBER,
//       to,
//     });

//     res.json({ success: true, message: 'SMS sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to send SMS' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


