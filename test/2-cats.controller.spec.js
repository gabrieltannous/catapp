var assert = require('assert');
const axios = require('axios');
var api_link = "https://api.thecatapi.com/v1/images/search";

describe('Cat Controller Tests', function () {
    it('cat api is working', async function () {
        await axios.get(api_link)
            .then(async result => {
                assert.notEqual(result.data[0], undefined);
            })
    });

    it('cat image url exist', async function () {
        await axios.get(api_link)
            .then(async result => {
                assert.notEqual(result.data[0].url, undefined);
            })
    });
});