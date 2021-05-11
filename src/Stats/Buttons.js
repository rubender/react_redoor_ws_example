import React from 'react';
import {Connect} from '../store'
import s from './Stats.module.css'


const DATA_INTERVAL_PLUS = {
  name:'change_interval',
  interval:1
}
const DATA_INTERVAL_MINUS = {
  name:'change_interval',
  interval:-1
}

const Buttons = ({cxEmit, interval})=><div className={s.root}>
  <div className={s.btns}>
      <button onClick={e=>cxEmit('ws_send',DATA_INTERVAL_PLUS)}>
        plus
      </button>

      <div className={s.len}>interval:{interval}</div>

      <button onClick={e=>cxEmit('ws_send',DATA_INTERVAL_MINUS)}>
        minus
      </button>
  </div>
</div>

export default Connect(Buttons);