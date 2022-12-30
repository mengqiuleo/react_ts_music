/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:17:15
 * @LastEditTime: 2022-12-26 04:17:23
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
