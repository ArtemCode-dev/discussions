import React, { memo, useRef, useState } from 'react'
import s from './Input.module.scss'
import Icon from '../Icon/Icon';

interface IProps {
    type: 'search';
    //val: string;
    //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    //del?: any;
    search?: (val:string) => void;
}

const Input:React.FC<IProps> = memo(({type = 'search', search}) => {
    const [val, setVal] = useState('')
    const inputRef = useRef(null)

    const deleteFunc = () => {
        setVal('')
    }
    const searchFunc = () => {
        search && search(val)
    }
    const changeVal = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }
    console.log('render')
    switch(type) {
        case 'search':
            return (
                <div className={'w-full h-full'}>
                    <div className={s.search}>
                        <Icon type='search'/>
                        <input onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                searchFunc()
                            }
                        }} ref={inputRef} onChange={(e) => changeVal(e)} value={val} type="text" className='bg-inherit w-full outline-none'/>
                        <Icon type='delete' onClick={() => deleteFunc()}/>
                    </div>
                </div>
            )
    }
})

export default Input