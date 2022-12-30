/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 15:15:34
 * @LastEditTime: 2022-12-28 15:35:41
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="wrap-v1">
        <div className="discover-nav">
          {discoverMenu.map((item) => {
            return (
              <div className="nav-item" key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
