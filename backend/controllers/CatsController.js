const axios = require('axios');
var api_link = "https://api.thecatapi.com/v1/images/search";
const ddb = require('../config/database');

module.exports.get_cat = async (req, res, next) => {
  axios.get(api_link)
    .then(cat => {

      var params = {
        TableName: 'CatHistory',
        Item: {
          'id': {
            S: cat.data[0].id
          },
          'url': {
            S: cat.data[0].url
          }
        }
      };

      try {
        // Call DynamoDB to add the item to the table
        ddb.putItem(params, function (err) {
          if (err) {
            console.log("Error", err);
          } else {
            console.log("Success data has been added to table");
          }
        });
      } catch (ex) {
        console.log(ex);
      }

      return res.status(201).json({
        image: cat.data[0]
      })
    });

}