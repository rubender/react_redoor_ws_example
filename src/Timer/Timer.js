import React from 'react';
import {Connect} from '../store'
import s from './Timer.module.css'

const Timer = ({timer_str})=><div className={s.root}>
  {timer_str}
</div>

export default Connect(Timer);
