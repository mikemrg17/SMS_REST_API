require('dotenv').config({path: __dirname + '/.env'})

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is a test coming from TWILIO',
        from: '+16072845221',
        to: '+525540809848'
    })
    .then(message => console.log(message.sid));