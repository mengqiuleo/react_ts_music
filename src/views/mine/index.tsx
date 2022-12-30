/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:17:32
 * @LastEditTime: 2022-12-26 04:17:45
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
