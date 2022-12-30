/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 03:37:58
 * @LastEditTime: 2022-12-28 15:17:11
 */
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
