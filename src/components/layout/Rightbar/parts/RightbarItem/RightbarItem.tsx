import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    link: string;
}

function RightbarItem({children, link}: Props) {
  return (
    <Link to={link}>
        {children}
    </Link>
  )
}

export default RightbarItem