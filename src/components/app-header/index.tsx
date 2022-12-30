/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 13:40:45
 * @LastEditTime: 2022-12-28 14:45:50
 */
import React, { memo, ReactElement } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}
interface TitleItem {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  function handleTitle(
    { title, type, link }: TitleItem,
    index: number
  ): ReactElement {
    if (type === 'path') {
      return (
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="wrap-v1 appHeaderBox">
        <div className="headerLeft">
          <a className="sprite_01 logo" href="#">
            网易云音乐
          </a>
          <div className="left_titles">
            {headerTitles.map((titleItem, index) => {
              return (
                <div key={titleItem.title} className="titleItem">
                  {handleTitle(titleItem, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="headerRight">
          <div className="searchBox">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined className="searchIcon" />}
            />
          </div>
          <div className="framer">创作者中心</div>
          <a href="#">登录</a>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
