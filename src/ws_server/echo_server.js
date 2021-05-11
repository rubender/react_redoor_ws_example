const WebSocket = require('ws');
const PORT = 8888;
const wss = new WebSocket.Server({ port: PORT });
let g_interval = 1;

function sendToAll( data) {
  let str = JSON.stringify(data);
  wss.clients.forEach(function each(client) {
    client.send(str);
  });
}

wss.on('connection', function onConnect(ws) {
  ws.on('message', function incoming(data) {
    let d = JSON.parse(data);
    d.name === 'change_interval' && change_interval(d);
  });
});

function change_interval(data) {
  g_interval += data.interval;
  sendToAll({name:'interval_changed', data:{interval:g_interval}});
}

setInterval(e=>{
  let stats_array = [];
  for(let i=0;i<30;i++) {
    stats_array.push((Math.random()*(i*g_interval))|0);
  }
  let data  = {
    stats_array
  }
  sendToAll({name:'stats', data});
},500);


setInterval(e=>{
  let d = new Date();
  let H = d.getHours();
  let m = ('0'+d.getMinutes()).substr(-2);
  let s = ('0'+d.getSeconds()).substr(-2);
  let time_str = `${H}:${m}:${s}`;
  sendToAll({name:'timer', data:{time_str}});
},1000);