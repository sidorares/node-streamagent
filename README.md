node-streamagent
================

[![Greenkeeper badge](https://badges.greenkeeper.io/sidorares/node-streamagent.svg)](https://greenkeeper.io/)

Connect http/websockets node.js client using arbitrary duplex stream

```js
var net         = require('net');
var StreamAgent = require('stream-agent');
http.request({
  path: '/some-endpoint', 
  agent: StreamAgent(net.connect('/var/some.sock'))
}, function(res) {
     // ..
}).end();
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sidorares/node-streamagent/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

