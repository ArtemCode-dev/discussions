//import React from 'react'
import { useCallback } from 'react'
import Input from '../UI/Input/Input'
import s from './Header.module.scss'

function Header() {
  const searchVal = useCallback((val:string) => {
    console.log(val)
  }, [])

  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <div className={s.header__container}>
          <div className='col-span-4'>
            <span className='font-bold text-xl'>Discussions</span>
          </div>
          <div className='col-span-8 h-full'>
            <Input search={searchVal} type='search'/>
          </div>
          <div className='col-span-4 flex justify-end'>
            <button className='btn-red'>Log in</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header