//import React from 'react'
import { useCallback } from 'react'
import Input from '../../UI/Input/Input'
import s from './Header.module.scss'

function Header() {
  const searchVal = useCallback((val:string) => {
    console.log(val)
  }, [])

  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <div className={s.header__container}>
          <div className='col-span-3'>
            <span className='font-bold text-xl'>Discussions</span>
          </div>
          <div className='col-span-8 h-full'>
            <div className={s.search}>
              <div className='col-start-4 col-end-12'>
                <Input search={searchVal} type='search'/>
              </div>
            </div>
          </div>
          <div className='col-span-5 flex justify-end'>
            <button className='btn-red'>Log in</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header