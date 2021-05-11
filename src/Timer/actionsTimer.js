export const  __module_name = 'actionsTimer'

let __setState;

export const bindStateMethods = (getState, setState) => {
  __setState = setState;
};

export const initState = {
  timer_str:''
}

export const listen = (name,data) =>{
  if (name === 'timer') updateTimer(data);
}

function updateTimer(data) {
  __setState({timer_str:data.time_str})
}
