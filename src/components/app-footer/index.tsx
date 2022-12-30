/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-28 13:46:45
 * @LastEditTime: 2022-12-28 13:46:53
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <div>AppFooter</div>
}

export default memo(AppFooter)
