/*
 * @Author: Pan Jingyi
 * @Date: 2022-12-26 04:26:15
 * @LastEditTime: 2022-12-26 04:26:20
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
