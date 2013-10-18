node-streamagent
================

Connect http/websockets node.js client using arbitrary duplex stream

```js
   var net         = require('net');
   var StreamAgent = require('streamagent');
   http.request({path: '/some-endpoint', agent: StreamAgent(net.connect('/var/some.sock')), function(res) {
     // ..
   }).end();
```
