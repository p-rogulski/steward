import express = require('express');
import amqplib=require('amqplib/callback_api')
// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Test send css!');
});

const server=app.listen(4921, function () {
  console.log('Example app listening on porst 4921!');
//   var connection = amqplib.connect('amqp://admin:admin@rabbitmq:5672',function(err,conn){

//     conn.createChannel(function(error1, channel) {
//       channel.publish('logs', '', Buffer.from('Hello my World!'));
//     });
    
// });
});



/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}