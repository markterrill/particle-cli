/**
 * Created by David on 12/27/13.
 */


var Interpreter = require('./lib/Interpreter.js');
var cli = new Interpreter();
cli.supressWarmupMessages = true;
cli.startup();
cli.handle(process.argv);


