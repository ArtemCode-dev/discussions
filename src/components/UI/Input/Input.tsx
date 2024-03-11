import React, { memo, useRef, useState } from 'react'
import s from './Input.module.scss'

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
                        <svg className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.25065 2.16634C4.4432 2.16634 2.16732 4.44223 2.16732 7.24967C2.16732 10.0571 4.4432 12.333 7.25065 12.333C8.65324 12.333 9.92209 11.7658 10.8425 10.8467C11.7647 9.92589 12.334 8.6549 12.334 7.24967C12.334 4.44223 10.0581 2.16634 7.25065 2.16634ZM0.833984 7.24967C0.833984 3.70585 3.70682 0.833008 7.25065 0.833008C10.7945 0.833008 13.6673 3.70585 13.6673 7.24967C13.6673 8.78248 13.1292 10.1905 12.2326 11.2939L14.9716 14.0278C15.2322 14.2879 15.2326 14.7101 14.9725 14.9706C14.7124 15.2312 14.2903 15.2316 14.0297 14.9715L11.2893 12.2362C10.1868 13.13 8.78088 13.6663 7.25065 13.6663C3.70682 13.6663 0.833984 10.7935 0.833984 7.24967Z" fill="white"/>
                        </svg>
                        <input onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                searchFunc()
                            }
                        }} ref={inputRef} onChange={(e) => changeVal(e)} value={val} type="text" className='bg-inherit w-full outline-none'/>
                        <svg onClick={() => deleteFunc()} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.99999 6.58578L14.2929 0.292893C14.6834 -0.0976313 15.3166 -0.0976307 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 7.99999L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L7.99999 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292894 15.7071C-0.0976307 15.3166 -0.0976313 14.6834 0.292893 14.2929L6.58578 7.99999L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            )
    }
})

export default Input