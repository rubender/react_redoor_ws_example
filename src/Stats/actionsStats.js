export const  __module_name = 'actionsStats'

let __setState = null;

export const bindStateMethods = (getState, setState, emit) => {
  __setState = setState;
};

export const initState = {
  stats_array:[],
  interval:1
}

export const listen = (name,data) =>{
  name === 'stats' && updateStats(data);
  name === 'interval_changed' && updateInterval(data);
}

function updateInterval(data) {
  __setState({
    interval:data.interval,
  })
}

function updateStats(data) {
  __setState({
    stats_array:data.stats_array,
  })
}
