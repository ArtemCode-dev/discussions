import { useState } from 'react'
import Icon from '../Icon/Icon';
import s from './Details.module.scss'

type Props = {
    children: React.ReactNode;
    title: string
}

function Details({children, title}: Props) {

    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <div className={s.details} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <div className={isOpen ? '' : 'rotate-180'}><Icon type='details_arrow'/></div>
            </div>
            <div className={isOpen ? s.summary_open : s.summary}>
                {children}
            </div>
        </div>
    )
}

export default Details