'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Twilio Credentials
const accountSid = 'your_account_SID';
const authToken = 'your_auth_token';

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
            to: 'phonenumber',
            from: 'phonenumber',
            body: `The new file ${fileName} was added to your S3 bucket`,
          },
          (err, message) => {
            console.log(message.sid)
          }
        )
  }
};