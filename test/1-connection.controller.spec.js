var assert = require('assert');
var AWS = require('aws-sdk');

// Set the configurations
AWS.config.update({
    region: 'ap-southeast-2',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_ID
  });
  
describe('AWS Connection Tests', function () {
    it('should connect to DynamoDb', async function () {
        try {
            var connect = new AWS.DynamoDB();
        } catch(ex) {
            assert.fail();
        }
    });
});