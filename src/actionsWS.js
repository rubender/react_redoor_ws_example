export const  __module_name = 'actionsWS'

let __emit;

export const bindStateMethods = (getState, setState, emit) => {
  __emit = emit
};

let wss = new WebSocket('ws://localhost:8888')

wss.onmessage = (msg) => {
  let d = JSON.parse(msg.data);
  __emit(d.name, d.data);
}

export const listen = (name,data) => {
  name === 'ws_send' && sendMsg(data);
}

function sendMsg(msg) {
  wss.send(JSON.stringify(msg))
}