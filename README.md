#  minidropbox with SMS
Make mini dropbox (only back-end) that can store an image in s3 and write the info automatically in dynamoDB. when being deleted the image in s3, the info in dynamoDB would be deleated as well. In addition, I added the SMS function by twilio. When file is uploaded in S3, the SMS will be sent.

## The purpose of this application
To learn how to use s3, DynamoDB, twilio(SMS) and the serverless framework.

### How can it be testesd? 

#### postman
<br/>

#### Store(Post) an image
Choose "POST", type URL in the box next to the http method and JSON data in the Body like
{"image_url": "https://assets-cdn.github.com/images/modules/open_graph/github-mark.png", 
"key": "github.png"}. Then check your phone whether you get the SMS from twilio.
<br/>

#### Get all image information 
Choose "GET" and type URL in the box next to the http method
<br/>

#### Delete an image from s3 and change status in dynamoDB
Choose "PUT" and type URL/{name} in the box next to the http method and JSON data in the Body like
{"key": "github.png"}
<br/>

### What I used
Javascript, AWS s3, AWS DynamoDB, twilio(SMS), Serverless Framework
