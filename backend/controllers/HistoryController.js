const ddb = require('../config/database');

module.exports.get_history = async (req, res, next) => {
    var params = {
        TableName: 'CatHistory'
    };

    ddb.scan(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            var images = new Array();
            data.Items.forEach(function (element, index, array) {
                images.push(element);
            });
            return res.status(201).json({
                images
            })
        }
    });
}