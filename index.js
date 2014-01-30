var Socket = require('net').Socket;
var Agent  = require('http').Agent;

function socketify(stream) {
  if (stream.constructor === Socket)
     return;
  stream.on('data', function(data) {
    if (stream.ondata)
      stream.ondata(data, 0, data.length); 
  });
  stream.setTimeout = function() {};
  stream.setNoDelay = function() {};
}

function StreamAgent(stream) {
  // Agent expect net.Socket-like stream
  socketify(stream);    

  var Agent = new Agent();
  agent.createSocket(req, options) {
    return stream;
  }
  return agent;
}

module.exports = StreamAgent;
