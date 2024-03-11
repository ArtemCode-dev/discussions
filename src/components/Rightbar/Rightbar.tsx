import React from 'react'
import s from './Rightbar.module.scss'

function Rightbar():React.ReactNode {
  return (
    <div className={s.rightbar}>
      <nav className={s.rightbar__nav}>Rightbar</nav>
    </div>
  )
}

export default Rightbar