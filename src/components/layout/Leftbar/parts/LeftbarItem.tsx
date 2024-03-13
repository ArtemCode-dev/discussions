import React from 'react'
import s from './LeftbarItem.module.scss'
import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    link?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

function LeftbarItem({onClick, children, link, isSelected = false}: Props) {
    return (
        <div className={isSelected ? s.item_selected : s.item}>
            {link ? 
                <Link className={s.content} to={link}>
                    {children}
                </Link> : 
                <div onClick={onClick} className={s.content}>
                    {children}
                </div>
            }
        </div>
      )
}

export default LeftbarItem