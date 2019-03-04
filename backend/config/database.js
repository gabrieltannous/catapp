var AWS = require('aws-sdk');

// Set the configurations
AWS.config.update({
  region: 'ap-southeast-2',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID
});

// Create the DynamoDB service object
module.exports = new AWS.DynamoDB({apiVersion: '2012-08-10'});