import React from 'react'
import s from './Leftbar.module.scss'

function Leftbar():React.ReactNode {
  return (
    <div className={s.leftbar}>
      <nav className={s.leftbar__nav}>Leftbar</nav>
    </div>
  )
}

export default Leftbar