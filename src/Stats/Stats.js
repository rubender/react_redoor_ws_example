import React from 'react';
import {Connect} from '../store'
import s from './Stats.module.css'
import Buttons from './Buttons'

const Bar = ({h})=><div className={s.bar} style={{height:`${h}px`}}>
  {h}
</div>

const Stats = ({cxRun, stats_array})=><div className={s.root}>
  <div className={s.bars}>
    {stats_array.map((it,v)=><Bar key={v} h={it} />)}
  </div>
  <Buttons/>
</div>

export default Connect(Stats);

