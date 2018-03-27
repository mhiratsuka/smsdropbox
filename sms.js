'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Twilio Credentials
const accountSid = 'ACb63cad4d19a7166e9edbf83b7b71ca1d';
const authToken = 'cd1704ca6c77ae12f7fa722bfa6d4160';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

module.exports.sms = (event) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    console.log(`New object has been created: ${filename}`);
    sendSms(filename);
  })
  
  function sendSms(filename){
    let fileName = filename;
    client.messages.create({
            to: '+16047821123',
            from: '+16042107058',
            body: `The new file ${fileName} was added to your S3 bucket`,
          },
          (err, message) => {
            console.log(message.sid)
          }
        )
  }
};