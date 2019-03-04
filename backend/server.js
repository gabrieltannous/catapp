const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const cors = require('cors');
const ddb = require('./config/database');
const helmet = require('helmet');

let api = require('./routes/api');
const app = express();

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'url',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'url',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'CatHistory',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error occured, table may be already created");
  } else {
    console.log("Table Created");
  }
});

app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy
let corsOptions = {
  origin: 'http://localhost:3000', // Allow from localhost:1337
};
app.use(cors(corsOptions));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

// To prevent /favicon.ico 404 not found
app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Setup and Run listening server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is listening on port ${port} :)`));
