import React, { useEffect, useState } from 'react'
import s from './Leftbar.module.scss'
import LeftbarItem from './parts/LeftbarItem'
import publicConfig from '../../../config/pages/public.config'
import Icon from '../../UI/Icon/Icon'
import { ILinkType } from '../../../shared/types/Leftbar'
import Details from '../../UI/Details/Details'

type ITopList = {
  icon: ILinkType;
  title: string;
  link: string
}

function Leftbar():React.ReactNode {

  const [path, setPath] = useState(window.location.pathname)
  const currentPath = window.location.pathname;

  useEffect(() => {
    const firstPart = currentPath.split('/')[1];
    setPath(firstPart);
  }, [currentPath, path])
  

  const topList:ITopList[] = [
    {icon: {type: 'home'}, title: 'Home', link: publicConfig.HOME()},
    {icon: {type: 'all'}, title: 'All', link: publicConfig.ALL()},
    {icon: {type: 'popular'}, title: 'Popular', link: publicConfig.POPULAR()},
  ];

  const recentList = [
    {img: '', title: 'Tekken', link: publicConfig.HOME()},
    {img: '', title: 'Tekken', link: publicConfig.ALL()},
    {img: '', title: 'Tekken', link: publicConfig.POPULAR()},
  ]
  // const NavItem = ({icon, title, link}: ITopList, index:number) => {
  //   return (
  //     <LeftbarItem isSelected={path === icon.type} key={index} link={link}>
  //       <Icon type={icon.type} /> {title}
  //     </LeftbarItem>
  //   )
  // }

  return (
    <div className={s.leftbar}>
      <nav className={s.leftbar__nav}>
        <div className={s.leftbar__top}>
          {topList.map(({icon, title, link}, index) => (
            <div onClick={() => {
              setPath(currentPath)
              }}>
              <LeftbarItem isSelected={path === icon.type} key={index} link={link}>
                <span><Icon type={icon.type} /> {title}</span>
              </LeftbarItem>
            </div>
          ))}
        </div>
        <div className={s.leftbar__recent}>
          <Details title='RECENT'>
          {recentList.map(({img , title, link}, index) => (
              <div onClick={() => setPath(currentPath)}>
                <LeftbarItem isSelected={path === title} key={index} link={link}>
                  <span><img src={img ? img : ''} alt="" /> {title}</span>
                </LeftbarItem>
              </div>
            ))}
          </Details>
        </div>
        <div className={s.leftbar__сommunities}>
          <Details title='YOUR COMMUNITIES'>
            <LeftbarItem>
              <span><Icon type={'add'} /> Create a community</span>
            </LeftbarItem>
            {recentList.map(({img , title, link}, index) => (
              <div onClick={() => setPath(currentPath)}>
                <LeftbarItem isSelected={path === title} key={index} link={link}>
                  <span><img src={img ? img : ''} alt="" /> {title}</span>
                </LeftbarItem>
              </div>
            ))}
          </Details>
        </div>
        <nav className={s.leftbar__resources}>
          
        </nav>
      </nav>
    </div>
  )
}

export default Leftbar